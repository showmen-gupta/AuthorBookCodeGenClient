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