import { create } from 'zustand';

export const useUIStore = create((set) => ({
  isSideMenuOpen: false,
  isModalOpen: false,
  isSubcategoryOpen: {},
  openSideMenu: () => set({ isSideMenuOpen: true }),
  closeSideMenu: () => set({ isSideMenuOpen: false, isSubcategoryOpen: {} }),
  toggleModal: () => set((prevState) => ({
    ...prevState,
    isSideMenuOpen: false,
    isModalOpen: !prevState.isModalOpen,
  })),
  toggleSubcategory: (slug) => set((prevState) => ({
    ...prevState,
    isSubcategoryOpen: {
      ...prevState.isSubcategoryOpen,
      [slug]: !prevState.isSubcategoryOpen[slug] || false,
    },
  })),
}));
