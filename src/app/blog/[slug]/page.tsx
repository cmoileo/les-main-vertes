import {Post} from "../../../types/types.ts";
import getPostData from "../../../hook/getPost.ts";
import getLatestPosts from "../../../hook/getLatestsPost.ts";

export default async function page({ params }: { params: { slug: string }}) {
    const postData: Post = await getPostData(params.slug);
    const lastPosts: Post[] = await getLatestPosts(3);

    const title = postData.title;
    const acfFields: any = postData.acfFields;
    const acfData: any = acfFields.contenu;

    const formatDate = (dateString: string): string => {
        const date = new Date(dateString);

        const monthNames = [
            "janvier", "février", "mars", "avril", "mai", "juin",
            "juillet", "août", "septembre", "octobre", "novembre", "décembre"
        ];

        const day = date.getDate();
        const month = monthNames[date.getMonth()];
        const year = date.getFullYear();
        return `${day} ${month} ${year}`;
    }

    const slugify = (str: string): string => {
        return str
            .toLowerCase()
            .trim()
            .replace(/[^\w\s-]/g, '')
            .replace(/[\s_-]+/g, '-')
            .replace(/^-+|-+$/g, '');
    }

    return (
        <article>
            <div>
                <div>
                    <h1>{title}</h1>
                    <p>{postData.author}, {formatDate(postData.date)}</p>
                </div>
            </div>
            <div>
                <aside>
                    {
                        acfData && acfData.map((acfField: any, i: number) => (
                            <div key={i}>
                                <a href={`#${slugify(acfField["sous-titre"])}`}>{acfField["sous-titre"]}</a>
                            </div>
                        ))
                    }
                </aside>
                <section>
                    {
                        acfData && acfData.map((acfField: any, i: number) => (
                            <div key={i} id={slugify(acfField["sous-titre"])}>
                                <div dangerouslySetInnerHTML={{__html: acfField.contenu}}></div>
                            </div>
                        ))
                    }
                </section>
            </div>
        </article>
    );
}