import getAcfPageFields from "../hook/getAcfPageFields";
import {cn} from "../ui/utils.ts";
import Link from "next/link";
export default async function Home() {
  const pageData: any = await getAcfPageFields("accueil")

  return (
      <main className={"flex flex-col gap-[10px]"}>
          <section className={"flex gap-[10px] h-[342px]"}>
              <div className={"w-[50%]"}>
                  <div
                      className={"bg-primary-white flex flex-col gap-[20px] px-[55px] py-[60px] h-full rounded-[30px]"}>
                      <h1 className={"font-lexend text-[36px] font-semibold leading-[42px]"}>{pageData.titre}</h1>
                      <p className={"text-[16px] font-lexend"}>{pageData.description_1}</p>
                  </div>
              </div>
              <div className={"w-[25%] h-full"}>
                  <article
                      className={cn(pageData.lien_vers_la_page_1.couleur_de_fond_de_la_card[0], "rounded-[30px] flex items-center px-[30px] h-full")}>
                      <h3 className={"font-lexend text-[30px] custom-stroke stroke-primary-black text-primary-white stroke-1"}>{pageData.lien_vers_la_page_1.titre_de_la_card}</h3>
                      <Link href={pageData.lien_vers_la_page_1.lien_de_la_page}>
                          <div
                              className={"w-[50px] flex items-center justify-center h-[50px] bg-primary-black rounded-full"}>
                              <svg width="32" height="24" viewBox="0 0 32 24" fill="none"
                                   xmlns="http://www.w3.org/2000/svg">
                                  <path
                                      d="M2.25 10.5C1.42157 10.5 0.75 11.1716 0.75 12C0.75 12.8284 1.42157 13.5 2.25 13.5V10.5ZM30.8107 13.0607C31.3964 12.4749 31.3964 11.5251 30.8107 10.9393L21.2647 1.3934C20.6789 0.807611 19.7292 0.807611 19.1434 1.3934C18.5576 1.97919 18.5576 2.92893 19.1434 3.51472L27.6287 12L19.1434 20.4853C18.5576 21.0711 18.5576 22.0208 19.1434 22.6066C19.7292 23.1924 20.6789 23.1924 21.2647 22.6066L30.8107 13.0607ZM2.25 13.5H29.75V10.5H2.25V13.5Z"
                                      fill="white"/>
                              </svg>
                          </div>
                      </Link>
                  </article>
              </div>
              <img className={"w-[25%] object-cover rounded-[30px]"} src={pageData.image_de_fond_1.image}
                   alt={pageData.image_de_fond_1.alt}></img>
          </section>

          <section className={"h-[342px] flex gap-[10px]"}>
              <img className={"h-full object-cover rounded-[30px] w-[25%]"} src={pageData.image_de_fond_2.image}
                   alt={pageData.image_de_fond_2.alt}/>
              <div className={"min-h-full w-[25%]"}>
                  <article
                      className={cn(pageData.lien_vers_la_page_2.couleur_de_fond_de_la_card[0], "rounded-[30px] flex items-center px-[30px] h-full")}>
                      <h3 className={"font-lexend text-[30px] custom-stroke stroke-primary-black text-primary-white stroke-1"}>{pageData.lien_vers_la_page_1.titre_de_la_card}</h3>
                      <Link href={pageData.lien_vers_la_page_2.lien_de_la_page}>
                          <div
                              className={"w-[50px] flex items-center justify-center h-[50px] bg-primary-black rounded-full"}>
                              <svg width="32" height="24" viewBox="0 0 32 24" fill="none"
                                   xmlns="http://www.w3.org/2000/svg">
                                  <path
                                      d="M2.25 10.5C1.42157 10.5 0.75 11.1716 0.75 12C0.75 12.8284 1.42157 13.5 2.25 13.5V10.5ZM30.8107 13.0607C31.3964 12.4749 31.3964 11.5251 30.8107 10.9393L21.2647 1.3934C20.6789 0.807611 19.7292 0.807611 19.1434 1.3934C18.5576 1.97919 18.5576 2.92893 19.1434 3.51472L27.6287 12L19.1434 20.4853C18.5576 21.0711 18.5576 22.0208 19.1434 22.6066C19.7292 23.1924 20.6789 23.1924 21.2647 22.6066L30.8107 13.0607ZM2.25 13.5H29.75V10.5H2.25V13.5Z"
                                      fill="white"/>
                              </svg>
                          </div>
                      </Link>
                  </article>
              </div>
              <img className={"h-full object-cover rounded-[30px] w-[25%]"} src={pageData.image_de_fond_3.image}
                   alt={pageData.image_de_fond_3.alt}/>
              <div className={"min-h-full w-[25%]"}>
                  <article
                      className={cn(pageData.lien_vers_la_page_3.couleur_de_fond_de_la_card[0], "rounded-[30px] flex items-center px-[30px] h-full")}>
                      <h3 className={"font-lexend text-[30px] custom-stroke stroke-primary-black text-primary-white stroke-1"}>{pageData.lien_vers_la_page_1.titre_de_la_card}</h3>
                      <Link href={pageData.lien_vers_la_page_3.lien_de_la_page}>
                          <div
                              className={"w-[50px] flex items-center justify-center h-[50px] bg-primary-black rounded-full"}>
                              <svg width="32" height="24" viewBox="0 0 32 24" fill="none"
                                   xmlns="http://www.w3.org/2000/svg">
                                  <path
                                      d="M2.25 10.5C1.42157 10.5 0.75 11.1716 0.75 12C0.75 12.8284 1.42157 13.5 2.25 13.5V10.5ZM30.8107 13.0607C31.3964 12.4749 31.3964 11.5251 30.8107 10.9393L21.2647 1.3934C20.6789 0.807611 19.7292 0.807611 19.1434 1.3934C18.5576 1.97919 18.5576 2.92893 19.1434 3.51472L27.6287 12L19.1434 20.4853C18.5576 21.0711 18.5576 22.0208 19.1434 22.6066C19.7292 23.1924 20.6789 23.1924 21.2647 22.6066L30.8107 13.0607ZM2.25 13.5H29.75V10.5H2.25V13.5Z"
                                      fill="white"/>
                              </svg>
                          </div>
                      </Link>
                  </article>
              </div>
          </section>

          <section className={"flex items-center gap-[10px] h-[342px]"}>
              <div className={"w-[25%] h-full"}>
                  <article
                      className={cn(pageData.lien_vers_la_page_3.couleur_de_fond_de_la_card[0], "rounded-[30px] flex items-center px-[30px] min-h-full")}>
                      <h3 className={"font-lexend text-[30px] custom-stroke stroke-primary-black text-primary-white stroke-1"}>{pageData.lien_vers_la_page_4.titre_de_la_card}</h3>
                      <Link href={pageData.lien_vers_la_page_4.lien_de_la_page}>
                          <div
                              className={"w-[50px] flex items-center justify-center h-[50px] bg-primary-black rounded-full"}>
                              <svg width="32" height="24" viewBox="0 0 32 24" fill="none"
                                   xmlns="http://www.w3.org/2000/svg">
                                  <path
                                      d="M2.25 10.5C1.42157 10.5 0.75 11.1716 0.75 12C0.75 12.8284 1.42157 13.5 2.25 13.5V10.5ZM30.8107 13.0607C31.3964 12.4749 31.3964 11.5251 30.8107 10.9393L21.2647 1.3934C20.6789 0.807611 19.7292 0.807611 19.1434 1.3934C18.5576 1.97919 18.5576 2.92893 19.1434 3.51472L27.6287 12L19.1434 20.4853C18.5576 21.0711 18.5576 22.0208 19.1434 22.6066C19.7292 23.1924 20.6789 23.1924 21.2647 22.6066L30.8107 13.0607ZM2.25 13.5H29.75V10.5H2.25V13.5Z"
                                      fill="white"/>
                              </svg>
                          </div>
                      </Link>
                  </article>
              </div>
              <img className={"h-full w-[25%] object-cover rounded-[30px] h-full"}
                   src={pageData.image_de_fond_4.image}
                   alt={pageData.image_de_fond_4.alt}/>

              <div className={"w-50% h-full bg-primary-white rounded-[30px]"}>
                  <p className={"font-lexend py-[70px] px-[60px] text-[26px] w-[90%]"}>{pageData.description_2}</p>
              </div>
          </section>
      </main>
  );
}
