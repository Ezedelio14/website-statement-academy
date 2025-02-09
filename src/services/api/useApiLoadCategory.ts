import courseApi from "@/api/course.api";
import { useQuery } from "@tanstack/react-query";

const queryFn = async () => {
  const response = await courseApi.get("/pe/categories");

  return response?.data;
};

export function useApiLoadCategories() {
  const { data: categories, isLoading: isLoadingCategories } = useQuery({
    queryFn,
    queryKey: ["categories"],
  });

  return { categories, isLoadingCategories };
}
