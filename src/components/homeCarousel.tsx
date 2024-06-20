"use client";
import {cn} from "../ui/utils.ts";
import { Swiper, SwiperSlide } from 'swiper/react';
import {useRef} from "react";
import {Pagination} from "swiper/modules";

const icons = [
    {
        icon: (
            `<svg
                width="86"
                height="87"
                viewBox="0 0 86 87"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <rect x="0.5" y="1.125" width="75" height="75" stroke="#1A1918" />
                <rect x="10.5" y="11.125" width="75" height="75" stroke="#1A1918" />
            </svg>`
        ),
    },
    {
        icon: (
            `<svg
                width="91"
                height="84"
                viewBox="0 0 91 84"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <rect x="0.5" y="1.125" width="75" height="75" stroke="#1A1918" />
                <path
                    d="M7.36379 83.25L48.5 12L89.6362 83.25H7.36379Z"
                    stroke="#1A1918"
                />
            </svg>`
        ),
    },
    {
        icon: (
            `<svg
                width="88"
                height="91"
                viewBox="0 0 88 91"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <rect x="0.5" y="1.125" width="75" height="75" stroke="#1A1918" />
                <rect
                    x="8.5"
                    y="11.5"
                    width="79"
                    height="79"
                    rx="39.5"
                    stroke="#1A1918"
                />
            </svg>`
        ),
    },
];

export const HomeCarousel = (data: any) => {
    const swiperRef = useRef(null)

    const cellBaseStyle = "rounded-[30px] bg-primary-white"

    const titleBaseStyle = 'font-lexend text-white tracking-[-3px] text-[30px] text-primary-black font-semibold text-pretty'
    return (
        <div className={cn(cellBaseStyle, "max-w-full px-[30px] h-[230px] flex items-center justify-between overflow-hidden")}>
            <Swiper
                ref={swiperRef}
                modules={[Pagination]}
                className={"h-fit flex w-[95%] overflow-hidden cursor-pointer"}
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                    "clickable": true,
                    renderBullet: function (index: number, className: string) {
                        return `<span class=${className}>${icons[index].icon}</span>`
                    },
                }}
            >
                {data && data.data.map((item: any, i: number) => (
                    <SwiperSlide key={i}>
                        <p className={cn(titleBaseStyle, "text-center")}>{item.bullet_point}</p>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}