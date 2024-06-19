import axios from "axios";
import { Post } from "../types/types";
import {getAuthorName} from "./getAuthorName.ts";
import {getMediaById} from "./getMediaById.ts";

export default async function getLatestPosts(count: number): Promise<Post[]> {
    const res = await axios.get(`${process.env.WP_URL}/wp-json/wp/v2/posts?_embed&per_page=${count}&orderby=date`);
    const postData = res.data;

    const latestPosts: Post[] = postData.map(async(post: any) => {
        const title = post.title.rendered;
        const content = post.content.rendered;
        const date = post.date;
        const categories = post.categories;
        const slug = post.slug;
        const tags = post.tags
        const acfFields = post.acf
        const author = await getAuthorName(post.author);
        const thumbnail = await getMediaById(post.featured_media);

        return {
            title,
            content,
            date,
            categories,
            slug,
            tags,
            acfFields,
            author,
            thumbnail
        } as Post;
    });

    return latestPosts;
}