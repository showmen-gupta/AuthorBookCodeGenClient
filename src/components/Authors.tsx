import { useGetAuthorsQuery } from "../utils/__generated__/graphql";

export function Authors() {
  const { data, loading, error } = useGetAuthorsQuery();

  if (loading || !data) {
    return <div>Loading</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  const { allAuthors } = data;

  const deleteAuthor = () => {
    return null;
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
            <button className="button is-danger" onClick={deleteAuthor}>Delete</button>
            </div>
          </div>
        </article>
        ))}
        </div>
        </div>
      </div>
      
  );
}
