import getAcfPageFields from "../../hook/getAcfPageFields.ts";
import {Form} from "../../components/form.tsx"
export default async function Page() {
    const pageData: any = await getAcfPageFields("contact")
    const phone = pageData.numeros_de_telephone;
    const email = pageData.email;
    const address = pageData.adresse;

    const titleBaseStyle = 'font-lexend text-white tracking-[-3px] text-[30px] text-primary-black font-semibold text-pretty'
    const descriptionbaseStyle = 'font-lexend text-white font-regular text-[16px] tracking-[-1px] text-primary-black'


    return (
        <main className={"flex items-center gap-[50px]"}>
            <aside className={"p-[35px] h-[600px] bg-primary-green rounded-[30px] w-1/3 flex flex-col gap-[100px] h-full"}>
                <div className={"flex flex-col gap-[13px]"}>
                    <h2 className={titleBaseStyle}>Contact</h2>
                    <p className={descriptionbaseStyle}>Vous avez une question ?</p>
                </div>
                <div className={"flex flex-col gap-[45px]"}>
                    <a href={`tel:${phone}`}>
                        <div className="flex gap-[20px] items-center">
                            <svg width="19" height="19" viewBox="0 0 19 19" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M10.8562 5.25488C12.9592 5.25488 13.8562 6.15188 13.8562 8.25488H15.8562C15.8562 5.02988 14.0812 3.25488 10.8562 3.25488V5.25488ZM14.2782 10.6979C14.0861 10.5232 13.8336 10.4301 13.574 10.4381C13.3145 10.4461 13.0682 10.5547 12.8872 10.7409L10.4942 13.2019C9.91824 13.0919 8.76024 12.7309 7.56824 11.5419C6.37624 10.3489 6.01524 9.18788 5.90824 8.61588L8.36724 6.22188C8.55365 6.04101 8.66237 5.7947 8.6704 5.53508C8.67843 5.27547 8.58512 5.02292 8.41024 4.83088L4.71524 0.767878C4.54028 0.575234 4.29712 0.458382 4.03739 0.442137C3.77767 0.425893 3.52184 0.511536 3.32424 0.680878L1.15424 2.54188C0.98135 2.71539 0.878159 2.94633 0.864239 3.19088C0.849239 3.44088 0.563239 9.36288 5.15524 13.9569C9.16124 17.9619 14.1792 18.2549 15.5612 18.2549C15.7632 18.2549 15.8872 18.2489 15.9202 18.2469C16.1648 18.2332 16.3956 18.1295 16.5682 17.9559L18.4282 15.7849C18.5977 15.5874 18.6835 15.3317 18.6675 15.0719C18.6514 14.8122 18.5347 14.569 18.3422 14.3939L14.2782 10.6979Z"
                                    fill="white"/>
                            </svg>
                            <p className={"text-white"}>{phone}</p>
                        </div>
                    </a>
                    <a href={`mailto:${email}`}>
                        <div className="flex gap-[20px] items-center">
                            <svg width="21" height="17" viewBox="0 0 21 17" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M20.8562 0.254883H0.856201V16.2549H20.8562V0.254883ZM18.8562 4.25488L10.8562 9.25488L2.8562 4.25488V2.25488L10.8562 7.25488L18.8562 2.25488V4.25488Z"
                                    fill="white"/>
                            </svg>
                            <p className={"text-white"}>{email}</p>
                        </div>
                    </a>
                    <div className="flex gap-[20px] items-center">
                        <svg width="18" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M8.85621 0.754883C6.66897 0.757463 4.57204 1.62749 3.02543 3.1741C1.47881 4.72072 0.60879 6.81764 0.60621 9.00488C0.60359 10.7923 1.18745 12.5312 2.26821 13.9549C2.26821 13.9549 2.49321 14.2511 2.52996 14.2939L8.85621 21.7549L15.1855 14.2901C15.2185 14.2504 15.4442 13.9549 15.4442 13.9549L15.445 13.9526C16.5252 12.5296 17.1088 10.7915 17.1062 9.00488C17.1036 6.81764 16.2336 4.72072 14.687 3.1741C13.1404 1.62749 11.0435 0.757463 8.85621 0.754883ZM8.85621 12.0049C8.26287 12.0049 7.68285 11.8289 7.1895 11.4993C6.69615 11.1696 6.31163 10.7011 6.08457 10.1529C5.85751 9.60476 5.7981 9.00155 5.91385 8.41961C6.02961 7.83767 6.31533 7.30312 6.73489 6.88356C7.15445 6.464 7.689 6.17828 8.27094 6.06253C8.85288 5.94677 9.45608 6.00618 10.0043 6.23324C10.5524 6.46031 11.021 6.84482 11.3506 7.33817C11.6803 7.83152 11.8562 8.41154 11.8562 9.00488C11.8552 9.80023 11.5388 10.5627 10.9764 11.1251C10.414 11.6875 9.65156 12.0039 8.85621 12.0049Z"
                                fill="white"/>
                        </svg>
                        <p className={"text-white"}>{address}</p>
                    </div>
                </div>
            </aside>
            <Form/>
        </main>
    )
}