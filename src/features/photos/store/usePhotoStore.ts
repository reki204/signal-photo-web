import { create } from 'zustand';

import { DecryptedImage } from '../types/DecryptedImage';

type PhotoStore = {
  searchResults: DecryptedImage[];
  hasSearched: boolean;
  error: string | null;
  isLoading: boolean;
  setSearchResults: (results: DecryptedImage[]) => void;
  setHasSearched: (value: boolean) => void;
  setError: (error: string | null) => void;
  setLoading: (isLoading: boolean) => void;
  reset: () => void;
};

export const usePhotoStore = create<PhotoStore>((set) => ({
  searchResults: [],
  hasSearched: false,
  error: null,
  isLoading: false,
  setSearchResults: (results) => set({ searchResults: results }),
  setHasSearched: (value) => set({ hasSearched: value }),
  setError: (error) => set({ error }),
  setLoading: (isLoading) => set({ isLoading }),
  reset: () => set({ searchResults: [], hasSearched: false, error: null, isLoading: false }),
}));
