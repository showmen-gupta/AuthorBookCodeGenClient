import React, { useState } from "react";
import {
  refetchGetAuthorsQuery,
  useUpdateCreatedAuthorMutation,
  useGetAuthorsQuery
} from "../../utils/__generated__/graphql";

export function UpdateAuthor() {
  const [authorName, setName] = useState<string>("");
  const [authorId, setAuthortId] = useState<string>("");

  const [updateAuthor, { loading, error }] = useUpdateCreatedAuthorMutation({
    refetchQueries: [refetchGetAuthorsQuery()],
  });

  const { data } = useGetAuthorsQuery();
  
  const handleSubmit = async (e: React.SyntheticEvent<HTMLElement>) => {
    e.preventDefault();
    try {
      await updateAuthor({
        variables: {
          id:   authorId,
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
        <h3 className="title is-3">Update Author</h3>
        <div className="field">
        <label className="label">Author</label>
        <div className="select is-primary">
                <select onChange={(e) => setAuthortId(e.target.value)}>
                  {data?.allAuthors?.map((author: any) => (
                    <>
                      <option value={author?.id}>{author?.name}</option>
                    </>         
                  ))}
              </select>
        </div>
        </div>
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
