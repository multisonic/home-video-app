import { useQuery } from "react-query";
import { supabase } from "../supabaseClient";

export default function useVideos({ sort = "post", type = "all" }) {
  return useQuery("videos", async () => {
    const { data } = await supabase
      .from("videos")
      .select("*")
      .order("date_post", { ascending: false });
    return data;
  });
}
