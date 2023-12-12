import create from 'zustand';

const useAppStore = create((set) => ({
  fileId: null,
  setFileId: (fileId) => set({ fileId }),

  filename: "",
  setFilename: (filename) => set({ filename }),

  isDeleteModalOpen: false,
  setIsDeleteModalOpen: (open) => set({ isDeleteModalOpen: open }),

  isRenameModalOpen: false,
  setIsRenameModalOpen: (open) => set({ isRenameModalOpen: open }),
}));

export { useAppStore };

