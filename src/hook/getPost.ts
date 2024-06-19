import axios from "axios";
import { Post } from "../types/types";
import {getAuthorName} from "./getAuthorName.ts";

export default async function getPostData(prop: string) {
    const res = await axios.get(`${process.env.WP_URL}/wp-json/wp/v2/posts?slug=${prop}`);
    const postData = res.data[0];
    console.log(postData)
    const title = postData.title.rendered;
    const content = postData.content.rendered;
    const date = postData.date;
    const categories = postData.categories;
    const slug = postData.slug
    const acfFields = postData.acf
    const author = await getAuthorName(postData.author);

    const post: Post = {
        title, content, date, categories, slug, acfFields, author
    }

    return post as Post;
}