"use client";

import Layout from "@/components/Layout";
import Join from "./Join";
import Solutions from "./Solutions";
import Revenue from "./Revenue";
import PRewaHelp from "./pRewaHelp";
import DevelopmentStats from "./DevelopmentStats";
const PREWAPage = () => {
    return (
        <Layout darkHeader>
            <Solutions />
            <Revenue />
           <PRewaHelp />
            <Join />
        </Layout>
    );
};nvm use 

export default PREWAPage;
