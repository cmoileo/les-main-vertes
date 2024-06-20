import axios from "axios";
import { Post } from "../types/types";

export default async function getLatestPosts(count: number): Promise<Post[]> {
    const res = await axios.get(`${process.env.WP_URL}/wp-json/wp/v2/posts?_embed&per_page=${count}&orderby=date`);
    const postData = await res.data;
    return postData
}