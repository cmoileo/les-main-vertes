import axios from "axios";
import { Post } from "../types/types";
import {getAuthorName} from "./getAuthorName.ts";
import {getMediaById} from "./getMediaById.ts";

export default async function getPostData(prop: string) {
    const res = await axios.get(`${process.env.WP_URL}/wp-json/wp/v2/posts?slug=${prop}`);
    const postData = res.data[0];
    const title = postData.title.rendered;
    const content = postData.content.rendered;
    const date = postData.date;
    const categories = postData.categories;
    const slug = postData.slug
    const acfFields = postData.acf
    const author = await getAuthorName(postData.author);
    const thumbnail = await getMediaById(postData.featured_media);

    const post: Post = {
        title, content, date, categories, slug, acfFields, author, thumbnail
    }

    return post as Post;
}