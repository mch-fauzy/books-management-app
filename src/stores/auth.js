import { create } from 'zustand';

const useAuth = create((set) => ({
  isLogged: false,
  setIsLogged: (isLogged) => set({ isLogged }),
}));

export default useAuth;
