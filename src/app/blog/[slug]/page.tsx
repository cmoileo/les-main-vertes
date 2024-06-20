import { Post } from "../../../types/types.ts";
import getPostData from "../../../hook/getPost.ts";

export async function generateMetadata({ params }: { params: { slug: string }}) {
    const postData: Post = await getPostData(params.slug);
    const title = postData.title;
    return {
        title: title,
    }
}

export default async function page({ params }: { params: { slug: string }}) {
    const postData: Post = await getPostData(params.slug);

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
        <article className={"flex flex-col gap-[10px]"}>
            <div className={"flex gap-[10px]"}>
                <div
                    className={"bg-primary-purple w-[70%] flex flex-col gap-[30px] rounded-[30px] pt-[80px] pb-[65px] pl-[40px]"}>
                    <h1 className={"font-lexend text-white tracking-[-3px] font-semibold text-[44px]"}>{title}</h1>
                    <p className={"font-lexend text-white tracking-[-1px] font-regular text-[16px]"}>{formatDate(postData.date)} par {postData.author}</p>
                </div>
                <img src={postData.thumbnail || ""} alt={postData.title} className={"w-[30%] object-cover h-[300px] rounded-[30px]"}/>
            </div>
            <div className={"flex gap-[15px]"}>
                <aside
                    className={"h-full w-[320px] gap-[15px] flex flex-col py-[50px] px-[20px] rounded-[30px] bg-white sticky top-[20px]"}>
                    {
                        acfData && acfData.map((acfField: any, i: number) => (
                            <div key={i}>
                                <a href={`#${slugify(acfField["sous-titre"])}`}>{acfField["sous-titre"]}</a>
                            </div>
                        ))
                    }
                </aside>
                <section className={"flex flex-col gap-[40px] rounded-[30px] bg-white px-[60px] py-[40px]"}>
                    {
                        acfData && acfData.map((acfField: any, i: number) => (
                            <div key={i} id={slugify(acfField["sous-titre"])}>
                                <div className={"content flex flex-col gap-[20px]"} dangerouslySetInnerHTML={{ __html: acfField.contenu }}></div>
                            </div>
                        ))
                    }
                </section>
            </div>
        </article>
    );
}
