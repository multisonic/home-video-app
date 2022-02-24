import { useQuery } from "react-query";
import { supabase } from "../supabaseClient";

export default function useVideo(slug) {
  console.log("slug", slug);
  const getVideoById = async (slug) => {
    const { data } = await supabase
      .from("videos")
      .select("*")
      .eq("slug", slug)
      .single();

    return data;
  };

  return useQuery(["slug", slug], () => getVideoById(slug), {
    enabled: !!slug,
  });
}
