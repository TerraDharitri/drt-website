"use client";

import Layout from "@/components/Layout";
import Join from "./Join";
import Main from "./Main";
import Details from "./Details";
import Team from "./Team";
import OurMission from "./ourMission";
import KenyaLearningInitiative from "./KenyaLearningInitiative";
const AboutUsPage = () => {
    return (
        <Layout>
            <Main />
            <Details />
            <OurMission />
            {/* <Team /> */}
            <KenyaLearningInitiative />
            <Join />
        </Layout>
    );
};

export default AboutUsPage;
