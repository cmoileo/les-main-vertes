"use client";
import {cn} from "../ui/utils.ts";
import { Swiper, SwiperSlide } from 'swiper/react';
import {useRef} from "react";

export const HomeCarousel = (data: any) => {
    const navigationPrevRef: any = useRef(null)
    const navigationNextRef: any = useRef(null)
    const swiperRef = useRef(null)

    const cellBaseStyle = "rounded-[30px] bg-primary-white"

    const titleBaseStyle = 'font-lexend text-white tracking-[-3px] text-[30px] text-primary-black font-semibold text-pretty'
    return (
        <div className={cn(cellBaseStyle, "w-full px-[30px] h-[230px] flex items-center justify-between overflow-hidden")}>
            <svg onClick={() => {
                if (!swiperRef.current) return
                swiperRef.current.swiper.slidePrev()
            }} ref={navigationPrevRef} className={"swiper-slide-prev cursor-pointer"} width="36" height="36" viewBox="0 0 36 36" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
                <circle cx="18" cy="18" r="18" transform="rotate(180 18 18)" fill="#00813B"/>
                <path d="M21.4531 28L11.9072 18.4541L21.4531 8.90812" stroke="white" stroke-width="3"
                      stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <Swiper
                ref={swiperRef}
                className={"h-fit flex w-[75%] overflow-hidden cursor-pointer"}
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                    "clickable": true,
                }}
                navigation={{
                    nextEl: navigationNextRef.current,
                    prevEl: navigationPrevRef.current
                }}
            >
                {data && data.data.map((item: any, i: number) => (
                    <SwiperSlide key={i}>
                        <p className={cn(titleBaseStyle)}>{item.bullet_point}</p>
                    </SwiperSlide>
                ))}
            </Swiper>
            <svg onClick={() => {
                if (!swiperRef.current) return
                swiperRef.current.swiper.slideNext()
            }} ref={navigationNextRef} className={"swiper-slide-next cursor-pointer"} width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="18" cy="18" r="18" fill="#00813B"/>
                <path d="M14.5459 8L24.0918 17.5459L14.5459 27.0919" stroke="white" stroke-width="3"
                      stroke-linecap="round" stroke-linejoin="round"/>
            </svg>

        </div>
    )
}