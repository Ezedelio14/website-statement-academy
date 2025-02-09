import ProductApi from "@/api/course.api";
import { useQuery } from "@tanstack/react-query";

interface Props {
  id?: string;
  name?: string;
  page?: number;
  limit?: number;
  category?: string;
}

const queryFn = async ({ ...data }: Props) => {
  const response = await ProductApi.get("/pe/training/courses", {
    params: { ...data },
  });

  return response?.data;
};

export function useApiLoadCourses({ ...params }: Props) {
  const { data: courses, isLoading: isLoadingCourses } = useQuery({
    queryFn: () => queryFn({ ...params }),
    queryKey: ["product", ...Object.values(params)],
  });

  return { courses, isLoadingCourses };
}
