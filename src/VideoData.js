let videos = [
  {
    id: "4bf88144-b49e-427d-9151-19eaf203d077",
    title: "Clifflix: Illuminations Reflections of Earth 2021",
    primary: "https://vimeo.com/566374660",
    backup: "https://www.youtube.com/watch?v=_wL7Y_9iLyI",
    startTime: 223,
    slug: "clifflix-roe-2021",
    description:
      'This is my latest 2021 version of "Reflections of Earth". This is a 4k Multicam edit with a multichannel studio soundtrack and is a HUGE upgrade to my previous three older versions. \n\n YouTube compression is brutal on these shadows! (even in 4k)  So, you can download your own high-quality copy of this video now down below.As always, if you like what you see, give it a "thumbs up" and subscribe to the channel. This video was made for all RoE fans around the world so make sure to tell all your friends about it and spread the word. Here is a link for a high-quality video file for your collection. In many ways, this is a much higher quality video than what YouTube can show online.',
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
    description:
      "This is my \"World Of Color\" 2020 4k multi-cam edit. This is (almost) the original version of the show. It was filmed in 2019 during D23 Expo. It's not perfect but I think it's pretty good considering the footage I was able to bring home.  Let me know what you think! \n\n YouTube compression is brutally SAVAGE and really clamps down on shadows and night sky! I have created a nice, high quality video file for anybody to download and watch from their computer. In many ways, it's better than YouTube's heavily compressed 4k stream.",
  },
  {
    id: "0308979a-0c6c-49c8-a588-165b9c8f3f86",
    title: "Reflections of Earth with Peace on Earth Finale 2016",
    primary: "https://youtu.be/AGYne2pBWTY",
    startTime: 784,
    slug: "roe-christmas-2016",
  },
  {
    id: "b97bcd59-836f-4542-8291-aa59887a9cf1",
    title: "Eddie Films: Fantasmic 2020",
    primary: "https://youtu.be/gkU6vL4oAFE",
    startTime: 0,
    slug: "eddie-fantasmic-2020",
    description: "",
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
