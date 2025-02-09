import { gql } from "@apollo/client";

export const API_GET_PRODUCT = gql`
  query loadProduct($input: LoadProductInput!) {
    loadProduct(input: $input) {
      id
      cid
      name
      default_price {
        id
        cid
        value
        currency
      }
      type {
        id
        name
      }
      description
    }
  }
`;
