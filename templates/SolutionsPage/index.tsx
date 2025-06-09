"use client";

import Layout from "@/components/Layout";
import Join from "./Join";
import Solutions from "./Solutions";
import Revenue from "./Revenue";
import BuildSolutions from "./BuildSolutions";
import DevelopmentStats from "./DevelopmentStats";
const SolutionsPage = () => {
    return (
        <Layout darkHeader>
            <Solutions />
            <Revenue />
           <BuildSolutions />
           <DevelopmentStats />
            <Join />
        </Layout>
    );
};

export default SolutionsPage;
