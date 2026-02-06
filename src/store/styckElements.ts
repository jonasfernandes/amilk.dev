import { createRef } from 'react';
import { create } from 'zustand';

interface StickyElementsStore {
  stickyElementsRef: React.RefObject<HTMLElement | null>[];
  setStickyElementsRef: (element: HTMLElement | null) => void;
}

export const useStickyElementsStore = create<StickyElementsStore>((set) => ({
  stickyElementsRef: [],
  setStickyElementsRef: (element: HTMLElement | null) => {
    if (!element) {
      return;
    }
    const newRef = createRef<HTMLElement | null>();
    newRef.current = element;
    set((state) => ({ stickyElementsRef: [...state.stickyElementsRef, newRef] }));
  },
}));
