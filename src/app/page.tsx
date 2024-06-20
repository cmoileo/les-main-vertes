import getAcfPageFields from "../hook/getAcfPageFields";
import {PageLink} from "../components/pageLink.tsx";
import {HomeCarousel} from "../components/homeCarousel.tsx";
import { cn } from "../ui/utils.ts";
import getLatestPosts from "../hook/getLatestsPost.ts";
export default async function Home() {
    const pageData: any = await getAcfPageFields("accueil")
    const lastPosts: any = await getLatestPosts(2)

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

    const titleBaseStyle = 'font-lexend text-black tracking-[-3px] text-[26px] text-primary-black font-semibold text-pretty'
    const descriptionbaseStyle = 'font-lexend text-black font-regular text-[16px] tracking-[-1px] text-primary-black'

    return (
        <main className={"flex flex-col gap-[10px]"}>
            <section className={"w-full flex gap-[10px]"}>
                <div className={"w-1/3 flex flex-col gap-[10px]"}>
                    <div className={"w-full flex flex-col gap-[20px] bg-white rounded-[30px] p-[30px]"}>
                        <h1 className={titleBaseStyle}>{pageData.titretexte.titre}</h1>
                        <p className={descriptionbaseStyle}>{pageData.titretexte.texte}</p>
                    </div>
                    <div className={"flex gap-[10px] h-[220px]"}>
                        <div className={"w-1/2 h-full"}>
                            <PageLink page={pageData.lien_vers_page_1}/>
                        </div>
                        <div className={"w-1/2"}>
                            <PageLink page={pageData.lien_vers_page_2}/>
                        </div>
                    </div>
                </div>
                <div className={"w-1/3 flex flex-col gap-[10px]"}>
                    <img className={"w-full h-[230px] object-cover rounded-[30px]"} src={pageData.image_1.image}
                         alt={pageData.image_1.alt}/>
                    <div className={"flex gap-[10px] h-[220px]"}>
                        <div className={"w-1/2 h-full"}>
                            <PageLink page={pageData.lien_vers_page_3}/>
                        </div>
                        <div className={"w-1/2"}>
                            <PageLink page={pageData.lien_vers_page_4}/>
                        </div>
                    </div>
                </div>
                <div className={"w-1/3 flex gap-[10px]"}>
                    <div className={"flex w-1/2 flex-col gap-[10px]"}>
                        <img className={"w-full h-[230px] object-cover rounded-[30px]"} src={pageData.image_2.image} alt={pageData.image_2.image} />
                        <HomeCarousel data={pageData.bullet_points}/>
                    </div>
                    <img className={"w-1/2 h-full object-cover rounded-[30px]"} src={pageData.image_3.image} alt={pageData.image_3.alt}/>
                </div>
            </section>

            <section className={"w-full flex gap-[10px]"}>
                <div className={"flex w-1/3 flex-col gap-[10px]"}>
                    <img className={"w-full h-[230px] object-cover rounded-[30px]"} src={pageData.image_4.image}
                         alt={pageData.image_4.image}/>
                    <div className={"flex flex-col gap-[10px] p-[30px] bg-primary-white rounded-[30px]"}>
                        <div className={"flex"}>
                            <svg width="32" height="33" viewBox="0 0 32 33" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M15.9998 25.3531C14.2398 21.4268 11.0728 18.2598 7.14648 16.4998C11.0728 14.7398 14.2398 11.5728 15.9998 7.64648C17.7598 11.5728 20.9268 14.7398 24.8531 16.4998C20.9268 18.2598 17.7598 21.4268 15.9998 25.3531Z"
                                    fill="white"/>
                                <path
                                    d="M16 10.8264C17.4679 13.0943 19.4057 15.0321 21.6737 16.5C19.4057 17.9679 17.4679 19.9057 16 22.1737C14.5321 19.9057 12.5943 17.9679 10.3264 16.5C12.5943 15.0321 14.5321 13.0943 16 10.8264ZM16 0.5C16 9.33556 8.83556 16.5 0 16.5C8.83556 16.5 16 23.6644 16 32.5C16 23.6644 23.1644 16.5 32 16.5C23.1644 16.5 16 9.33556 16 0.5Z"
                                    fill="#00813B"/>
                            </svg>
                            <svg width="32" height="33" viewBox="0 0 32 33" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M15.9998 25.3531C14.2398 21.4268 11.0728 18.2598 7.14648 16.4998C11.0728 14.7398 14.2398 11.5728 15.9998 7.64648C17.7598 11.5728 20.9268 14.7398 24.8531 16.4998C20.9268 18.2598 17.7598 21.4268 15.9998 25.3531Z"
                                    fill="white"/>
                                <path
                                    d="M16 10.8264C17.4679 13.0943 19.4057 15.0321 21.6737 16.5C19.4057 17.9679 17.4679 19.9057 16 22.1737C14.5321 19.9057 12.5943 17.9679 10.3264 16.5C12.5943 15.0321 14.5321 13.0943 16 10.8264ZM16 0.5C16 9.33556 8.83556 16.5 0 16.5C8.83556 16.5 16 23.6644 16 32.5C16 23.6644 23.1644 16.5 32 16.5C23.1644 16.5 16 9.33556 16 0.5Z"
                                    fill="#00813B"/>
                            </svg>

                            <svg width="32" height="33" viewBox="0 0 32 33" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M15.9998 25.3531C14.2398 21.4268 11.0728 18.2598 7.14648 16.4998C11.0728 14.7398 14.2398 11.5728 15.9998 7.64648C17.7598 11.5728 20.9268 14.7398 24.8531 16.4998C20.9268 18.2598 17.7598 21.4268 15.9998 25.3531Z"
                                    fill="white"/>
                                <path
                                    d="M16 10.8264C17.4679 13.0943 19.4057 15.0321 21.6737 16.5C19.4057 17.9679 17.4679 19.9057 16 22.1737C14.5321 19.9057 12.5943 17.9679 10.3264 16.5C12.5943 15.0321 14.5321 13.0943 16 10.8264ZM16 0.5C16 9.33556 8.83556 16.5 0 16.5C8.83556 16.5 16 23.6644 16 32.5C16 23.6644 23.1644 16.5 32 16.5C23.1644 16.5 16 9.33556 16 0.5Z"
                                    fill="#00813B"/>
                            </svg>

                            <svg width="32" height="33" viewBox="0 0 32 33" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M15.9998 25.3531C14.2398 21.4268 11.0728 18.2598 7.14648 16.4998C11.0728 14.7398 14.2398 11.5728 15.9998 7.64648C17.7598 11.5728 20.9268 14.7398 24.8531 16.4998C20.9268 18.2598 17.7598 21.4268 15.9998 25.3531Z"
                                    fill="white"/>
                                <path
                                    d="M16 10.8264C17.4679 13.0943 19.4057 15.0321 21.6737 16.5C19.4057 17.9679 17.4679 19.9057 16 22.1737C14.5321 19.9057 12.5943 17.9679 10.3264 16.5C12.5943 15.0321 14.5321 13.0943 16 10.8264ZM16 0.5C16 9.33556 8.83556 16.5 0 16.5C8.83556 16.5 16 23.6644 16 32.5C16 23.6644 23.1644 16.5 32 16.5C23.1644 16.5 16 9.33556 16 0.5Z"
                                    fill="#00813B"/>
                            </svg>

                            <svg width="32" height="33" viewBox="0 0 32 33" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M15.9998 25.3531C14.2398 21.4268 11.0728 18.2598 7.14648 16.4998C11.0728 14.7398 14.2398 11.5728 15.9998 7.64648C17.7598 11.5728 20.9268 14.7398 24.8531 16.4998C20.9268 18.2598 17.7598 21.4268 15.9998 25.3531Z"
                                    fill="white"/>
                                <path
                                    d="M16 10.8264C17.4679 13.0943 19.4057 15.0321 21.6737 16.5C19.4057 17.9679 17.4679 19.9057 16 22.1737C14.5321 19.9057 12.5943 17.9679 10.3264 16.5C12.5943 15.0321 14.5321 13.0943 16 10.8264ZM16 0.5C16 9.33556 8.83556 16.5 0 16.5C8.83556 16.5 16 23.6644 16 32.5C16 23.6644 23.1644 16.5 32 16.5C23.1644 16.5 16 9.33556 16 0.5Z"
                                    fill="#00813B"/>
                            </svg>
                        </div>
                        <h4 className={titleBaseStyle}>{pageData.avis.titre}</h4>
                        <p className={descriptionbaseStyle}>{pageData.avis.description}</p>
                        <p className={cn(descriptionbaseStyle, "text-primary-green underline font-semibold")}>{pageData.avis.auteur_date}</p>
                    </div>
                </div>
                <div className={"w-1/3 h-[610px]"}>
                    <video poster={pageData.video.cover} className={"object-cover rounded-[30px] min-h-full"}>
                        <source src={pageData.video.video}></source>
                    </video>
                </div>
                <div className={"w-1/3 flex flex-col gap-[10px]"}>
                    <img className={"w-full h-[300px] object-cover rounded-[30px]"} src={pageData.image_5.image} alt={pageData.image_5.alt}/>
                    <div className={"flex gap-[10px] h-1/2 w-full"}>
                        {lastPosts.map((post: any, i: number) => {
                            const bgColor = i === 0 ? "bg-primary-green" : "bg-primary-brown"
                            console.log(bgColor)
                            return (
                                <a className={cn(bgColor, "flex w-full h-full transition cursor-pointer group relative flex-col p-[20px] justify-between rounded-[30px]")}
                                   href={post.slug}>
                                    <p className={cn(descriptionbaseStyle, "font-semibold text-white text-[12px]")}>Article - {formatDate(post.date)}</p>
                                    <h3 className={cn(titleBaseStyle, "text-white absolute top-[50px] left-[20px]")}>{post.title.rendered}</h3>
                                    <svg
                                        className={"transition absolute bottom-[20px] left-[20px] group-hover:translate-x-[-100%] group-hover:left-[calc(100%-20px)]"}
                                        width="36" height="36" viewBox="0 0 36 36" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="18" cy="18" r="18" fill="white"/>
                                        <path
                                            d="M9.93934 23.4393C9.35355 24.0251 9.35355 24.9749 9.93934 25.5607C10.5251 26.1464 11.4749 26.1464 12.0607 25.5607L9.93934 23.4393ZM26 11C26 10.1716 25.3284 9.5 24.5 9.5H11C10.1716 9.5 9.5 10.1716 9.5 11C9.5 11.8284 10.1716 12.5 11 12.5H23V24.5C23 25.3284 23.6716 26 24.5 26C25.3284 26 26 25.3284 26 24.5V11ZM12.0607 25.5607L25.5607 12.0607L23.4393 9.93934L9.93934 23.4393L12.0607 25.5607Z"
                                            fill="#4C3F34"/>
                                    </svg>
                                </a>
                            )
                        })}
                    </div>
                </div>
            </section>
        </main>
    );
}
