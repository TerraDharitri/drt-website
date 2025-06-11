import Dividers from "@/components/Dividers";
import Image from "@/components/Image";


type MainProps = {};

const Main = ({}: MainProps) => (
    <Dividers className="bg-secondary-300 text-greyscale-0" hero light>
        <div className="py-22 md:pt-12 md:pb-6">
            <div className="container">
                <div className="flex items-center mb-22 lg:block md:mb-6">
                    <div className="grow pr-10 lg:pr-0">
                        
                        <div className="mb-4 text-h1 xl:text-h2 md:text-h3">
                           The Complete Dharitri Ecosystem for Farmers
                        </div>
                        <div className="mb-10 text-white/70 md:text-lg">
                            Blockchain, tokens, and tools working together for farmer success.
                        </div>
                        
                    </div>
                    <div className="relative shrink-0 w-[49.48%] lg:w-full lg:mt-16 md:mt-8">
                        <Image
                            className="w-full border border-white/[.15] shadow-1"
                            src="images/content/contact-pic.jpg"
                            width={574}
                            height={520}
                            alt=""
                        />

                    </div>
                </div>
            </div>
        </div>
    </Dividers>
);

export default Main;
