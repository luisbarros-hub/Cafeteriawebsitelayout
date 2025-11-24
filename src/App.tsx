import { MollyHeader } from "./components/MollyHeader";
import { MollyHero } from "./components/MollyHero";
import { MollyMenu } from "./components/MollyMenu";
import { MollyAbout } from "./components/MollyAbout";
import { MollyFooter } from "./components/MollyFooter";

export default function App() {
  return (
    <div className="min-h-screen bg-[#F7EFE6]">
      <MollyHeader />
      <main>
        <MollyHero />
        <MollyMenu />
        <MollyAbout />
      </main>
      <MollyFooter />
    </div>
  );
}
