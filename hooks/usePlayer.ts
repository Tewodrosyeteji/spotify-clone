import { create } from "zustand";

type PlayerStore = {
  ids: string[];
  activeId?: string;
  setId: (id: string) => void;
  setIds: (ids: string[]) => void;
  reset: () => void;
};

const usePlayer = create<PlayerStore>((set) => ({
  ids: [],
  acitveId: undefined,
  setId: (id: string) => set({ activeId: id }),
  setIds: (ids: string[]) => set({ ids: ids }),
  reset: () => set({ activeId: undefined, ids: [] }),
}));

export default usePlayer;
