import { create } from 'zustand'

interface State {
  isOpen: boolean,
  openMenu: ()=> void,
  closeMenu: ()=> void
}

export const useUIStore = create<State>()((set) => ({
  isOpen: false,
  openMenu: () => set({  isOpen: true }),
  closeMenu: () => set({ isOpen: false }),
}))
