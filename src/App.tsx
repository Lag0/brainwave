import ButtonGradient from "./assets/svg/ButtonGradient.tsx";
import Header from "./components/Header.tsx";
import Hero from "./components/Hero.tsx";

export function App() {
  return (
    <>
      <div className="overflow-hidden pt-[4.75rem] lg:pt-[5.25rem]">
        <Header />
        <Hero />
      </div>
      <ButtonGradient />
    </>
  );
}
