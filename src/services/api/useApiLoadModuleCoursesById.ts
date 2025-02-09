import ProductApi from "@/api/course.api";
import { useQuery } from "@tanstack/react-query";

interface Props {
  id?: string;
}

type Lesson = {
  title: string;
  description: string;
  duration: number;
  image: string | null;
  createdAt: string;
  updatedAt: string;
  id: string;
  watched: string[];
};

type Course = {
  authorId: string[];
  title: string;
  description: string;
  id: string;
};

type CourseModule = {
  title: string;
  description: string;
  duration: number;
  numberLessons: number;
  createdAt: string;
  updatedAt: string;
  course: Course;
  id: string;
  lessons: Lesson[];
};

const queryFn = async ({ id }: Props) => {
  console.log(id);
  const response = await ProductApi.get<{ data: { items: CourseModule[] } }>(
    `/pe/courses/${id}/modules`
  );

  return response?.data;
};

export function useApiLoadModuleCoursesById({ id }: Props) {
  const { data: modules, isLoading: isLoadingModules } = useQuery({
    queryFn: () => queryFn({ id }),
    queryKey: ["course", "modules", id],
  });

  return { modules, isLoadingModules };
}
