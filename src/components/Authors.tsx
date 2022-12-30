import { useGetAuthorsQuery } from '../utils/__generated__/graphql'

export function Authors() {
  const { data, loading, error } = useGetAuthorsQuery()

  if (loading || !data) {
    return <div>Loading</div>
  }

  if (error) {
    return <div>{error.message}</div>
  }

  const { allAuthors }   = data

  return (
    <div>
      <h2>Customers</h2>
      <ul>
        {allAuthors?.map((author) => (
          <li key={author?.id}>{author?.name}</li>
        ))}
      </ul>
    </div>
  )
}