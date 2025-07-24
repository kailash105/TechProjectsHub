import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Home from "./pages/home";
import Services from "./pages/services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Thanks from "./pages/Thanks";
import Training from "./pages/Training";
import Projects from "./pages/Projects";
import ProjectsCategory from "./pages/ProjectsCategory";
import CseMinor from "./pages/CseMinor";
import CseMajor from "./pages/CseMajor";
import EeeMinor from "./pages/EeeMinor";
import EeeMajor from "./pages/EeeMajor";
import AimlMinor from "./pages/AimlMinor";
import AimlMajor from "./pages/AimlMajor";
import IotMinor from "./pages/IotMinor";
import IotMajor from "./pages/IotMajor";
import DataScienceMinor from "./pages/DataScienceMinor";
import DataScienceMajor from "./pages/DataScienceMajor";
import EceMinor from "./pages/EceMinor";
import EceMajor from "./pages/EceMajor";
import MechMinor from "./pages/MechMinor";
import MechMajor from "./pages/MechMajor";
import PythonFullStack from "./pages/PythonFullStack";
import JavaFullStack from "./pages/JavaFullStack";
import MernStack from "./pages/MernStack";
import AIML from "./pages/AIML";
import WebFullStack from "./pages/WebFullStack";
import FrontEnd from "./pages/FrontEnd";
import BackEnd from "./pages/BackEnd";
import DataScience from "./pages/DataScience";
import DataEngineering from "./pages/DataEngineering";
import CloudComputingAzure from "./pages/CloudComputingAzure";
import BlockChain from "./pages/BlockChain";
import PythonFullStack1Month from "./pages/PythonFullStack1Month";
import PythonFullStack2Months from "./pages/PythonFullStack2Months";
import PythonFullStack3Months from "./pages/PythonFullStack3Months";
import JavaFullStack1Month from "./pages/JavaFullStack1Month";
import JavaFullStack2Months from "./pages/JavaFullStack2Months";
import JavaFullStack3Months from "./pages/JavaFullStack3Months";
import MernStack1Month from "./pages/MernStack1Month";
import MernStack2Months from "./pages/MernStack2Months";
import MernStack3Months from "./pages/MernStack3Months";
import AIML1Month from "./pages/AIML1Month";
import AIML2Months from "./pages/AIML2Months";
import AIML3Months from "./pages/AIML3Months";
import WebFullStack1Month from "./pages/WebFullStack1Month";
import WebFullStack2Months from "./pages/WebFullStack2Months";
import WebFullStack3Months from "./pages/WebFullStack3Months";
import FrontEnd1Month from "./pages/FrontEnd1Month";
import FrontEnd2Months from "./pages/FrontEnd2Months";
import FrontEnd3Months from "./pages/FrontEnd3Months";
import BackEnd1Month from "./pages/BackEnd1Month";
import BackEnd2Months from "./pages/BackEnd2Months";
import BackEnd3Months from "./pages/BackEnd3Months";
import DataScience1Month from "./pages/DataScience1Month";
import DataScience2Months from "./pages/DataScience2Months";
import DataScience3Months from "./pages/DataScience3Months";
import DataEngineering1Month from "./pages/DataEngineering1Month";
import DataEngineering2Months from "./pages/DataEngineering2Months";
import DataEngineering3Months from "./pages/DataEngineering3Months";
import CloudComputingAzure1Month from "./pages/CloudComputingAzure1Month";
import CloudComputingAzure2Months from "./pages/CloudComputingAzure2Months";
import CloudComputingAzure3Months from "./pages/CloudComputingAzure3Months";
import BlockChain1Month from "./pages/BlockChain1Month";
import BlockChain2Months from "./pages/BlockChain2Months";
import BlockChain3Months from "./pages/BlockChain3Months";
import CustomProjects from "./pages/CustomProjects";
import PythonwithDSA from "./pages/PythonwithDSA";
import JavawithDSA from "./pages/JavawithDSA";
import CivilMinor from "./pages/CivilMinor";
import CivilMajor from "./pages/CivilMajor";

function ScrollToTop() {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        {/* Home Page */}
        <Route path="/" element={<Home />} />

        {/* Services Page */}
        <Route path="/services" element={<Services />} />

        {/* Remove Concrete Printing and Interior Designing routes */}
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/thank-you" element={<Thanks />} />
        <Route path="/training" element={<Training />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects-category" element={<ProjectsCategory />} />
        <Route path="/custom-projects" element={<CustomProjects />} />

        {/* Department Minor/Major Project Pages */}
        <Route path="/cse-minor" element={<CseMinor />} />
        <Route path="/cse-major" element={<CseMajor />} />
        <Route path="/eee-minor" element={<EeeMinor />} />
        <Route path="/eee-major" element={<EeeMajor />} />
        <Route path="/aiml-minor" element={<AimlMinor />} />
        <Route path="/aiml-major" element={<AimlMajor />} />
        <Route path="/iot-minor" element={<IotMinor />} />
        <Route path="/iot-major" element={<IotMajor />} />
        <Route path="/datascience-minor" element={<DataScienceMinor />} />
        <Route path="/datascience-major" element={<DataScienceMajor />} />
        <Route path="/ece-minor" element={<EceMinor />} />
        <Route path="/ece-major" element={<EceMajor />} />
        <Route path="/mech-minor" element={<MechMinor />} />
        <Route path="/mech-major" element={<MechMajor />} />
        <Route path="/civil-minor" element={<CivilMinor />} />
        <Route path="/civil-major" element={<CivilMajor />} />
        <Route path="/training/python-full-stack" element={<PythonFullStack />} />
        <Route path="/training/java-full-stack" element={<JavaFullStack />} />
        <Route path="/training/mern-stack" element={<MernStack />} />
        <Route path="/training/ai-ml" element={<AIML />} />
        <Route path="/training/web-full-stack" element={<WebFullStack />} />
        <Route path="/training/front-end" element={<FrontEnd />} />
        <Route path="/training/back-end" element={<BackEnd />} />
        <Route path="/training/data-science" element={<DataScience />} />
        <Route path="/training/data-engineering" element={<DataEngineering />} />
        <Route path="/training/cloud-computing-azure" element={<CloudComputingAzure />} />
        <Route path="/training/block-chain" element={<BlockChain />} />
        <Route path="/training/python-full-stack/1-month" element={<PythonFullStack1Month />} />
        <Route path="/training/python-full-stack/2-months" element={<PythonFullStack2Months />} />
        <Route path="/training/python-full-stack/3-months" element={<PythonFullStack3Months />} />
        <Route path="/training/java-full-stack/1-month" element={<JavaFullStack1Month />} />
        <Route path="/training/java-full-stack/2-months" element={<JavaFullStack2Months />} />
        <Route path="/training/java-full-stack/3-months" element={<JavaFullStack3Months />} />
        <Route path="/training/mern-stack/1-month" element={<MernStack1Month />} />
        <Route path="/training/mern-stack/2-months" element={<MernStack2Months />} />
        <Route path="/training/mern-stack/3-months" element={<MernStack3Months />} />
        <Route path="/training/ai-ml/1-month" element={<AIML1Month />} />
        <Route path="/training/ai-ml/2-months" element={<AIML2Months />} />
        <Route path="/training/ai-ml/3-months" element={<AIML3Months />} />
        <Route path="/training/web-full-stack/1-month" element={<WebFullStack1Month />} />
        <Route path="/training/web-full-stack/2-months" element={<WebFullStack2Months />} />
        <Route path="/training/web-full-stack/3-months" element={<WebFullStack3Months />} />
        <Route path="/training/front-end/1-month" element={<FrontEnd1Month />} />
        <Route path="/training/front-end/2-months" element={<FrontEnd2Months />} />
        <Route path="/training/front-end/3-months" element={<FrontEnd3Months />} />
        <Route path="/training/back-end/1-month" element={<BackEnd1Month />} />
        <Route path="/training/back-end/2-months" element={<BackEnd2Months />} />
        <Route path="/training/back-end/3-months" element={<BackEnd3Months />} />
        <Route path="/training/data-science/1-month" element={<DataScience1Month />} />
        <Route path="/training/data-science/2-months" element={<DataScience2Months />} />
        <Route path="/training/data-science/3-months" element={<DataScience3Months />} />
        <Route path="/training/data-engineering/1-month" element={<DataEngineering1Month />} />
        <Route path="/training/data-engineering/2-months" element={<DataEngineering2Months />} />
        <Route path="/training/data-engineering/3-months" element={<DataEngineering3Months />} />
        <Route path="/training/cloud-computing-azure/1-month" element={<CloudComputingAzure1Month />} />
        <Route path="/training/cloud-computing-azure/2-months" element={<CloudComputingAzure2Months />} />
        <Route path="/training/cloud-computing-azure/3-months" element={<CloudComputingAzure3Months />} />
        <Route path="/training/block-chain/1-month" element={<BlockChain1Month />} />
        <Route path="/training/block-chain/2-months" element={<BlockChain2Months />} />
        <Route path="/training/block-chain/3-months" element={<BlockChain3Months />} />
        <Route path="/training/python-with-ds" element={<PythonwithDSA />} />
        <Route path="/training/java-with-dsa" element={<JavawithDSA />} />





      </Routes>
    </BrowserRouter>
  );
}

export default App;
