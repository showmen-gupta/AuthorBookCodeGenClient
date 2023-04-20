import { refetchGetBooksQuery, useDeleteBookMutation, useGetBooksQuery } from "../utils/__generated__/graphql";

export function Books() {
  const { data, loading, error } = useGetBooksQuery();
  const [deleteBook] = useDeleteBookMutation({
    refetchQueries: [refetchGetBooksQuery()],
  });
  if (loading || !data) {
    return <div>Loading</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  const { allBooks } = data;

  const removeBook = async (book_id: string| null | undefined) => {
    if(!book_id) {
      return;
    }    
    try {        
        await deleteBook({
          variables: {
            id: book_id,
          },
        });
      } catch (error) {
        return console.error(error);
    }
  }

  return (
    <div className="box">
      <h3 className="title is-3">All Books with Authors</h3>
      <div className="table-container">
        <table className="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
          <thead>
            <tr>
              <th>Title</th>
              <th>Price</th>
              <th>Author</th>
              <th>Operation</th>
            </tr>
          </thead>
          <tbody>
          {allBooks?.map((book) => (
            <>
            <tr>
              <td>{book?.name}</td>
              <td>$ {book?.price}</td>
              <td>{book?.author.name}</td>
              <td><button className="button is-danger" onClick={() =>removeBook(book?.id)}>Delete</button></td>
            </tr>
            </>
            ))}
          </tbody>
        </table>
      </div>
    </div>


  );
}
