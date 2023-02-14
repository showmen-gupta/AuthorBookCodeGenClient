import { refetchGetAuthorsQuery, useDeleteAuthorMutation, useGetAuthorsQuery } from "../utils/__generated__/graphql";

export function Authors() {
  const { data, loading, error } = useGetAuthorsQuery();
  const [deleteAuthor] = useDeleteAuthorMutation({
    refetchQueries: [refetchGetAuthorsQuery()],
  });
  
  if (loading || !data) {
    return <div>Loading</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  const { allAuthors } = data;

  const removeAuthor = async (author_id: string| null | undefined) => {
    if(!author_id) {
      return;
    }    
    try {        
        await deleteAuthor({
          variables: {
            id: author_id,
          },
        });
      } catch (error) {
        return console.error(error);
    }
  }

  return (
    <div className="box">
      <h3 className="title is-3">All Authors</h3>    
      <div className="tile">
      <div className="tile is-parent is-vertical">
        {allAuthors?.map((author) => (
          <article className="tile is-child notification is-secondary">
            <div className="columns is-vcentered">
              <div className="column is-10">
              <label className="subtitle" key={author?.id}>{author?.name}</label>
              </div>
              <div className="column">
              <button className="button is-danger" onClick={() =>removeAuthor(author?.id)}>Delete</button>
              </div>
            </div>
          </article>
          ))}
        </div>
        </div>
      </div>
  );
}
