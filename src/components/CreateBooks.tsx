import { useState } from "react";
import {
  refetchGetBooksQuery,
  useGetAuthorsQuery,
  useInsertBookMutation,
} from "../utils/__generated__/graphql";

export function CreateBooks() {
  const [bookName, setBookName] = useState<string>("");
  const [bookPrice, setBookPrice] = useState<number>(0);
  const [authorId, setAuthortId] = useState<string>("");
  
  const { data } = useGetAuthorsQuery();
  
  const [createBooks, { loading, error }] = useInsertBookMutation({
    refetchQueries: [refetchGetBooksQuery()],
  });

  const handleSubmit = async (e: React.SyntheticEvent<HTMLElement>) => {
    e.preventDefault();
    try {
      await createBooks({
        variables: {
          name: bookName,
          price: bookPrice,
          author_id: authorId,
        },
      });
    } catch (error) {
      return console.error(error);
    }
  };
  
  return (
    <div>
        <form onSubmit={handleSubmit} className="box">
        <h3 className="title is-3">Create Book</h3>
        <div className="field">
          <label className="label">Name</label>
            <input
              type="text"
              className="input is-info" 
              name="name"
              placeholder="Name"
              value={bookName}
              onChange={(e) => setBookName(e.target.value)}
            />
          </div>
          <div className="field">
            <label className="label">Price</label>
              <input
                type="number"
                className="input is-info" 
                name="price"
                placeholder="Price"
                value={bookPrice}
                onChange={(e) => setBookPrice(parseInt(e.target.value))}
              />
            </div>            
            <div className="select is-primary field">
                <select onChange={(e) => setAuthortId(e.target.value)}>
                  {data?.allAuthors?.map((author: any) => (
                    <>
                      <option value={author?.id}>{author?.name}</option>
                    </>         
                  ))}
              </select>
            </div>
          {error && <div>Error: {error.message}</div>}
          <br/>
          <div>
          <button className="button is-primary" type="submit" disabled={loading}>Add</button>
          </div>
        </form>
      </div>
  );
}
