let videos = [
  {
    id: "4bf88144-b49e-427d-9151-19eaf203d077",
    title: "Clifflix: Illuminations Reflections of Earth 2021",
    primary: "https://vimeo.com/566374660",
    backup: "https://www.youtube.com/watch?v=_wL7Y_9iLyI",
    startTime: 223,
    slug: "clifflix-roe-2021",
  },
  {
    id: "a4102a1c-fba5-452f-b696-3381c7668970",
    title: "Clifflix: Happily Ever After in 8k",
    primary: "https://youtu.be/Qzvg9KuvRiw",
    startTime: 109,
    slug: "clifflix-hea-2022",
  },
  {
    id: "0022b17e-1ce0-4ea4-ba48-de48fc7ff507",
    title: "Clifflix: World of Color 2020",
    primary: "https://vimeo.com/417445463",
    backup: "https://youtu.be/g4GmKYrzM0w",
    startTime: 123,
    slug: "clifflix-woc-2020",
  },
  {
    id: "0308979a-0c6c-49c8-a588-165b9c8f3f86",
    title: "Reflections of Earth with Peace on Earth Finale 2016",
    primary: "https://youtu.be/AGYne2pBWTY",
    startTime: 784,
    slug: "roe-christmas-2016",
  },
];

export function getVideos() {
  return videos;
}

export function getVideoById(id) {
  return videos.find((video) => video.id === id);
}
export function getVideoBySlug(slug) {
  return videos.find((video) => video.slug === slug);
}

// export default videoData;
