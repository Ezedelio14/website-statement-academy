import ProductApi from "@/api/course.api";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

interface Props {
  id?: string;
  name?: string;
  page?: number;
  limit?: number;
  categoryId?: string;
}

type Rating = {
  averageRating: number;
  totalReviews: number;
};

type Author = {
  name: string;
  avatar: string;
  id: string;
};

type Course = {
  categoryId: string;
  title: string;
  description: string;
  banner: string;
  trailer: string;
  price: number;
  currency: string;
  duration: number;
  level: "beginner" | "intermediate" | "advanced";
  numberLessons: number;
  numberModules: number;
  files: any[]; // Pode ser ajustado conforme a estrutura dos arquivos
  createdAt: string;
  updatedAt: string;
  ratings: Rating;
  author: Author[];
  id: string;
};

const queryFn = async ({ ...data }: Props) => {
  const response = await ProductApi.get<{ data: { items: Course[] } }>(
    "/pe/training/courses",
    {
      params: { ...data },
    }
  );

  return response?.data;
};

export function useApiLoadCourses({ ...params }: Props) {
  const {
    data: courses,
    isLoading,
    isFetching,
    refetch,
  } = useQuery({
    queryFn: () => queryFn({ ...params }),
    queryKey: ["product", ...Object.values(params)],
  });

  useEffect(() => {
    refetch();
  }, [params?.categoryId]);

  return { courses, isLoadingCourses: isLoading || isFetching };
}
