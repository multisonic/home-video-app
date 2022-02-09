import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export const fetchVideos = async () => {
  let { data: videos, error } = await supabase.from("videos").select("*");

  if (error) console.log("error", error);
  else return videos;
};

export const fetchVideosByType = async (type) => {
  let { data: videos, error } = await supabase
    .from("videos")
    .select("*")
    .eq("type", type);

  if (error) console.log("error", error);
  else return videos;
};

export const fetchVideoBySlug = async (slug) => {
  let { data: video, error } = await supabase
    .from("videos")
    .select("*")
    .eq("slug", slug)
    .single();

  if (error) console.log("error", error);
  else return video;
};
