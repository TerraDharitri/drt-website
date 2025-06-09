"use client";

import Layout from "@/components/Layout";
import Join from "./Join";
import Main from "./Main";
import Revenue from "./Revenue";
import OurMission from "./OurMission";
import Solutions from "./Solutions";

const ProblemsAndVisionPage = () => {
    return (
        <Layout darkHeader>
            <Main />
            <Revenue />
            <Solutions />
            <OurMission />
            <Join />
        </Layout>
    );
};

export default ProblemsAndVisionPage;
