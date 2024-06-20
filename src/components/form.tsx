"use client"

import {FormEvent, useState} from "react";

export const Form = () => {
    const labelBaseStyle = "text-gray-500 transition-transform duration-200 ease-in-out transform group-focus-within:-translate-y-2 group-focus-within:-translate-x-2 group-focus-within:text-primary-black"
    const inputBaseStyle = "border-b-black border-b-[1px] focus:outline-none"
    const formContainerBaseStyle = "flex flex-col gap-[10px] w-full group"
    const formWrapperBaseStyle = "flex gap-[40px]"
    const descriptionbaseStyle = 'font-lexend font-regular text-[16px] tracking-[-1px] text-primary-black'
    const [isSubmitted, setIsSubmitted] = useState(false)

    let checked = "Demande de devis"

    const submitForm = async (e: FormEvent) => {
        e.preventDefault()
        const data = new FormData(e.target as HTMLFormElement)
        const form = Object.fromEntries(data)
        const formData = {
            ...form,
            "text-1": checked
        }
        await fetch(`${process.env.WP_URL}/wp-json/custom/v2/submit-form`, {
            method: "POST",
            body: JSON.stringify(formData)
        })
        setIsSubmitted(true)
    }
    return (
       !isSubmitted ? (
                <form onSubmit={submitForm} className={"w-3/5 flex flex-col gap-[40px]"}>
                    <div className={formWrapperBaseStyle}>
                        <div className={formContainerBaseStyle}>
                            <label
                                className={labelBaseStyle}
                                htmlFor="Nom">Nom</label>
                            <input required className={inputBaseStyle} type="text" id="Nom"
                                   name="name-2" autoComplete={"name"}/>
                        </div>
                        <div className={formContainerBaseStyle}>
                            <label
                                className={labelBaseStyle}
                                htmlFor="Prenom">Prénom</label>
                            <input required className={inputBaseStyle} type="text"
                                   id="Prenom" name="name-1" autoComplete={"given-name"}/>
                        </div>
                    </div>
                    <div className={formWrapperBaseStyle}>
                        <div className={formContainerBaseStyle}>
                            <label
                                className={labelBaseStyle}
                                htmlFor="Telephone">Téléphone</label>
                            <input required className={inputBaseStyle} type="tel" id="Phone"
                                   name="phone-1" autoComplete={"phone"}/>
                        </div>
                        <div className={formContainerBaseStyle}>
                            <label
                                className={labelBaseStyle}
                                htmlFor="Prenom">Email</label>
                            <input required className={inputBaseStyle} type="email"
                                   id="Email" name="email-1" autoComplete={"email"}/>
                        </div>
                    </div>
                    <div className={"flex flex-col gap-[15px]"}>
                        <p className={"text-[20px] font-lexend font-semibold"}>Selectionner votre demande</p>
                        <div className={"flex gap-[25px]"}>
                            <div className={"flex gap-[10px]"}>
                                <input onChange={() => {
                                    checked = "Demande de devis"
                                }} type="radio" defaultChecked={true} name={"text-1"} id={"Demande"}
                                       placeholder={"Demande de devis"}/>
                                <label className={descriptionbaseStyle}>Demande de devis</label>
                            </div>
                            <div className={"flex gap-[10px]"}>
                                <input onChange={() => {
                                    checked = "Candidature"
                                }} type="radio" name={"text-1"} id={"Demande"} placeholder={"Candidature"}/>
                                <label className={descriptionbaseStyle}>Candidature</label>
                            </div>
                            <div onChange={() => {
                                checked = "Question générale"
                            }} className={"flex gap-[10px]"}>
                                <input type="radio" name={"text-1"} id={"Demande"} placeholder={"Question générale"}/>
                                <label className={descriptionbaseStyle}>Question générale</label>
                            </div>
                            <div onChange={() => {
                                checked = "SAV"
                            }} className={"flex gap-[10px]"}>
                                <input type="radio" name={"text-1"} id={"Demande"} placeholder={"SAV"}/>
                                <label className={descriptionbaseStyle}>SAV</label>
                            </div>
                        </div>
                    </div>
                    <textarea required name="textarea-1" id="Message"
                              className={"w-full h-[150px] rounded-[30px] border-2 border-black p-[10px]"}></textarea>
                    <button type={"submit"}
                            className={"bg-primary-green rounded-full font-lexend font-semibold text-white text-[20px] w-fit py-[10px] px-[55px] self-end"}>Envoyer
                    </button>
                </form>
            ) : (
                <div className={"flex flex-col gap-[20px] w-3/5"}>
                    <p className={"font-lexend font-semibold text-[30px] text-primary-black"}>Merci pour votre demande</p>
                    <p className={descriptionbaseStyle}>Nous avons bien reçu votre demande et nous vous répondrons dans les plus brefs délais.</p>
                </div>
            )
    )
}