import Dividers from "@/components/Dividers";
import Content from "./Content";

type MainProps = {};

const Main = ({}: MainProps) => {
  return (
    <Dividers className="bg-greyscale-25" hero>
      <div className="pt-16 pb-24 md:py-12">
        <div className="container max-w-[61.5rem]">
          <div className="text-center">
            <div className="mb-4 label label-sm">Legal Document</div>
            <div className="mb-4 text-h2 md:text-h4">Legal Compliance</div>
            <div className="text-lg text-greyscale-400">
              Last Updated:{" "}
              <span className="font-semibold text-greyscale-900">
                {new Date().toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </div>
          </div>
          <Content />
          <div className="mt-16 pt-16 border-t border-greyscale-200 lg:mt-12 lg:pt-12 md:mt-8 md:pt-8">
            <div className="mb-2 text-h6">Contact us:</div>
            <div className="mb-2 text-greyscale-400">
              Email: support@dharitri.com
            </div>
            <div className="mb-8 text-greyscale-400">
              For any questions regarding this legal compliance document.
            </div>
            <div className="text-greyscale-400">
              Sincerely, <br />
              The Dharitri Team
            </div>
          </div>
        </div>
      </div>
    </Dividers>
  );
};

export default Main;
