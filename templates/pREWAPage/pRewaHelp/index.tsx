import Link from "next/link";
import Image from "@/components/Image";
import Icon from "@/components/Icon";
const items = [
    {
        title: "Investment risks",
        content:
            "Value fluctuates, no guarantees",
        icon: "/images/content/icons/wallet.svg",
    },
    {
        title: "Development risks",
        content:
            "Platform under active development",
        icon: "/images/content/icons/coins-stacked.svg",
    },
    {
        title: "Regulatory risks",
        content:
            "Crypto laws vary by jurisdiction",
        icon: "/images/content/icons/trophy.svg",
    },
    {
        title: "Research responsibility",
        content:
            "Not financial or legal advice",
        icon: "/images/content/icons/trophy.svg",
    },

];

const PRewaHelp = () => (
    <div className="section">
        <div className="container">
            <div className="space-y-20 xl:space-y-24 lg:space-y-20 md:space-y-12">
                {/* Solution 1 */}
                <div className="mb-4 xl:mb-4 lg:mb-4 md:mb-4">
                    <div className="stage"></div>
                    <div className="mb-4 text-h2 xl:text-h3 md:text-h4">
                        Stake pREWA: Earn Rewards
                    </div>
                    <div className="mb-4 text xl:text md:text">
                        pREWA offers immediate crypto staking utility from launch. This provides early value beyond its funding role for our mission.
                    </div>
                </div>
                <div className="flex items-center -mx-20 even:flex-row-reverse 2xl:-mx-10 xl:-mx-5 lg:block lg:mx-0">
                    <div className="w-[calc(50%-5rem)] mx-20 2xl:w-[calc(50%-2.5rem)] 2xl:mx-10 xl:w-[calc(50%-1.25rem)] xl:mx-5 lg:w-full lg:mx-0 lg:mb-10">
                        <div className="stage"></div>
                        <div className="mb-4 text-h3 xl:text-h4 md:text-h5">
                            What is pREWA Staking?
                        </div>
                        <div className="mb-4 text xl:text md:text">
                            Lock your pREWA tokens to support Dharitri&#39;s early ecosystem. Earn additional pREWA as staking rewards while helping farmers.
                        </div>
                        <ul className="mb-12 list-disc list-inside text-greyscale-400 md:mb-6 md:text-lg space-y-2">
                            Key Benefits:
                            <li>Earn pREWA rewards (APY details shared pre-launch)</li>
                            <li>Support Dharitri&#39;s stability and community growth</li>
                            <li>Show commitment to our agricultural mission</li>
                        </ul>
                    </div>
                    <div className="w-[calc(50%-5rem)] mx-20 bg-greyscale-25 border border-greyscale-100 2xl:w-[calc(50%-2.5rem)] 2xl:mx-10 xl:w-[calc(50%-1.25rem)] xl:mx-5 lg:w-full lg:mx-0">
                        <Image
                            className="w-full"
                            src="/images/content/solutions-pic-1.png"
                            width={500}
                            height={450}
                            alt=""
                        />
                    </div>
                </div>

                {/* Solution 2 */}
                <div className="mb-4 xl:mb-4 lg:mb-4 md:mb-4">
                    <div className="stage"></div>
                    <div className="mb-4 text-h2 xl:text-h3 md:text-h4">
                        Bridge to Native REWA Token
                    </div>
                    <div className="mb-4 text xl:text md:text">
                        We plan a seamless token bridge crypto from pREWA to native REWA. This transition happens after our Proof-of-Stake L1 network launches successfully.
                    </div>
                </div>
                <div className="flex items-center -mx-20 odd:flex-row-reverse 2xl:-mx-10 xl:-mx-5 lg:block lg:mx-0">
                    <div className="w-[calc(50%-5rem)] mx-20 2xl:w-[calc(50%-2.5rem)] 2xl:mx-10 xl:w-[calc(50%-1.25rem)] xl:mx-5 lg:w-full lg:mx-0 lg:mb-10">
                        <div className="stage"></div>
                        <div className="mb-4 text-h3 xl:text-h4 md:text-h5">
                            REWA: Native PoS Token
                        </div>
                        <div className="mb-4 text xl:text md:text">
                            REWA is our native token for utility, governance, and crypto staking. Our L1 blockchain depends on REWA for three key functions:
                        </div>
                        <ul className="mb-12 list-disc list-inside text-greyscale-400 md:mb-6 md:text-lg space-y-2">
                            <li>Network security and transaction validation</li>
                            <li>Ledger integrity and immutable records</li>
                            <li>Ongoing staking rewards for participants</li>
                        </ul>
                        <div className="mb-4 text-h3 xl:text-h4 md:text-h5">
                            Smooth Staking Transition
                        </div>
                        <div className="mb-4 text xl:text md:text">
                            pREWA holders can easily transition to REWA PoS staking. Early supporters become key participants in securing our agricultural blockchain system.
                        </div>
                    </div>
                    <div className="w-[calc(50%-5rem)] mx-20 bg-greyscale-25 border border-greyscale-100 2xl:w-[calc(50%-2.5rem)] 2xl:mx-10 xl:w-[calc(50%-1.25rem)] xl:mx-5 lg:w-full lg:mx-0">
                        <Image
                            className="w-full"
                            src="/images/content/solutions-pic-1.png"
                            width={500}
                            height={450}
                            alt=""
                        />
                    </div>
                </div>
                {/* Solution 3 */}
                <div className="mb-4 xl:mb-4 lg:mb-4 md:mb-4">
                    <div className="stage"></div>
                    <div className="mb-4 text-h2 xl:text-h3 md:text-h4">
                        How to Buy pREWA: Tutorial
                    </div>
                    <div className="mb-4 text xl:text md:text">
                        Buy pREWA with USDT on PancakeSwap to support farmer solutions. Here`s your step-by-step participation guide:
                    </div>
                </div>
                <div className="flex items-center -mx-20 even:flex-row-reverse 2xl:-mx-10 xl:-mx-5 lg:block lg:mx-0">
                    <div className="w-[calc(50%-5rem)] mx-20 2xl:w-[calc(50%-2.5rem)] 2xl:mx-10 xl:w-[calc(50%-1.25rem)] xl:mx-5 lg:w-full lg:mx-0 lg:mb-10">
                        <div className="stage"></div>
                        <div className="mb-4 text-h3 xl:text-h4 md:text-h5">
                            Purchase Steps
                        </div>
                        <ul className="mb-12 list-disc list-inside text-greyscale-400 md:mb-6 md:text-lg space-y-2">
                            <li>Prepare your BEP20 wallet like MetaMask</li>
                            <li>Get USDT and BNB tokens for purchase costs</li>
                            <li>Access PancakeSwap via our official link</li>
                            <li>Swap your USDT for pREWA tokens safely</li>
                            <li>Add contract address to view your balance</li>

                        </ul>
                        <div className="mb-4 text-h3 xl:text-h4 md:text-h5">
                            Security Guidelines
                        </div>
                        <ul className="mb-12 list-disc list-inside text-greyscale-400 md:mb-6 md:text-lg space-y-2">
                            <li>Use only official Dharitri transaction links</li>
                            <li>Never share private keys or seed phrases</li>
                            <li>Verify our contract address before buying</li>
                            <li>Ignore unsolicited contact requesting funds</li>
                        </ul>
                    </div>
                    <div className="w-[calc(50%-5rem)] mx-20 bg-greyscale-25 border border-greyscale-100 2xl:w-[calc(50%-2.5rem)] 2xl:mx-10 xl:w-[calc(50%-1.25rem)] xl:mx-5 lg:w-full lg:mx-0">
                        <Image
                            className="w-full"
                            src="/images/content/solutions-pic-1.png"
                            width={500}
                            height={450}
                            alt=""
                        />
                    </div>
                </div>

                {/* Solution 4 */}
                <div className="mb-4 xl:mb-4 lg:mb-4 md:mb-4">
                    <div className="stage"></div>
                    <div className="mb-4 text-h2 xl:text-h3 md:text-h4">
                        pREWA Contract Address BSC
                    </div>
                    <div className="mb-4 text xl:text md:text">
                        This is Dharitri&#39;s only official pREWA token contract. Always verify before any transaction to protect your investment in farmer solutions.
                    </div>
                </div>
                <div className="flex items-center -mx-20 odd:flex-row-reverse 2xl:-mx-10 xl:-mx-5 lg:block lg:mx-0">
                    <div className="w-[calc(50%-5rem)] mx-20 2xl:w-[calc(50%-2.5rem)] 2xl:mx-10 xl:w-[calc(50%-1.25rem)] xl:mx-5 lg:w-full lg:mx-0 lg:mb-10">
                        <div className="stage"></div>
                        <div className="mb-4 text-h3 xl:text-h4 md:text-h5">
                            Token Specifications
                        </div>
                        <ul className="mb-12 list-disc list-inside text-greyscale-400 md:mb-6 md:text-lg space-y-2">
                            <li>Network: Binance Smart Chain BSC</li>
                            <li>Standard: BEP20 for wallet support</li>
                            <li>Symbol: pREWA for identification</li>
                            <li>Supply: Approximately 500M tokens</li>
                            <li>Decimals: 18 standard crypto format</li>
                        </ul>
                        <div className="mb-4 text-h3 xl:text-h4 md:text-h5">
                            Security Warning
                        </div>
                        <div className="mb-4 text xl:text md:text">
                            Fake addresses exist targeting investors. Use only addresses from our official website and verified agritech channels.
                        </div>
                        <Link
                            className="btn-primary pr-5 md:w-full"
                            href="/solution"
                        >
                            <span>copy pREWA Contract</span>
                            <Icon className="w-5 h-5" name="arrow-right" />
                        </Link>
                    </div>
                    <div className="w-[calc(50%-5rem)] mx-20 bg-greyscale-25 border border-greyscale-100 2xl:w-[calc(50%-2.5rem)] 2xl:mx-10 xl:w-[calc(50%-1.25rem)] xl:mx-5 lg:w-full lg:mx-0">
                        <Image
                            className="w-full"
                            src="/images/content/solutions-pic-1.png"
                            width={500}
                            height={450}
                            alt=""
                        />
                    </div>
                </div>
                {/* Solution 5 */}
                <div className="flex items-center -mx-20 odd:flex-row-reverse 2xl:-mx-10 xl:-mx-5 lg:block lg:mx-0">
                    <div className="w-[calc(50%-5rem)] mx-20 2xl:w-[calc(50%-2.5rem)] 2xl:mx-10 xl:w-[calc(50%-1.25rem)] xl:mx-5 lg:w-full lg:mx-0 lg:mb-10">
                        <div className="stage"></div>
                        <div className="mb-4 text-h3 xl:text-h4 md:text-h5">
                            Key Risks & Token Warnings
                        </div>
                        <div className="mb-4 text xl:text md:text">
                            Crypto investments like pREWA carry high risks, including potential total loss.
                            pREWA is an interim utility token with volatile value, funding our farmer solutions.

                        </div>
                        <div className="mb-4 text xl:text md:text">
                            Consult independent advisors before making any investment decisions. Review our full Terms & Conditions for complete risk details.
                        </div>
                        <div className="mb-4 text xl:text md:text">
                            By participating, you acknowledge and accept these token sale risks.
                        </div>
                        <Link
                            className="btn-primary pr-5 md:w-full"
                            href="/solution"
                        >
                            <span>View Full T&Cs</span>
                            <Icon className="w-5 h-5" name="arrow-right" />
                        </Link>
                    </div>
                    <div className="w-[calc(50%-5rem)] mx-20 bg-greyscale-25 border border-greyscale-100 2xl:w-[calc(50%-2.5rem)] 2xl:mx-10 xl:w-[calc(50%-1.25rem)] xl:mx-5 lg:w-full lg:mx-0">
                        <Image
                            className="w-full"
                            src="/images/content/solutions-pic-1.png"
                            width={500}
                            height={450}
                            alt=""
                        />
                    </div>
                </div>
                <div className="grid gap-8 grid-cols-3 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1">
                    {items.map((item, index) => (
                        <div
                            className="p-6 bg-greyscale-0 border border-greyscale-100 shadow-2"
                            key={index}
                        >
                            <div className="flex justify-center items-center w-12 h-12 mb-6 rounded-full bg-secondary-0">
                                <Image
                                    src={item.icon}
                                    className="w-6"
                                    width={24}
                                    height={24}
                                    alt=""
                                />
                            </div>
                            <div className="mb-3 text-h6">{item.title}</div>
                            <div className="text-greyscale-400">{item.content}</div>
                        </div>
                    ))}
                </div>

                {/* Solution 6 */}
                <div className="mb-4 xl:mb-4 lg:mb-4 md:mb-4">
                    <div className="stage"></div>
                    <div className="mb-4 text-h2 xl:text-h3 md:text-h4">
                        Join Our Community & Learn More
                    </div>
                    <div className="mb-4 text xl:text md:text">
                        Keep up with pREWA news on our Telegram. Want to know more <br></br>
                        about Dharitri? Check out the links below.
                    </div>
                </div>
                <div className="flex items-center -mx-20 odd:flex-row-reverse 2xl:-mx-10 xl:-mx-5 lg:block lg:mx-0">
                    <div className="w-[calc(50%-5rem)] mx-20 2xl:w-[calc(50%-2.5rem)] 2xl:mx-10 xl:w-[calc(50%-1.25rem)] xl:mx-5 lg:w-full lg:mx-0 lg:mb-10">
                        <div className="stage"></div>
                        <div className="mb-4 text-h3 xl:text-h4 md:text-h5">
                            Explore More
                        </div>
                        <ul className="mb-12 list-disc list-inside text-greyscale-400 md:mb-6 md:text-lg space-y-2">
                            <li>Read Our White Paper: See our tech details and project plan.</li>
                            <li>Our Mission for Farmers: Learn how we help and our main goals.</li>
                            <li>Meet the Dharitri Team: Get to know the people behind Dharitri.</li>
                        </ul>

                        <div className="mb-4 text xl:text md:text">
                            Follow us on social media to see our progress and join the conversation.
                        </div>
                        <div className="flex space-x-4">
                            <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                <Icon name="instagram" className="w-6 h-6 hover:text-secondary-500 transition-colors" />
                            </Link>
                            <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                <Icon name="twitter" className="w-6 h-6 hover:text-secondary-500 transition-colors" />
                            </Link>
                            <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                                <Icon name="linkedin" className="w-6 h-6 hover:text-secondary-500 transition-colors" />
                            </Link>
                            <Link href="https://discord.com" target="_blank" rel="noopener noreferrer">
                                <Icon name="discord" className="w-6 h-6 hover:text-secondary-500 transition-colors" />
                            </Link>
                        </div>
                    </div>
                    <div className="w-[calc(50%-5rem)] mx-20 bg-greyscale-25 border border-greyscale-100 2xl:w-[calc(50%-2.5rem)] 2xl:mx-10 xl:w-[calc(50%-1.25rem)] xl:mx-5 lg:w-full lg:mx-0">
                        <Image
                            className="w-full"
                            src="/images/content/solutions-pic-1.png"
                            width={500}
                            height={450}
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </div>
    </div >
);

export default PRewaHelp;
