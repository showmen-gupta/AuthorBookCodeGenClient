import React, { useState } from "react";
import {
  refetchGetAuthorsQuery,
  useCreateAuthorMutation,
} from "../utils/__generated__/graphql";

export function CreateAuthor() {
  const [authorName, setName] = useState<string>("");

  const [createAuthor, { loading, error }] = useCreateAuthorMutation({
    refetchQueries: [refetchGetAuthorsQuery()],
  });

  const handleSubmit = async (e: React.SyntheticEvent<HTMLElement>) => {
    e.preventDefault();
    try {
      await createAuthor({
        variables: {
          name: authorName,
        },
      });
    } catch (error) {
      return console.error(error);
    }
  };

  return (
      <div>
        <form onSubmit={handleSubmit} className="box">
        <h3 className="title is-3">Create Author</h3>
        <div className="field">
          <label className="label">Name</label>
          <input 
            className="input is-info" 
            type="text" 
            placeholder="Name"              
            onChange={(e) => setName(e.target.value)}
          />
          </div>
          {error && <div>Error: {error.message}</div>}
          <div>
          <button className="button is-primary" type="submit" disabled={loading}>Add</button>
          </div>
        </form>
      </div>
  );
}
