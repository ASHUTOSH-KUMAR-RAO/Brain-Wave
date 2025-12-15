import ButtonGradient from "./assets/svg/ButtonGradient";
import Benefits from "./components/benifits";
import Header from "./components/header";
import Hero from "./components/hero";
const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero/>
        <Benefits/>
      </div>
      <ButtonGradient />
    </>
  );
};

export default App;
