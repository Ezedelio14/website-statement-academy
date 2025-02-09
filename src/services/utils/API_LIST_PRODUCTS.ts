import { gql } from "@apollo/client";

export const API_LIST_PRODUCTS = gql`
  query ListProducts($input: ListProductInput!) {
    listProducts(input: $input) {
      products {
        id
        cid
        name
        description
        type {
          id
          name
        }
        default_price {
          id
          cid
          value
          currency
        }
        prices {
          id
          cid
          value
          currency
        }
        image_url
        is_active
      }
      totalElements
    }
  }
`;
