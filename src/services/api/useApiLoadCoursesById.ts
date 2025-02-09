import ProductApi from "@/api/course.api";
import { useQuery } from "@tanstack/react-query";

interface Props {
  id?: string;
}

const queryFn = async ({ id }: Props) => {
  const response = await ProductApi.get(`/pe/training/courses/${id}`);

  return response?.data;
};

export function useApiLoadCoursesById({ id }: Props) {
  const { data: course, isLoading: isLoadingCourse } = useQuery({
    queryFn: () => queryFn({ id }),
    queryKey: ["course", id],
  });

  return { course, isLoadingCourse };
}
