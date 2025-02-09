"use client";
import { createContext, useContext, ReactNode, useState } from "react";

type SearchContextType = {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
};

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export const useSearchContext = () => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error(
      "useSearchContext must be used within a SearchContextProvider"
    );
  }
  return context;
};

export function SearchContextProvider({ children }: { children: ReactNode }) {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <SearchContext.Provider value={{ searchQuery, setSearchQuery }}>
      {children}
    </SearchContext.Provider>
  );
}
