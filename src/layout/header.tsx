import getMenu from "../hook/menus";
import { MenuItem } from "../types/types";
import Image from "next/image";
// @ts-ignore
import Logo from '../../public/Group 6.svg';

export default async function MenuComponent() {
    const menu = await getMenu("top-left-1")

    return (
        <header>
            <Image
                src={Logo}
                alt="Logo des mains vertes"
                width={105}
                height={85}
                className={"object-contain"}
            ></Image>
            <nav className="menu">
                {menu.length > 0 && menu.map((item: MenuItem, i: number) => (
                    <ul key={i}>
                        <a href={item.url}>
                            <li className={"font-lexend white"}>{item.title}</li>
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