import create from 'zustand';

export const useStore = create((set: any) => ({
  history: '/',
  setHistory: (path: string) => set({ history: path }),
}));
