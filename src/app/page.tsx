import getAcfPageFields from "../hook/getAcfPageFields";
import {PageLink} from "../components/pageLink.tsx";
import {HomeCarousel} from "../components/homeCarousel.tsx";
export default async function Home() {
    const pageData: any = await getAcfPageFields("accueil")
    console.log(pageData)

    const titleBaseStyle = 'font-lexend text-black tracking-[-3px] text-[26px] text-primary-black font-semibold text-pretty'
    const descriptionbaseStyle = 'font-lexend text-black font-regular text-[16px] tracking-[-1px] text-primary-black'

    return (
        <main className={"flex gap-[10px]"}>
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
            <section></section>
        </main>
    );
}
