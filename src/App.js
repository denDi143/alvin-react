import "./App.css";
import travel_01 from "./assets/travel-01.jpg";
import travel_02 from "./assets/travel-02.jpg";
import travel_03 from "./assets/travel-03.jpg";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";

function App() {
  const navbarLinks = [
    { url: "hero.js", title: "Home" },
    { url: "https://www.youtube.com/watch?v=A4kLcDWBYcQ", title: "Watch Here" },
    { url: "https://www.facebook.com/alvindale.arciaga/", title: "facebook" },
  ];

  return (
    <div className="App">
      <Navbar navbarLinks={navbarLinks} />
      <Hero imageSrc={travel_01} />
      <Slider
        imageSrc={travel_02}
        title={"002"}
        subtitle={
          "She was designed as the most prominent character and icon of the series. Zero Two is an artificially-created life form who aspires to become fully human, and an elite pilot with an infamous reputation as the Partner Killer. She is well known for addressing Hiro, the protagonist, by the eponymous term darling.!"
        }
      />
      <Slider
        imageSrc={travel_03}
        title={"Darling in the Franxx"}
        subtitle={"is a 2018 Japanese science fiction romance anime television series co-produced by A-1 Pictures and Trigger and animated by Trigger and CloverWorks that premiered in January 2018. The series was announced at Trigger's Anime Expo 2017 panel in July 2017. A manga adaptation by Kentaro Yabuki and another four-panel comic strip manga began serialization in January 2018"}
        flipped={true}
      />
    </div>
  );
}

export default App;
