import axios from "axios";

export const getAuthorName = async (prop: number) => {
    const res = await axios.get(`${process.env.WP_URL}/wp-json/wp/v2/users/${prop}`);
    const authorData = res.data;
    const authorName = authorData.name;
    return authorName;
}