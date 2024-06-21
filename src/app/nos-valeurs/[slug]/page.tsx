import getAcfPageFields from "../../../hook/getAcfPageFields.ts";
import {PageLink2} from "../../../components/pageLink2.tsx";

export default async function page({ params }: { params: { slug: string }}) {
    const pageData = await getAcfPageFields(params.slug);

    return (
        <main>
            <h1 className={"text-[26px] text-black font-semibold my-[30px] m-auto text-center font-lexend"}>{pageData.nom_du_service}</h1>
            <article className={"p-[50px] bg-white rounded-[30px] flex items-center gap-[50px]"}>
                <div className={"flex flex-col"}>
                    <p className={"text-[22px] font-semibold text-black font-lexend"}>{pageData.titre_1}</p>
                    <div className={"content mt-[20px]"} dangerouslySetInnerHTML={{__html: pageData.description_1}}></div>
                    <a className={"mt-[30px] bg-primary-green text-center rounded-full text-[16px] py-[12px] px-[24px] w-fit text-white font-lexend"} href={pageData.bouton.lien}>{pageData.bouton.texte_du_bouton.replace("https://leo-fezard.com", "https://les-main-vertes.vercel.app")}</a>
                </div>
                <div className={"flex gap-[10px]"}>
                    <div className={"flex flex-col gap-[10px]"}>
                        <img className={"rounded-[30px] object-cover"} src={pageData.images.image_1.image} alt={pageData.images.image_1.alt}/>
                        <img className={"rounded-[30px] object-cover"} src={pageData.images.image_2.image} alt={pageData.images.image_2.alt}/>
                    </div>
                    <img className={"rounded-[30px] object-cover"} src={pageData.images.image_3.image} alt={pageData.images.image_3.alt}/>
                </div>
            </article>

            <article className={"p-[50px] mt-[30px] bg-white rounded-[30px] gap-[120px] flex items-center gap-[50px]"}>
                <div className={"flex flex-col"}>
                    <p className={"text-[22px] font-semibold text-black font-lexend"}>{pageData.titre_2}</p>
                    <div className={"content mt-[20px]"}
                         dangerouslySetInnerHTML={{__html: pageData.description_2}}></div>
                </div>
                <div className={"grid grid-rows-2 grid-cols-2 h-[460px] min-w-[460px] gap-[10px]"}>
                    {
                        pageData.liens_vers_pages && pageData.liens_vers_pages.map((item: any, i: number) => {
                            let gridColumn = ""
                            if (pageData.liens_vers_pages.length === 3 && i == 2) {
                                gridColumn = "col-span-2"
                            } else if (pageData.liens_vers_pages.length === 2) {
                                gridColumn = "col-span-2"
                            } else if (pageData.liens_vers_pages.length === 4) {
                                gridColumn = "col-span-1"
                            }
                            return (
                                <PageLink2 data={item.lien_vers_page} gridColumn={gridColumn} />
                            )
                        })
                    }
                </div>
            </article>
        </main>
    );
}