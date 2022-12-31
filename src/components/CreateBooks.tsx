import { useState } from "react";
import {
  refetchGetBooksQuery,
  useInsertBookMutation,
} from "../utils/__generated__/graphql";

export function CreateBooks() {
  const [bookName, setBookName] = useState<string>("");
  const [bookPrice, setBookPrice] = useState<number>(0);
  const [authorId, setAuthortId] = useState<string>("");

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
      <h2>New Book</h2>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={bookName}
              onChange={(e) => setBookName(e.target.value)}
            />
            <br />
            <input
              type="number"
              name="price"
              placeholder="Price"
              value={bookPrice}
              onChange={(e) => setBookPrice(parseInt(e.target.value))}
            />
            <br />
            <input
              type="text"
              name="authorId"
              placeholder="Author Id"
              value={authorId}
              onChange={(e) => setAuthortId(e.target.value)}
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
