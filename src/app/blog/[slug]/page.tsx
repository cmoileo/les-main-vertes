import {Post} from "../../../types/types.ts";
import getPostData from "../../../hook/getPost.ts";

export default async function page({ params }: { params: { slug: string }}) {
    const postData: Post = await getPostData(params.slug);

    const title = postData.title;
    const acfFields: any = postData.acfFields;
    const acfData: any = acfFields.contenu;

    const slugify = (str: string): string => {
        return str
            .toLowerCase()
            .trim()
            .replace(/[^\w\s-]/g, '')
            .replace(/[\s_-]+/g, '-')
            .replace(/^-+|-+$/g, '');
    }

    console.log(acfData);

    return (
        <article>
            <h1>{title}</h1>
            <aside>
                {
                    acfData && acfData.map((acfField: any, i: number) => (
                        <div key={i}>
                            <a href={`/${params.slug}#${slugify(acfField["sous-titre"])}`}>{acfField["sous-titre"]}</a>
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
        </article>
    );
}