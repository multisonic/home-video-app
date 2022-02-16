import { useQuery } from "react-query";
import { supabase } from "../supabaseClient";

export default function useVideo(videoId) {
  console.log("videoId", videoId);
  const getVideoById = async (id) => {
    const { data } = await supabase
      .from("videos")
      .select("*")
      .eq("id", id)
      .single();

    return data;
  };

  return useQuery(["video", videoId], () => getVideoById(videoId), {
    enabled: !!videoId,
  });
}
