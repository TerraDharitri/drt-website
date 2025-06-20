import Link from "next/link";

type ContentProps = {};

const legalPages = [
  {
    title: "Privacy Policy",
    description:
      "Learn how we collect, use, and protect your personal information.",
    url: "/legal-compliance/privacy-policy",
  },
  {
    title: "Terms of Service",
    description: "Terms and conditions for using our platform and services.",
    url: "/legal-compliance/terms-of-service",
  },
  {
    title: "Disclaimers",
    description: "Important disclaimers regarding our platform and services.",
    url: "/legal-compliance/disclaimers",
  },
  {
    title: "Cookie Policy",
    description:
      "Information about how we use cookies and similar technologies.",
    url: "/legal-compliance/cookie-policy",
  },
  {
    title: "pREWA Staking Terms",
    description: "Terms and conditions specific to pREWA token staking.",
    url: "/legal-compliance/prewa-staking-terms",
  },
];

const Content = ({}: ContentProps) => (
  <div className="content mt-16 pt-16 border-t border-greyscale-200 lg:mt-12 lg:pt-12 md:mt-8 md:pt-8">
    <p className="text-lg text-greyscale-600 dark:text-dark-text-secondary mb-12">
      Welcome to our legal and compliance section. Here you can find all the
      important legal documents related to using our platform and services.
      Please review these documents carefully.
    </p>

    <div className="grid gap-6 grid-cols-1 lg:grid-cols-2">
      {legalPages.map((page, index) => (
        <Link
          href={page.url}
          key={index}
          className="block p-6 bg-greyscale-0 dark:bg-dark-card border border-greyscale-100 dark:border-dark-border rounded-lg hover:shadow-lg transition-shadow duration-200"
        >
          <h3 className="text-xl font-semibold mb-3 text-greyscale-900 dark:text-dark-text-primary">
            {page.title}
          </h3>
          <p className="text-greyscale-600 dark:text-dark-text-secondary">
            {page.description}
          </p>
          <div className="mt-4 text-primary-500 font-medium">
            Read Document →
          </div>
        </Link>
      ))}
    </div>

    <div className="mt-12 p-6 bg-greyscale-50 dark:bg-dark-card-subtle rounded-lg">
      <h4 className="text-lg font-semibold mb-3 dark:text-dark-text-primary">
        Need Help?
      </h4>
      <p className="text-greyscale-600 dark:text-dark-text-secondary">
        If you have any questions about these legal documents or need
        clarification on any terms, please don't hesitate to contact our legal
        team.
      </p>
    </div>
  </div>
);

export default Content;
