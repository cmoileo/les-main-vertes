import {AccessibilyBarViewModel} from "../components/AccessibilityBar/accessibily-bar.view-model";
import getAcfPageFields from "../hook/getAcfPageFields";

export default async function Home() {
    const pageData: any = await getAcfPageFields("accueil")
    console.log(pageData.slides)
  return (
    <main>
        <AccessibilyBarViewModel />
    </main>
  );
}
