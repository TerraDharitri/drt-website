"use client";

import Layout from "@/components/Layout";
import Dividers from "@/components/Dividers";
import Link from "next/link";

type LegalDocumentTemplateProps = {
  title: string;
  lastUpdated?: string;
  children: React.ReactNode;
};

const LegalDocumentTemplate = ({
  title,
  lastUpdated,
  children,
}: LegalDocumentTemplateProps) => {
  return (
    <Layout classHeader="!bg-greyscale-25">
      <Dividers className="bg-greyscale-25" hero>
        <div className="pt-16 pb-24 md:py-12">
          <div className="container max-w-[61.5rem]">
            {/* Back to Legal & Compliance */}
            <div className="mb-8">
              <Link
                href="/legal-compliance"
                className="inline-flex items-center text-primary-500 hover:text-primary-600 font-medium"
              >
                ← Back to Legal & Compliance
              </Link>
            </div>

            {/* Header */}
            <div className="text-center">
              <div className="mb-4 label label-sm">Legal Document</div>
              <div className="mb-4 text-h2 md:text-h4 dark:text-dark-text-primary">
                {title}
              </div>
              {lastUpdated && (
                <div className="text-lg text-greyscale-400 dark:text-dark-text-secondary">
                  Last Updated:{" "}
                  <span className="font-semibold text-greyscale-900 dark:text-dark-text-primary">
                    {lastUpdated}
                  </span>
                </div>
              )}
            </div>

            {/* Content */}
            <div className="content mt-16 pt-16 border-t border-greyscale-200 lg:mt-12 lg:pt-12 md:mt-8 md:pt-8 dark:border-dark-border">
              {children}
            </div>

            {/* Footer */}
            <div className="mt-16 pt-16 border-t border-greyscale-200 lg:mt-12 lg:pt-12 md:mt-8 md:pt-8 dark:border-dark-border">
              <div className="mb-2 text-h6 dark:text-dark-text-primary">
                Contact us:
              </div>
              <div className="mb-2 text-greyscale-400 dark:text-dark-text-secondary">
                Email: legal@dharitri.com
              </div>
              <div className="mb-8 text-greyscale-400 dark:text-dark-text-secondary">
                For any questions regarding this legal document.
              </div>
              <div className="text-greyscale-400 dark:text-dark-text-secondary">
                Sincerely, <br />
                The Dharitri Legal Team
              </div>
            </div>
          </div>
        </div>
      </Dividers>
    </Layout>
  );
};

export default LegalDocumentTemplate;
