"use server";

import {cn} from "../ui/utils.ts";

export const PageLink = async (data: any) => {
    const titleBaseStyle = 'font-lexend text-white tracking-[-3px] text-[26px] font-semibold text-pretty'

    return (
        <a className={cn(data.page.couleur_de_fond, "flex h-full transition cursor-pointer group relative flex-col p-[20px] justify-between rounded-[30px]")} href={data.page.page_cible.replace("https://leo-fezard.com", "https://les-main-vertes.vercel.app")}>
            <h3 className={cn(titleBaseStyle, "absolute top-[20px] left-[20px]")}>{data.page.titre_de_la_navigation}</h3>
            <svg className={"transition absolute bottom-[20px] left-[20px] group-hover:rotate-[45deg]"} width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="18" cy="18" r="18" fill="white"/>
                <path
                    d="M9.93934 23.4393C9.35355 24.0251 9.35355 24.9749 9.93934 25.5607C10.5251 26.1464 11.4749 26.1464 12.0607 25.5607L9.93934 23.4393ZM26 11C26 10.1716 25.3284 9.5 24.5 9.5H11C10.1716 9.5 9.5 10.1716 9.5 11C9.5 11.8284 10.1716 12.5 11 12.5H23V24.5C23 25.3284 23.6716 26 24.5 26C25.3284 26 26 25.3284 26 24.5V11ZM12.0607 25.5607L25.5607 12.0607L23.4393 9.93934L9.93934 23.4393L12.0607 25.5607Z"
                    fill="#4C3F34"/>
            </svg>
        </a>
    )
}