"use client";

import Layout from "@/components/Layout";
import Join from "./Join";
import Main from "./Main";
import ConnectedFarmerPlatform from "./ConnectedFarmerPlatform";
import Solutions from "./Solutions";

const EcosystemPage = () => {
    return (
        <Layout darkHeader>
            <Main />
           <ConnectedFarmerPlatform />
            <Solutions />
            
            <Join />
        </Layout>
    );
};

export default EcosystemPage;
