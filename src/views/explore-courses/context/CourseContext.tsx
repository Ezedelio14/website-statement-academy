import { createContext, ReactNode, useContext, useState } from "react";

interface CourseContextProps {
  filters: string[];
  handleTagClick: (index: string) => void;
}

export const CourseContext = createContext<CourseContextProps>({
  filters: [],
  handleTagClick: () => {},
});

export const useCourseContext = () => {
  return useContext(CourseContext);
};

export function CourseProvider({ children }: { children: ReactNode }) {
  const [filters, setFilter] = useState<string[]>([]);

  const handleTagClick = (index: string) => {
    setFilter((prevState) =>
      prevState.includes(index)
        ? prevState?.length === 1
          ? prevState
          : prevState.filter((item) => item !== index)
        : [...prevState, index]
    );
  };

  return (
    <CourseContext.Provider value={{ filters, handleTagClick }}>
      {children}
    </CourseContext.Provider>
  );
}
