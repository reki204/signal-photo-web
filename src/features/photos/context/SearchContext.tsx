'use client';

import { createContext, ReactNode, useContext, useState } from 'react';

import { DecryptedImage } from '../types/DecryptedImage';

type SearchContextType = {
  searchResults: DecryptedImage[];
  setSearchResults: (results: DecryptedImage[]) => void;
  hasSearched: boolean;
  setHasSearched: (value: boolean) => void;
  isLoading: boolean;
  setIsLoading: (value: boolean) => void;
  error: string | null;
  setError: (error: string | null) => void;
};

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export function SearchProvider({ children }: { children: ReactNode }) {
  const [searchResults, setSearchResults] = useState<DecryptedImage[]>([]);
  const [hasSearched, setHasSearched] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  return (
    <SearchContext.Provider
      value={{
        searchResults,
        setSearchResults,
        hasSearched,
        setHasSearched,
        isLoading,
        setIsLoading,
        error,
        setError,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}

export function useSearch() {
  const context = useContext(SearchContext);
  if (context === undefined) {
    throw new Error('useSearch must be used within a SearchProvider');
  }
  return context;
}
