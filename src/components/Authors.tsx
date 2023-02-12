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

  return (
    <div className="box">
      <h3 className="title is-3">All Authors</h3>    
      <div className="tile">
      <div className="tile is-parent is-vertical">
      {allAuthors?.map((author) => (
        <article className="tile is-child notification is-secondary">
          <label className="subtitle" key={author?.id}>{author?.name}</label>
        </article>
        ))}
        </div>
        </div>
      </div>
  );
}
