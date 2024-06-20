import getAcfPageFields from "../hook/getAcfPageFields";
import {cn} from "../ui/utils.ts";
import {HomeCarousel} from "../components/homeCarousel.tsx";
export default async function Home() {
    const pageData: any = await getAcfPageFields("accueil")
    console.log(pageData)

    const columnBaseStyle = "flex flex-col gap-[10px] w-1/3"
    const cellBaseStyle = "rounded-[30px] bg-primary-white"

    const titleBaseStyle = 'font-lexend text-white tracking-[-3px] text-[30px] text-primary-black font-semibold text-pretty'
    const descriptionbaseStyle = 'font-lexend text-white font-regular text-[16px] tracking-[-1px] text-primary-black'

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

            </section>
            <section className={columnBaseStyle}>
            </section>
            <section className={columnBaseStyle}>

            </section>
        </main>
    );
}
