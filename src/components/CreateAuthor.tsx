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
      <h2>New Author</h2>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={authorName}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          {error && <div>Error: {error.message}</div>}
          <br/>
          <div>
            <button type="submit" disabled={loading}>
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
