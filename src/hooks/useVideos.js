import { useQuery } from "react-query";
import { supabase } from "../supabaseClient";

export default function useVideos() {
  return useQuery("videos", async () => {
    const { data } = await supabase.from("videos").select("*");
    return data;
  });
}
