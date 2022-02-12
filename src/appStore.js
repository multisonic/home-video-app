import create from "zustand";

export const useVideoStore = create((set) => ({
  videos: [],
  setVideos: (data) =>
    set((state) => ({
      videos: data,
    })),
}));
