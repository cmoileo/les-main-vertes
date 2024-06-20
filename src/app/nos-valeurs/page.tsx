import getAcfPageFields from "../../hook/getAcfPageFields.ts";
import {cn} from "../../ui/utils.ts";

export default async function Page() {
    const pageData: any = await getAcfPageFields("nos-valeurs")

    const titreText1 = pageData.titretext_1;
    const titreText2 = pageData.titretext_2;
    const titreText3 = pageData.titretext_3;
    const titreText4 = pageData.titretext_4;
    const titreText5 = pageData.titretext_5;
    const covers = pageData.photos;

    const titleBaseStyle = 'font-lexend tracking-[-3px] text-[30px] text-primary-black font-semibold text-pretty'
    const descriptionbaseStyle = 'font-lexend font-regular text-[14px] text-primary-black'
    const sectionBaseStyle = 'flex bg-white rounded-[30px] justify-between p-[30px]'



    return (
        <main className={"flex flex-col gap-[10px]"}>
            <section className={cn(sectionBaseStyle, "items-center")}>
                <div className={"flex flex-col gap-[20px] w-[530px]"}>
                    <h2 className={titleBaseStyle}>{titreText1.titre}</h2>
                    <p className={descriptionbaseStyle}>{titreText1.description}</p>
                </div>
                <div className={"w-1/3 h-full flex gap-[10px]"}>
                    <div className={"flex flex-col gap-[10px]"}>
                        <img className={"rounded-[30px] object-cover w-[220px] h-1/2"} src={covers.cover_1.image}
                             alt={covers.cover_1.alt}/>
                        <img className={"rounded-[30px] object-cover w-[220px] h-1/2"} src={covers.cover_2.image}
                             alt={covers.cover_2.alt}/>
                    </div>
                    <img className={"rounded-[30px] object-cover min-h-full w-[220px]"} src={covers.cover_3.image}
                         alt={covers.cover_3.alt}/>
                </div>
            </section>

            <section className={"w-full flex gap-[10px]"}>
                <div className={cn(sectionBaseStyle, "justify-start flex-col gap-[30px] items-center")}>
                    <h2 className={cn(titleBaseStyle, "text-center")}>{titreText2.titre}</h2>
                    <p className={cn(descriptionbaseStyle, "text-center")}>{titreText2.description}</p>
                </div>
                <div className={cn(sectionBaseStyle, "justify-start flex-col gap-[30px] items-center")}>
                    <h2 className={cn(titleBaseStyle, "text-center")}>{titreText3.titre}</h2>
                    <p className={cn(descriptionbaseStyle, "text-center")}>{titreText3.description}</p>
                </div>
                <div className={cn(sectionBaseStyle, "justify-start flex-col gap-[30px] items-center")}>
                    <h2 className={cn(titleBaseStyle, "text-center")}>{titreText4.titre}</h2>
                    <p className={cn(descriptionbaseStyle, "text-center")}>{titreText4.description}</p>
                </div>
            </section>

            <section className={cn(sectionBaseStyle, "flex-col gap-[30px] p-[60px]")}>
                <h2 className={cn(titleBaseStyle, "text-center")}>{titreText5.titre}</h2>
                <p className={cn(descriptionbaseStyle, "text-center w-[60%] m-auto")}>{titreText5.description}</p>
            </section>
        </main>
    );
}