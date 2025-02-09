import { useQuery } from "@apollo/client";
import { ProductTypes } from "../types/apollo.types";
import { API_GET_PRODUCT } from "../utils/API_GET_PRODUCT";

type Params = {
  input: {
    id: string;
  };
};

export const useApiGetProduct = (payload: Params["input"]) => {
  const { data, loading, error, refetch } = useQuery<
    {
      loadProduct: ProductTypes;
    },
    Params
  >(API_GET_PRODUCT, {
    variables: { input: payload },
  });

  return {
    error,
    refetch,
    isLoading: loading,
    data: data?.loadProduct,
  };
};
