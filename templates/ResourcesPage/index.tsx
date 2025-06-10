"use client";

import Layout from "@/components/Layout";
import Join from "./Join";
import Main from "./Main";
import Solutions from "./Solutions";
import FaqPage from "./FaqPage";
import TermsAndConditions from "./TermsAndConditions";

const ResourcesPage = () => {
    return (
        <Layout darkHeader>
            <Main />
            <Solutions />
            <FaqPage />
            <TermsAndConditions />
            <Join />
        </Layout>
    );
};

export default ResourcesPage;
