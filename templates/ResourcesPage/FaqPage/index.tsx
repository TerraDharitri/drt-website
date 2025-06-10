import { useState } from "react";
import Dividers from "@/components/Dividers";
import FaqItem from "@/components/FaqItem";

import { faq } from "@/mocks/faq";

type FaqPageProps = {};

const FaqPage = ({}: FaqPageProps) => {
    const [activeId, setActiveId] = useState<string>("0");

    return (
        <Dividers className="section bg-greyscale-25">
            <div className="py-10 text-center md:py-12">
            <div className="mb-15 text-center">
                <h2 className="text-h2 xl:text-h3 md:text-h4 font-semibold mb-6">
                    Project FAQs & Key Questions
                </h2>
                <p className="mt-4 max-w-3xl mx-auto text-greyscale-400 text-lg md:text-base">
                    Common questions about Dharitri platform fundamentals, blockchain technology, development progress, and regenerative farming solutions.
                </p>
            </div>
        </div>
            <div className="container flex md:block">
                <div className="shrink-0 w-[16.25rem] lg:w-44 md:flex md:w-auto md:mb-6 md:overflow-auto md:scroll-smooth md:scrollbar-none md:-mx-6 md:before:shrink-0 md:before:w-6 md:after:shrink-0 md:after:w-6">
                    {faq.map((button) => (
                        <button
                            className={`flex w-full p-3 border border-transparent text-lg font-medium transition-colors hover:text-greyscale-900 md:shrink-0 md:w-auto ${
                                activeId === button.id
                                    ? "bg-greyscale-0 !border-greyscale-100 text-greyscale-900"
                                    : "text-greyscale-400"
                            }`}
                            key={button.id}
                            onClick={() => setActiveId(button.id)}
                        >
                            {button.title}
                        </button>
                    ))}
                </div>
                <div className="grow pl-30 xl:pl-20 lg:pl-10 md:pl-0">
                    {faq
                        .filter((x: any) => x.id === activeId)
                        .map((x) => (
                            <div className="space-y-3" key={x.id}>
                                {x.items.map((item) => (
                                    <FaqItem item={item} key={item.id} />
                                ))}
                            </div>
                        ))}
                </div>
            </div>
        </Dividers>
    );
};

export default FaqPage;
