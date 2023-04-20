import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Author = {
  __typename?: 'Author';
  id?: Maybe<Scalars['ID']>;
  name: Scalars['String'];
};

export type Book = {
  __typename?: 'Book';
  author: Author;
  id?: Maybe<Scalars['ID']>;
  name: Scalars['String'];
  price: Scalars['Float'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addAuthor: Author;
  addBook: Book;
  deleteAuthor?: Maybe<Scalars['Boolean']>;
  deleteBook?: Maybe<Scalars['Boolean']>;
  updateAuthor: Author;
  updateBook: Book;
};


export type MutationAddAuthorArgs = {
  name: Scalars['String'];
};


export type MutationAddBookArgs = {
  author_id: Scalars['ID'];
  name: Scalars['String'];
  price: Scalars['Float'];
};


export type MutationDeleteAuthorArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteBookArgs = {
  id: Scalars['ID'];
};


export type MutationUpdateAuthorArgs = {
  id: Scalars['ID'];
  name: Scalars['String'];
};


export type MutationUpdateBookArgs = {
  author_id: Scalars['ID'];
  id: Scalars['ID'];
  name: Scalars['String'];
  price: Scalars['Float'];
};

export type Query = {
  __typename?: 'Query';
  allAuthors?: Maybe<Array<Maybe<Author>>>;
  allBooks?: Maybe<Array<Maybe<Book>>>;
  author?: Maybe<Author>;
  book?: Maybe<Book>;
};


export type QueryAuthorArgs = {
  id: Scalars['ID'];
};


export type QueryBookArgs = {
  id: Scalars['ID'];
};

export type GetAuthorsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAuthorsQuery = { __typename?: 'Query', allAuthors?: Array<{ __typename?: 'Author', id?: string | null, name: string } | null> | null };

export type CreateAuthorMutationVariables = Exact<{
  name: Scalars['String'];
}>;


export type CreateAuthorMutation = { __typename?: 'Mutation', addAuthor: { __typename?: 'Author', id?: string | null, name: string } };

export type UpdateCreatedAuthorMutationVariables = Exact<{
  id: Scalars['ID'];
  name: Scalars['String'];
}>;


export type UpdateCreatedAuthorMutation = { __typename?: 'Mutation', updateAuthor: { __typename?: 'Author', id?: string | null, name: string } };

export type DeleteAuthorMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type DeleteAuthorMutation = { __typename?: 'Mutation', deleteAuthor?: boolean | null };

export type GetBooksQueryVariables = Exact<{ [key: string]: never; }>;


export type GetBooksQuery = { __typename?: 'Query', allBooks?: Array<{ __typename?: 'Book', id?: string | null, name: string, price: number, author: { __typename?: 'Author', id?: string | null, name: string } } | null> | null };

export type InsertBookMutationVariables = Exact<{
  name: Scalars['String'];
  price: Scalars['Float'];
  author_id: Scalars['ID'];
}>;


export type InsertBookMutation = { __typename?: 'Mutation', addBook: { __typename?: 'Book', id?: string | null, name: string, price: number, author: { __typename?: 'Author', id?: string | null, name: string } } };

export type UpdateInsertedBookMutationVariables = Exact<{
  id: Scalars['ID'];
  name: Scalars['String'];
  price: Scalars['Float'];
  author_id: Scalars['ID'];
}>;


export type UpdateInsertedBookMutation = { __typename?: 'Mutation', updateBook: { __typename?: 'Book', id?: string | null, name: string, price: number, author: { __typename?: 'Author', id?: string | null, name: string } } };

export type DeleteBookMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type DeleteBookMutation = { __typename?: 'Mutation', deleteBook?: boolean | null };


export const GetAuthorsDocument = gql`
    query getAuthors {
  allAuthors {
    id
    name
  }
}
    `;

/**
 * __useGetAuthorsQuery__
 *
 * To run a query within a React component, call `useGetAuthorsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAuthorsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAuthorsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAuthorsQuery(baseOptions?: Apollo.QueryHookOptions<GetAuthorsQuery, GetAuthorsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAuthorsQuery, GetAuthorsQueryVariables>(GetAuthorsDocument, options);
      }
export function useGetAuthorsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAuthorsQuery, GetAuthorsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAuthorsQuery, GetAuthorsQueryVariables>(GetAuthorsDocument, options);
        }
export type GetAuthorsQueryHookResult = ReturnType<typeof useGetAuthorsQuery>;
export type GetAuthorsLazyQueryHookResult = ReturnType<typeof useGetAuthorsLazyQuery>;
export type GetAuthorsQueryResult = Apollo.QueryResult<GetAuthorsQuery, GetAuthorsQueryVariables>;
export function refetchGetAuthorsQuery(variables?: GetAuthorsQueryVariables) {
      return { query: GetAuthorsDocument, variables: variables }
    }
export const CreateAuthorDocument = gql`
    mutation createAuthor($name: String!) {
  addAuthor(name: $name) {
    id
    name
  }
}
    `;
export type CreateAuthorMutationFn = Apollo.MutationFunction<CreateAuthorMutation, CreateAuthorMutationVariables>;

/**
 * __useCreateAuthorMutation__
 *
 * To run a mutation, you first call `useCreateAuthorMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateAuthorMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createAuthorMutation, { data, loading, error }] = useCreateAuthorMutation({
 *   variables: {
 *      name: // value for 'name'
 *   },
 * });
 */
export function useCreateAuthorMutation(baseOptions?: Apollo.MutationHookOptions<CreateAuthorMutation, CreateAuthorMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateAuthorMutation, CreateAuthorMutationVariables>(CreateAuthorDocument, options);
      }
export type CreateAuthorMutationHookResult = ReturnType<typeof useCreateAuthorMutation>;
export type CreateAuthorMutationResult = Apollo.MutationResult<CreateAuthorMutation>;
export type CreateAuthorMutationOptions = Apollo.BaseMutationOptions<CreateAuthorMutation, CreateAuthorMutationVariables>;
export const UpdateCreatedAuthorDocument = gql`
    mutation updateCreatedAuthor($id: ID!, $name: String!) {
  updateAuthor(id: $id, name: $name) {
    id
    name
  }
}
    `;
export type UpdateCreatedAuthorMutationFn = Apollo.MutationFunction<UpdateCreatedAuthorMutation, UpdateCreatedAuthorMutationVariables>;

/**
 * __useUpdateCreatedAuthorMutation__
 *
 * To run a mutation, you first call `useUpdateCreatedAuthorMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateCreatedAuthorMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateCreatedAuthorMutation, { data, loading, error }] = useUpdateCreatedAuthorMutation({
 *   variables: {
 *      id: // value for 'id'
 *      name: // value for 'name'
 *   },
 * });
 */
export function useUpdateCreatedAuthorMutation(baseOptions?: Apollo.MutationHookOptions<UpdateCreatedAuthorMutation, UpdateCreatedAuthorMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateCreatedAuthorMutation, UpdateCreatedAuthorMutationVariables>(UpdateCreatedAuthorDocument, options);
      }
export type UpdateCreatedAuthorMutationHookResult = ReturnType<typeof useUpdateCreatedAuthorMutation>;
export type UpdateCreatedAuthorMutationResult = Apollo.MutationResult<UpdateCreatedAuthorMutation>;
export type UpdateCreatedAuthorMutationOptions = Apollo.BaseMutationOptions<UpdateCreatedAuthorMutation, UpdateCreatedAuthorMutationVariables>;
export const DeleteAuthorDocument = gql`
    mutation deleteAuthor($id: ID!) {
  deleteAuthor(id: $id)
}
    `;
export type DeleteAuthorMutationFn = Apollo.MutationFunction<DeleteAuthorMutation, DeleteAuthorMutationVariables>;

/**
 * __useDeleteAuthorMutation__
 *
 * To run a mutation, you first call `useDeleteAuthorMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteAuthorMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteAuthorMutation, { data, loading, error }] = useDeleteAuthorMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteAuthorMutation(baseOptions?: Apollo.MutationHookOptions<DeleteAuthorMutation, DeleteAuthorMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteAuthorMutation, DeleteAuthorMutationVariables>(DeleteAuthorDocument, options);
      }
export type DeleteAuthorMutationHookResult = ReturnType<typeof useDeleteAuthorMutation>;
export type DeleteAuthorMutationResult = Apollo.MutationResult<DeleteAuthorMutation>;
export type DeleteAuthorMutationOptions = Apollo.BaseMutationOptions<DeleteAuthorMutation, DeleteAuthorMutationVariables>;
export const GetBooksDocument = gql`
    query getBooks {
  allBooks {
    id
    name
    price
    author {
      id
      name
    }
  }
}
    `;

/**
 * __useGetBooksQuery__
 *
 * To run a query within a React component, call `useGetBooksQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBooksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBooksQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetBooksQuery(baseOptions?: Apollo.QueryHookOptions<GetBooksQuery, GetBooksQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetBooksQuery, GetBooksQueryVariables>(GetBooksDocument, options);
      }
export function useGetBooksLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetBooksQuery, GetBooksQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetBooksQuery, GetBooksQueryVariables>(GetBooksDocument, options);
        }
export type GetBooksQueryHookResult = ReturnType<typeof useGetBooksQuery>;
export type GetBooksLazyQueryHookResult = ReturnType<typeof useGetBooksLazyQuery>;
export type GetBooksQueryResult = Apollo.QueryResult<GetBooksQuery, GetBooksQueryVariables>;
export function refetchGetBooksQuery(variables?: GetBooksQueryVariables) {
      return { query: GetBooksDocument, variables: variables }
    }
export const InsertBookDocument = gql`
    mutation insertBook($name: String!, $price: Float!, $author_id: ID!) {
  addBook(name: $name, price: $price, author_id: $author_id) {
    id
    name
    price
    author {
      id
      name
    }
  }
}
    `;
export type InsertBookMutationFn = Apollo.MutationFunction<InsertBookMutation, InsertBookMutationVariables>;

/**
 * __useInsertBookMutation__
 *
 * To run a mutation, you first call `useInsertBookMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertBookMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertBookMutation, { data, loading, error }] = useInsertBookMutation({
 *   variables: {
 *      name: // value for 'name'
 *      price: // value for 'price'
 *      author_id: // value for 'author_id'
 *   },
 * });
 */
export function useInsertBookMutation(baseOptions?: Apollo.MutationHookOptions<InsertBookMutation, InsertBookMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<InsertBookMutation, InsertBookMutationVariables>(InsertBookDocument, options);
      }
export type InsertBookMutationHookResult = ReturnType<typeof useInsertBookMutation>;
export type InsertBookMutationResult = Apollo.MutationResult<InsertBookMutation>;
export type InsertBookMutationOptions = Apollo.BaseMutationOptions<InsertBookMutation, InsertBookMutationVariables>;
export const UpdateInsertedBookDocument = gql`
    mutation updateInsertedBook($id: ID!, $name: String!, $price: Float!, $author_id: ID!) {
  updateBook(id: $id, name: $name, price: $price, author_id: $author_id) {
    id
    name
    price
    author {
      id
      name
    }
  }
}
    `;
export type UpdateInsertedBookMutationFn = Apollo.MutationFunction<UpdateInsertedBookMutation, UpdateInsertedBookMutationVariables>;

/**
 * __useUpdateInsertedBookMutation__
 *
 * To run a mutation, you first call `useUpdateInsertedBookMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateInsertedBookMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateInsertedBookMutation, { data, loading, error }] = useUpdateInsertedBookMutation({
 *   variables: {
 *      id: // value for 'id'
 *      name: // value for 'name'
 *      price: // value for 'price'
 *      author_id: // value for 'author_id'
 *   },
 * });
 */
export function useUpdateInsertedBookMutation(baseOptions?: Apollo.MutationHookOptions<UpdateInsertedBookMutation, UpdateInsertedBookMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateInsertedBookMutation, UpdateInsertedBookMutationVariables>(UpdateInsertedBookDocument, options);
      }
export type UpdateInsertedBookMutationHookResult = ReturnType<typeof useUpdateInsertedBookMutation>;
export type UpdateInsertedBookMutationResult = Apollo.MutationResult<UpdateInsertedBookMutation>;
export type UpdateInsertedBookMutationOptions = Apollo.BaseMutationOptions<UpdateInsertedBookMutation, UpdateInsertedBookMutationVariables>;
export const DeleteBookDocument = gql`
    mutation deleteBook($id: ID!) {
  deleteBook(id: $id)
}
    `;
export type DeleteBookMutationFn = Apollo.MutationFunction<DeleteBookMutation, DeleteBookMutationVariables>;

/**
 * __useDeleteBookMutation__
 *
 * To run a mutation, you first call `useDeleteBookMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteBookMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteBookMutation, { data, loading, error }] = useDeleteBookMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteBookMutation(baseOptions?: Apollo.MutationHookOptions<DeleteBookMutation, DeleteBookMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteBookMutation, DeleteBookMutationVariables>(DeleteBookDocument, options);
      }
export type DeleteBookMutationHookResult = ReturnType<typeof useDeleteBookMutation>;
export type DeleteBookMutationResult = Apollo.MutationResult<DeleteBookMutation>;
export type DeleteBookMutationOptions = Apollo.BaseMutationOptions<DeleteBookMutation, DeleteBookMutationVariables>;