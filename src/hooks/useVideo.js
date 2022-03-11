import { useQuery } from "react-query";
import { supabase } from "../supabaseClient";

export default function useVideo(slug) {
  const getVideoBySlug = async (slug) => {
    const { data } = await supabase
      .from("videos")
      .select("*")
      .eq("slug", slug)
      .single();

    return data;
  };

  return useQuery(["slug", slug], () => getVideoBySlug(slug), {
    enabled: !!slug,
  });
}
