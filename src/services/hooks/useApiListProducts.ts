import { useQuery } from "@apollo/client";
import { ProductTypes } from "../types/apollo.types";
import { API_LIST_PRODUCTS } from "../utils/API_LIST_PRODUCTS";

type Response = {
  listProducts: {
    totalElements: number;
    products: ProductTypes[];
  };
};

type Params = {
  input: {
    page: number;
    limit: number;
    type?: string;
    name?: string;
    currency?: string;
  };
};

export const useApiListProducts = (payload: Params["input"]) => {
  const { data, loading, error, refetch } = useQuery<Response, Params>(
    API_LIST_PRODUCTS,
    {
      variables: { input: { ...payload, type: "courses" } },
    }
  );

  return {
    error,
    refetch,
    isLoading: loading,
    data: data?.listProducts || { products: [], totalElements: 0 },
  };
};
