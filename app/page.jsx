import NavBar from "@components/sections/NavBar";
import Bubbles from "@components/elements/Bubbles";
import Home from "@components/sections/Home";
import About from "@components/sections/About";
import Sponsors from "@components/sections/Sponsors";
import Rules from "@components/sections/Rules";
import Criteria from "@components/sections/Criteria";
import Prizes from "@components/sections/Prizes";
import Schedule from "@components/sections/Schedule";

const App = () => {
  return (
    <div className="full-page-cont">
      {/* <Bubbles /> */}
      <NavBar />
      <Home />
      <About />
      <Rules />
      <Criteria />
      <Schedule />
      <Prizes />
      <Sponsors />
    </div>
  );
};

export default App;
