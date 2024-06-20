import getAcfPageFields from "../hook/getAcfPageFields";
import {cn} from "../ui/utils.ts";
import {HomeCarousel} from "../components/homeCarousel.tsx";
import {PageLink} from "../components/pageLink.tsx";
export default async function Home() {
    const pageData: any = await getAcfPageFields("accueil")
    console.log(pageData)

    const columnBaseStyle = "flex flex-col gap-[10px] w-1/3"
    const cellBaseStyle = "rounded-[30px] bg-primary-white"

    const titleBaseStyle = 'font-lexend text-black tracking-[-3px] text-[26px] text-primary-black font-semibold text-pretty'
    const descriptionbaseStyle = 'font-lexend text-black font-regular text-[16px] tracking-[-1px] text-primary-black'

    return (
        <main className={"flex gap-[10px]"}>
            <section className={columnBaseStyle}>
                <div className={cn(cellBaseStyle, "w-full pl-[30px] pr-[60px] py-[25px] flex flex-col gap-[20px] h-[300px] align-center")}>
                    <h1 className={cn(titleBaseStyle)}>
                        {pageData.titretexte.titre}
                    </h1>
                    <p className={cn(descriptionbaseStyle)}>
                        {pageData.titretexte.texte}
                    </p>
                </div>
                <HomeCarousel data={pageData.bullet_points}/>
                <div className={"grid grid-cols-2 gap-[10px]"}>
                    <img className={"rounded-[30px]"} src={pageData.image_1.image} alt={pageData.image_1.alt}/>
                    <div className={cn(cellBaseStyle, "flex items-center justify-center p-[10px]")}>
                        <a href="/blog/">
                            <p className={titleBaseStyle}>Nos derniers articles</p>
                        </a>
                    </div>
                    <a className={cn(cellBaseStyle, "flex cursor-pointer group relative h-[250px] flex-col gap-[20px] bg-primary-green p-[20px]")}>
                        <p className={cn(descriptionbaseStyle, "text-white")}>Article - 19/06/2024</p>
                        <h3 className={cn(titleBaseStyle, "text-white")}>Comment devenir bénévole ?</h3>
                        <svg className={"transition absolute bottom-[20px] left-[20px] group-hover:translate-x-[-100%] group-hover:left-[calc(100%-20px)]"} width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="18" cy="18" r="18" fill="white"/>
                            <path
                                d="M9.93934 23.4393C9.35355 24.0251 9.35355 24.9749 9.93934 25.5607C10.5251 26.1464 11.4749 26.1464 12.0607 25.5607L9.93934 23.4393ZM26 11C26 10.1716 25.3284 9.5 24.5 9.5H11C10.1716 9.5 9.5 10.1716 9.5 11C9.5 11.8284 10.1716 12.5 11 12.5H23V24.5C23 25.3284 23.6716 26 24.5 26C25.3284 26 26 25.3284 26 24.5V11ZM12.0607 25.5607L25.5607 12.0607L23.4393 9.93934L9.93934 23.4393L12.0607 25.5607Z"
                                fill="#00813B"/>
                        </svg>
                    </a>
                    <PageLink data={pageData.lien_vers_page_1}/>
                </div>
            </section>

            <section className={columnBaseStyle}>
                <img className={"rounded-[30px] object-cover h-[300px]"} src={pageData.image_2.image} alt={pageData.image_2.alt}/>
                <div className={"flex gap-[10px] w-full h-[250px]"}>
                    <div className={"w-1/2 h-full"}>
                        <PageLink data={pageData.lien_vers_page_2}/>
                    </div>
                    <div className={"w-1/2 h-full"}>
                        <PageLink data={pageData.lien_vers_page_3}/>
                    </div>
                </div>
            </section>

            <section className={columnBaseStyle}>
            </section>
        </main>
    );
}
