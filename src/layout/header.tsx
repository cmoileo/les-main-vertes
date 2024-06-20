import getMenu from "../hook/menus";
import { MenuItem } from "../types/types";
import Image from "next/image";
// @ts-ignore
import Logo from '../../public/Group 6.svg';
export default async function MenuComponent() {
    const menu = await getMenu("top-left-1")

    return (
        <header className={"flex items-center gap-[10px]"}>
            <a href={"/"}>
                <div
                    className={"flex items-center gap-[10px] bg-primary-white rounded-[30px] w-[35%] px-[38px] py-[23px]"}>
                    <Image
                        src={Logo}
                        alt="Logo des mains vertes"
                        width={75}
                        height={62}
                        className={"object-contain min-w-[75px]"}
                    ></Image>
                    <p className={"text-primary-green text-[16px] text-nowrap font-lexend font-semibold"}>EA Les Mains
                        Vertes</p>
                </div>
            </a>
            <nav
                className="menu flex items-center gap-[40px]  bg-primary-white px-[65px] rounded-[30px] w-full py-[40px]">
                {menu.length > 0 && menu.map((item: MenuItem, i: number) => (
                    <ul key={i}>
                        <a href={item.url}>
                            <li className={"font-lexend whitespace-nowrap font-semibold white text-[18px]"}>{item.title}</li>
                        </a>
                        {
                            item.children.length > 0 && (
                                <div className="sub-menu">
                                    {
                                        item.children.map((child: MenuItem, i:number) => (
                                            <a key={i} href={child.url}>
                                                <li className={"font-lexend"}>{child.title}</li>
                                            </a>
                                        ))
                                    }
                                </div>
                            )
                        }
                    </ul>
                ))}
            </nav>
        </header>
    );
}