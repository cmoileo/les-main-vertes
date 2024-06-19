import axios from "axios";

export const getMediaById = async (prop: number): Promise<string> => {
    const res = await axios.get(`${process.env.WP_URL}/wp-json/wp/v2/media/${prop}`);
    const mediaData = await res.data;
    console.log( "mediaData", mediaData)
    const media = mediaData.source_url;
    return media;
}