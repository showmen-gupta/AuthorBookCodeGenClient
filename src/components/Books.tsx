import { useGetBooksQuery } from "../utils/__generated__/graphql";

export function Books() {
  const { data, loading, error } = useGetBooksQuery();

  if (loading || !data) {
    return <div>Loading</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  const { allBooks } = data;

  return (
    <div>
      <h2>All Books with Authors</h2>
      <ul>
        {allBooks?.map((book) => (
          <li key={book?.id}>
            Title:&nbsp; {book?.name}&nbsp; Price:&nbsp; {book?.price}&nbsp;
            Author:&nbsp; {book?.author.name}&nbsp;
          </li>
        ))}
      </ul>
    </div>
  );
}
