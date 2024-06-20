import getAcfPageFields from "../../hook/getAcfPageFields.ts";

export default async function Page() {
    const pageData: any = await getAcfPageFields("nos-valeurs")
    console.log(pageData);
    const titreText1 = pageData.titretext_1;
    const titreText2 = pageData.titretext_2;
    const titreText3 = pageData.titretext_3;
    const titreText4 = pageData.titretext_4;
    const titreText5 = pageData.titretext_5;
    const titreText6 = pageData.titretext_6;
    const covers = pageData.photos;

    const titleBaseStyle = 'font-lexend text-[30px] text-primary-black font-semibold text-pretty'
    const descriptionbaseStyle = 'font-lexend font-regular text-[14px] text-primary-black'


    return (
        <main className={"px-[40px]"}>
            <section className={"flex h-[450px]"}>
                <div className={"flex flex-col gap-[20px] justify-center w-1/3 pr-[70px]"}>
                    <h2 className={titleBaseStyle}>{titreText1.titre}</h2>
                    <p className={descriptionbaseStyle}>{titreText1.description}</p>
                </div>
                <div className={"w-1/3 h-full flex gap-[10px]"}>
                    <div className={"flex flex-col gap-[10px]"}>
                        <img className={"rounded-[30px] object-cover w-[220px] h-1/2"} src={covers.cover_1.image} alt={covers.cover_1.alt}/>
                        <img className={"rounded-[30px] object-cover w-[220px] h-1/2"} src={covers.cover_2.image} alt={covers.cover_2.alt}/>
                    </div>
                    <img className={"rounded-[30px] object-cover h-full w-[220px]"} src={covers.cover_3.image} alt={covers.cover_3.alt}/>
                </div>
                <div className={"w-1/3 flex flex-col justify-evenly pl-[40px]"}>
                    <div className={"flex flex-col gap-[20px]"}>
                        <h2 className={titleBaseStyle}>{titreText2.titre}</h2>
                        <p className={descriptionbaseStyle}>{titreText2.description}</p>
                    </div>
                    <div className={"flex flex-col gap-[20px]"}>
                        <h2 className={titleBaseStyle}>{titreText3.titre}</h2>
                        <p className={descriptionbaseStyle}>{titreText3.description}</p>
                    </div>
                </div>
            </section>
            <section className={"flex justify-between items-center gap-[50px] h-[350px]"}>
                <div className={"flex flex-col gap-[20px]"}>
                    <h2 className={titleBaseStyle}>{titreText4.titre}</h2>
                    <p className={descriptionbaseStyle}>{titreText4.description}</p>
                </div>
                <div className={"flex flex-col gap-[20px]"}>
                    <h2 className={titleBaseStyle}>{titreText5.titre}</h2>
                    <p className={descriptionbaseStyle}>{titreText5.description}</p>
                </div>
                <div className={"flex flex-col gap-[20px]"}>
                    <h2 className={titleBaseStyle}>{titreText6.titre}</h2>
                    <p className={descriptionbaseStyle}>{titreText6.description}</p>
                </div>
            </section>
        </main>
    );
}