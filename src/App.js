import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Started from "./components/pages/Individuals/Started";
import Rewa from "./components/pages/Individuals/Rewa";
import Chain from "./components/pages/Individuals/Chain";
import Staking from "./components/pages/Individuals/Staking";
import Sustainability from "./components/pages/Individuals/Sustainability";

import BuildersHub from "./components/pages/Developers/Builders";
import Dapp from "./components/pages/Developers/Dapp";
import Tutorials from "./components/pages/Developers/Tutorials";
import Tools from "./components/pages/Developers/Tools";
import Releases from "./components/pages/Developers/Releases";
import Roadmap from "./components/pages/Developers/Roadmap";

import Resources from "./components/pages/Farmer/Resources";
import Programs from "./components/pages/Farmer/Programs";
import Training from "./components/pages/Farmer/Training";
import Community from "./components/pages/Farmer/Community";

import Sustainabilitys from "./components/pages/Motherearth/Sustainabilitys";
import Initiatives from "./components/pages/Motherearth/Initiatives";
import Impact from "./components/pages/Motherearth/Impact";
import Project from "./components/pages/Motherearth/Project";

import Xwallet from "./components/pages/products/Xwallet";
import Xexchange from "./components/pages/products/Xexchange";
import Xbridge from "./components/pages/products/Xbridge";
import Xexplorer from "./components/pages/products/Xexplorer";

import Discover from "./components/pages/Ecosystem/Discover";
import Grants from "./components/pages/Ecosystem/Grants";
import Projects from "./components/pages/Ecosystem/Projects";
import Partners from "./components/pages/Ecosystem/Partners";
import Validators from "./components/pages/Ecosystem/Validators";
import Service from "./components/pages/Ecosystem/Service";

import Events from "./components/pages/Community/Events";
import Governance from "./components/pages/Community/Governance";
import Faq from "./components/pages/Community/Faq";
import Blog from "./components/pages/Community/Blog";
import Program from "./components/pages/Community/Program";

import Transformation from "./components/pages/About/Transformation";
import Media from "./components/pages/About/Media";
import Careers from "./components/pages/About/Careers";
import NotFound from "./components/ui/NotFound";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/drt-website" element={<Home />} />
        <Route exact path="/Individuals/Started" element={<Started />} />
        <Route exact path="/Individuals/Rewa" element={<Rewa />} />
        <Route exact path="/Individuals/Chain" element={<Chain />} />
        <Route exact path="/Individuals/Staking" element={<Staking />} />
        <Route
          exact
          path="/Individuals/Sustainability"
          element={<Sustainability />}
        />

        <Route exact path="/Developers/BuildersHub" element={<BuildersHub />} />
        <Route exact path="/Developers/Dapp" element={<Dapp />} />
        <Route exact path="/Developers/Tutorials" element={<Tutorials />} />
        <Route exact path="/Developers/Tools" element={<Tools />} />
        <Route exact path="/Developers/Releases" element={<Releases />} />
        <Route exact path="/Developers/Roadmap" element={<Roadmap />} />

        <Route exact path="/Farmer/Resources" element={<Resources />} />
        <Route exact path="/Farmer/Programs" element={<Programs />} />
        <Route exact path="/Farmer/Training" element={<Training />} />
        <Route exact path="/Farmer/Community" element={<Community />} />

        <Route
          exact
          path="/Motherearth/Sustainabilitys"
          element={<Sustainabilitys />}
        />
        <Route
          exact
          path="/Motherearth/Initiatives"
          element={<Initiatives />}
        />
        <Route exact path="/Motherearth/Impact" element={<Impact />} />
        <Route exact path="/Motherearth/Project" element={<Project />} />

        <Route exact path="/products/Xwallet" element={<Xwallet />} />
        <Route exact path="/products/Xexchange" element={<Xexchange />} />
        <Route exact path="/products/Xbridge" element={<Xbridge />} />
        <Route exact path="/products/Xexplorer" element={<Xexplorer />} />

        <Route exact path="/ecosystem/Discover" element={<Discover />} />
        <Route exact path="/ecosystem/Grants" element={<Grants />} />
        <Route exact path="/ecosystem/Projects" element={<Projects />} />
        <Route exact path="/ecosystem/Partners" element={<Partners />} />
        <Route exact path="/ecosystem/Validators" element={<Validators />} />
        <Route exact path="/ecosystem/Service" element={<Service />} />

        <Route exact path="/community/Events" element={<Events />} />
        <Route exact path="/community/Governance" element={<Governance />} />
        <Route exact path="/community/Faq" element={<Faq />} />
        <Route exact path="/community/Blog" element={<Blog />} />
        <Route exact path="/community/Program" element={<Program />} />

        <Route
          exact
          path="/about/Transformation"
          element={<Transformation />}
        />
        <Route exact path="/about/Media" element={<Media />} />
        <Route exact path="/about/Careers" element={<Careers />} />
        <Route exact path="/NotFound" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
