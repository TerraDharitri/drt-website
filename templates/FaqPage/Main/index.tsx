import Dividers from "@/components/Dividers";

type MainProps = {};

const Main = ({}: MainProps) => (
  <Dividers className="bg-white dark:bg-dark-bg text-bold" hero light>
    <div className="py-10 text-center md:py-12">
      <div className="mb-15 text-center">
        <h2 className="text-h2 xl:text-h3 md:text-h4 font-semibold mb-6 dark:text-dark-text-primary">
          Project FAQs & Key Questions
        </h2>
        <p className="mt-4 max-w-3xl mx-auto text-greyscale-400 dark:text-dark-text-secondary text-lg md:text-base">
          Common questions about Dharitri platform fundamentals, blockchain
          technology, development progress, and regenerative farming solutions.
        </p>
      </div>
    </div>
  </Dividers>
);

export default Main;
