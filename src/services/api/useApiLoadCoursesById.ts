import ProductApi from "@/api/course.api";
import { useQuery } from "@tanstack/react-query";

interface Props {
  id?: string;
}

const queryFn = async ({ id }: Props) => {
  const response = await ProductApi.get("", {
    params: { id },
  });

  return response?.data;
};

export function useApiLoadCoursesById({ id }: Props) {
  const { data: product, isLoading: isLoadingProduct } = useQuery({
    queryFn: () => queryFn({ id }),
    queryKey: ["product", id],
  });

  return { product, isLoadingProduct };
}
