// @ts-ignore
import Logo from "../../public/Group 6.svg";
import Image from "next/image";

export default async function Footer() {
    return (
        <footer>
            <nav className="flex justify-between px-[50px] py-[60px] bg-white rounded-[30px]">
                <div className={"flex flex-col items-center"}>
                    <Image
                        width={60}
                        height={50}
                        src={Logo}
                        alt={"Logo de l'entreprise les mains vertes"}/>
                    <p className={"font-lexend tracking-[-1px] text-primary-green font-semibold"}>Les Mains Vertes</p>
                </div>
                <div>
                    <p className={"font-lexend tracking-[-1px]font-semibold text-black text-[20px]"}>Adresse</p>
                    <p className={"font-lexend tracking-[-1px] font-regular text-black text-[14px]"}>45 rue Marcel
                        Dassault</p>
                    <p className={"font-lexend tracking-[-1px] font-regular text-black text-[14px]"}>81990 Cambon</p>
                </div>
                <div>
                    <p className={"font-lexend tracking-[-1px]font-semibold text-black text-[20px]"}>Retrouvez-nous</p>
                    <div className={"flex gap-[10px]"}>
                        <p className={"font-lexend tracking-[-1px] font-regular text-primary-green underline text-[14px]"}>Haut-Garonne</p>
                        <p className={"font-lexend tracking-[-1px] font-regular text-primary-green underline text-[14px]"}>Tarn</p>
                    </div>
                    <div className={"flex gap-[10px]"}>
                        <p className={"font-lexend tracking-[-1px] font-regular text-primary-green underline text-[14px]"}>Toulouse</p>
                        <p className={"font-lexend tracking-[-1px] font-regular text-primary-green underline text-[14px]"}>Albi</p>
                    </div>
                    <div className={"flex gap-[10px]"}>
                        <p className={"font-lexend tracking-[-1px] font-regular text-primary-green underline text-[14px]"}>Gers</p>
                        <p className={"font-lexend tracking-[-1px] font-regular text-primary-green underline text-[14px]"}>Auch</p>
                    </div>
                </div>
                <div>
                    <p className={"font-lexend tracking-[-1px]font-semibold text-black text-[20px]"}>Contactez-nous</p>
                    <p className={"font-lexend tracking-[-1px] font-regular text-black text-[14px]"}>05 63 45 26 64</p>
                    <p className={"font-lexend tracking-[-1px] font-regular text-black text-[14px]"}>contact@lesmains-vertes.fr</p>
                    <p className={"font-lexend tracking-[-1px] font-regular text-primary-green text-[14px]"}>Linkedin</p>
                </div>
                <div>
                    <p className={"font-lexend tracking-[-1px]font-semibold text-black text-[20px]"}>Informations</p>
                    <p className={"font-lexend tracking-[-1px] font-regular text-primary-green underline text-[14px]"}>Mentions légales</p>
                    <p className={"font-lexend tracking-[-1px] font-regular text-primary-green underline text-[14px]"}>Politique
                        de confidentialité</p>

                </div>
            </nav>
        </footer>
    )
}