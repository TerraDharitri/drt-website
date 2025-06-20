import type { NextPage } from "next";
import LegalDocumentTemplate from "@/templates/LegalCompliancePage/LegalDocumentTemplate";

const PREWAStakingTerms: NextPage = () => {
    return (
        <LegalDocumentTemplate 
            title="pREWA Staking Terms and Conditions"
            lastUpdated="June 19, 2025"
        >
            <h5>Preamble/Introduction</h5>
            <p>
                Welcome to the Dharitri pREWA Staking Program (the "Staking Program") offered by Dugong Global Services Pvt Ltd, a company registered in India (hereinafter referred to as "Dugong," "the Company," "we," "us," or "our"), via the website stake.dharitri.org (the "Staking Platform"). The Staking Program is associated with the project known as "Dharitri."
            </p>
            <p>
                These Staking Terms and Conditions ("Staking Terms") govern your participation in the Staking Program. By connecting your wallet, depositing pREWA tokens into the designated staking smart contract, or otherwise participating in the Staking Program, you ("User," "you," "your") acknowledge that you have read, understood, and agree to be bound by these Staking Terms, as well as the main Dharitri Website Terms of Service [Link to Main Terms of Service] ("Main ToS") and Privacy Policy [Link to Privacy Policy] ("Privacy Policy"), which are incorporated herein by reference where applicable.
            </p>
            <p>
                If you do not agree with these Staking Terms, do not participate in the Staking Program.
            </p>
            <p>
                <strong>Important Notice on Staking Parameters:</strong> Specific operational parameters of the Staking Program, including but not limited to, current estimated Annual Percentage Yield (APY), minimum staking amounts, any applicable lock-up periods, rules and amounts for early unstaking penalties, and reward distribution frequencies ("Operational Parameters") will be displayed on the Staking Platform interface. Rates may change between wallet confirmation and transaction settlement. By initiating a staking transaction, you acknowledge and agree to the Operational Parameters that are in effect and clearly displayed on the Staking Platform at the time of your staking transaction. These Operational Parameters, as displayed at the time of your staking, form part of this agreement.
            </p>

            <h5>1. Eligibility</h5>
            <ul>
                <li>You must meet the eligibility requirements set forth in the Main ToS (e.g., be at least 18 years of age or the age of legal majority in your jurisdiction).</li>
                <li>You are solely responsible for ensuring that your participation in the Staking Program is lawful in your jurisdiction. Dugong makes no representation or warranty regarding the legality of the Staking Program in any specific jurisdiction.</li>
                <li><strong>Kenya Regulatory Notice:</strong> The Capital Markets Authority Kenya has not approved pREWA staking programs and warns that crypto assets are high-risk products. Kenyan residents should exercise extreme caution and verify legal compliance before participating.</li>
                <li>You must possess a compatible BEP20 wallet (e.g., MetaMask, Trust Wallet) and have a sufficient balance of pREWA tokens for staking and BNB tokens to cover any applicable Binance Smart Chain transaction fees (gas fees).</li>
            </ul>

            <h5>2. The Staking Program</h5>
            <h5>Nature of Staking</h5>
            <p>
                Staking involves you voluntarily locking your pREWA tokens in the official pREWA staking smart contract on the Binance Smart Chain to support the Dharitri ecosystem. In return for successfully staking your tokens according to the displayed Operational Parameters and these Staking Terms, you may be eligible to earn pREWA rewards.
            </p>

            <h5>No Guarantee of Rewards</h5>
            <p>
                Rewards are not guaranteed. APY is an estimate and can fluctuate significantly based on various factors (e.g., total tokens staked, reward pool dynamics, network conditions, or other mechanisms determined by Dugong). Historical or estimated parameters (e.g., past APY) displayed for reference do not guarantee future results and are for informational purposes only. Past performance is not indicative of future results.
            </p>

            <h5>Rewards Token</h5>
            <p>
                Rewards are paid in pREWA tokens.
            </p>

            <h5>Staking Parameters</h5>
            <p>
                You acknowledge that Operational Parameters such as minimum stake amounts, applicable lock-up periods, any penalties for early unstaking, and reward distribution schedules are subject to what is displayed on the Staking Platform at the time you initiate your staking transaction. It is your responsibility to review and understand these Operational Parameters before staking.
            </p>

            <h5>3. User Responsibilities</h5>
            <h5>Wallet Security</h5>
            <p>
                Users are solely responsible for the security and control of their own BEP20 compatible wallets, private keys, seed phrases, and passwords. Dugong will never ask for your private keys or seed phrases.
            </p>

            <h5>Transaction Verification</h5>
            <p>
                Users are responsible for verifying all transaction details, including the official staking smart contract address (which will be published on stake.dharitri.org), before confirming any staking or unstaking transaction.
            </p>

            <h5>Gas Fees</h5>
            <p>
                Users are responsible for paying all transaction fees (gas fees in BNB) required to interact with the staking smart contract on the Binance Smart Chain.
            </p>

            <h5>Understanding Risks</h5>
            <p>
                Users acknowledge they have read and understood the risks associated with staking (detailed in Section 5).
            </p>

            <h5>Compliance with Terms</h5>
            <p>
                Adherence to these Staking Terms and any instructions or guidelines provided on the Staking Platform.
            </p>

            <h5>4. Smart Contract Interaction</h5>
            <h5>Direct Interaction</h5>
            <p>
                Staking pREWA involves direct interaction with a smart contract deployed on the Binance Smart Chain. Users acknowledge that they are interacting with this smart contract at their own risk.
            </p>

            <h5>Official Contract Address</h5>
            <p>
                The official address of the pREWA staking smart contract will be clearly displayed on the stake.dharitri.org Staking Platform. Users must ensure they are interacting with the correct contract address.
            </p>

            <h5>Audits and Security</h5>
            <p>
                Dugong may commission third-party security audits for the staking smart contract(s). Information regarding any audits and security reports will be made available on the Staking Platform. However, users acknowledge that audits do not guarantee the absence of all vulnerabilities or eliminate all risks. Smart contract technology is inherently risky.
            </p>

            <h5>Administrative Functions</h5>
            <p>
                Dugong may implement administrative functions within the staking smart contract for the security, stability, and operational management of the Staking Program. This may include, but is not limited to, the ability to pause certain contract interactions in case of emergencies or security incidents, or to apply timelocks to changes in certain critical parameters for the protection of the program and its participants. Use of these functions will be intended for the overall benefit and security of the Staking Program and its participants.
            </p>

            <h5>5. Risks of Staking</h5>
            <h5>Smart Contract and Technical Risks</h5>
            <ul>
                <li><strong>Smart Contract Vulnerabilities:</strong> Risk of bugs, errors, exploits, or vulnerabilities in the staking smart contract, which could lead to the partial or total loss of staked pREWA tokens or accrued rewards</li>
                <li><strong>Network Risks:</strong> Binance Smart Chain network congestion, failures, or attacks may affect staking functionality</li>
                <li><strong>MEV (Maximal Extractable Value) Attacks:</strong> Large staking or unstaking transactions may be subject to MEV extraction by miners/validators</li>
                <li><strong>Front-running Risks:</strong> Other users or bots may front-run your transactions, potentially affecting execution</li>
            </ul>

            <h5>User and Market Risks</h5>
            <ul>
                <li><strong>Loss Due to User Error:</strong> Risk of losing pREWA tokens or rewards due to user error, such as sending tokens to an incorrect address, errors in transaction inputs, or compromise of the user's wallet security (e.g., loss of private keys)</li>
                <li><strong>pREWA Token Volatility:</strong> The value of pREWA tokens (both staked principal and rewards) can fluctuate significantly due to market conditions. The fiat currency value of your staked assets and rewards is not guaranteed and can decrease</li>
                <li><strong>Gas Fee Volatility:</strong> BNB gas fees required for transactions can fluctuate dramatically, affecting the cost of staking operations</li>
            </ul>

            <h5>Program and Regulatory Risks</h5>
            <ul>
                <li><strong>Uncertainty of Rewards:</strong> The amount of rewards earned is not guaranteed and can vary. Any displayed APY is an estimate and subject to change</li>
                <li><strong>Early Unstaking Penalties:</strong> If applicable as per the parameters displayed on the Staking Platform, unstaking pREWA before the end of a designated lock-up period may result in a penalty, leading to forfeiture of a portion of the staked amount or accrued rewards</li>
                <li><strong>Impermanence of Staking Program:</strong> The Staking Program may not operate indefinitely (see Section 8)</li>
                <li><strong>Regulatory Risks:</strong> Changes in the regulatory environment could impact the Staking Program or the pREWA token</li>
            </ul>

            <h5>6. Bridge to REWA Token</h5>
            <p>
                Dugong intends for the Dharitri Project to provide a mechanism to bridge pREWA tokens to the native REWA token upon the launch of the Dharitri mainnet. Bridge activation requires successful mainnet launch and applicable regulatory compliance. This plan is highly speculative and not guaranteed.
            </p>
            <p>
                In the event of such a bridge, any active pREWA stakes within this Staking Program will be automatically concluded by Dugong or the smart contract logic prior to the bridging event. Staked pREWA tokens, along with any accrued and claimable pREWA rewards up to that point (subject to these Staking Terms, including any applicable lock-ups or penalties if conclusion is due to your action prior to a program-wide event), will be made available to the user to facilitate their participation in the bridging process to REWA.
            </p>
            <p>
                <strong>User Choice:</strong> Users will retain the right to opt-out of any future migration to REWA tokens and may choose to maintain their pREWA tokens instead.
            </p>
            <p>
                The staking of native REWA tokens on the future Dharitri mainnet will be an entirely separate process, governed by new staking terms and conditions specific to that mainnet and its functionalities, which you will need to review and agree to if you choose to participate.
            </p>

            <h5>7. Tax Obligations and Regulatory Compliance</h5>
            <h5>Global Tax Responsibilities</h5>
            <p>
                You are solely responsible for reporting staking rewards to your local tax authorities and complying with applicable tax laws. Staking rewards may constitute taxable income in your jurisdiction. Tax obligations may include but are not limited to:
            </p>
            <ul>
                <li>Reporting staking rewards as income when received</li>
                <li>Calculating and paying applicable income taxes</li>
                <li>Maintaining records of staking activities for tax purposes</li>
                <li>Complying with any cryptocurrency reporting requirements</li>
            </ul>
            <p>
                <strong>Important:</strong> Tax laws regarding cryptocurrency staking vary significantly by jurisdiction and are subject to change. Consult qualified tax professionals familiar with cryptocurrency taxation in your country.
            </p>

            <h5>Kenya-Specific Tax Notice</h5>
            <p>
                Under Kenyan tax law, staking rewards may be classified as taxable income subject to Kenya Revenue Authority (KRA) requirements. Kenyan residents should consult KRA guidelines and qualified tax advisors for specific reporting obligations.
            </p>

            <h5>Regulatory Environment</h5>
            <p>
                Cryptocurrency staking programs may be subject to evolving regulations in your jurisdiction. Regulatory changes could affect the legality, taxation, or operation of staking activities. Users are responsible for understanding and complying with all applicable laws and regulations.
            </p>

            <h5>8. Dugong's Rights and Responsibilities</h5>
            <h5>Modifications</h5>
            <p>
                Dugong reserves the right to modify, suspend, or terminate the Staking Program, or to change any of its Operational Parameters (including, but not limited to, how APY is calculated or sourced, rules for lock-up periods, minimum staking amounts, and penalty structures) or these Staking Terms, at its sole discretion. Notice of material changes will generally be provided via the Staking Platform, the main Dharitri Project Website ([YourWebsiteAddress.com]), or official Dharitri Project social media channels. Your continued participation in the Staking Program following any such changes constitutes your acceptance of the modified terms and parameters.
            </p>

            <h5>Operational Integrity</h5>
            <p>
                Dugong will use reasonable commercial efforts to maintain the operational integrity and security of the Staking Platform and the underlying staking smart contracts.
            </p>

            <h5>Communication</h5>
            <p>
                Dugong will endeavor to communicate significant known technical issues, planned maintenance, or material changes to the Staking Program that may reasonably be expected to affect users.
            </p>

            <h5>No Fiduciary Duty</h5>
            <p>
                Dugong does not have any fiduciary duty or obligation to users beyond those expressly stated in these Staking Terms. Dugong is not your broker, intermediary, agent, or advisor.
            </p>

            <h5>9. Suspension or Termination of the Staking Program</h5>
            <p>
                Dugong reserves the right to suspend (e.g., for security investigations, addressing critical bugs or vulnerabilities) or terminate the pREWA Staking Program entirely (e.g., in anticipation of the REWA mainnet launch, for significant security reasons, due to regulatory changes, or for other operational or strategic reasons) at its sole discretion.
            </p>
            <p>
                In the event of a suspension or termination of the Staking Program initiated by Dugong, procedures for Users to reclaim their principal staked pREWA tokens and any accrued, unpaid, and claimable rewards (subject to the terms prevailing at the time, such as any applicable lock-up conditions not yet met if termination is due to user action rather than program-wide termination) will be communicated via official channels. Dugong will aim to provide a reasonable period and mechanism for Users to withdraw their assets, where feasible, secure, and compliant with any applicable laws or regulations.
            </p>

            <h5>10. Data and Privacy</h5>
            <p>
                When you connect your BEP20 compatible wallet to the Staking Platform and participate in the Staking Program, the primary data involved is your public wallet address and the transaction data associated with your staking activities (e.g., amounts staked, unstaked, rewards claimed). This transaction data is publicly recorded and viewable on the Binance Smart Chain.
            </p>
            <p>
                The Staking Platform (stake.dharitri.org) itself will not collect or store additional Personal Identifiable Information (PII) from you beyond what is technically necessary to interact with your wallet for the staking functions (such as displaying your connected wallet address and related staking information fetched from the blockchain or smart contract).
            </p>
            <p>
                For information on how general website visitor data (e.g., analytics, cookies) for the stake.dharitri.org domain is handled, please refer to the main Dharitri Project Privacy Policy [Link to Privacy Policy].
            </p>

            <h5>11. No Financial Advice</h5>
            <p>
                All information provided on the Staking Platform, the main Dharitri Project Website, or in any communications related to the Staking Program is for informational purposes only. Such information does not constitute financial advice, investment advice, trading advice, or any other sort of advice, and you should not treat any of the Staking Platform's content as such. Dugong does not recommend that any cryptocurrency should be bought, sold, or held by you, nor does it recommend participation in this Staking Program. You participate in the Staking Program entirely at your own risk. You should conduct your own due diligence and consult with independent financial, legal, and tax advisors before making any decision to stake your pREWA tokens.
            </p>

            <h5>12. Limitation of Liability & Disclaimer of Warranties</h5>
            <p>
                The Staking Program and the Staking Platform are provided on an "AS IS" and "AS AVAILABLE" basis. Dugong disclaims all warranties, express or implied, regarding the Staking Program, the Staking Platform, and the staking smart contract(s), including but not limited to warranties of merchantability, fitness for a particular purpose, security, and non-infringement.
            </p>
            <p>
                To the fullest extent permitted by applicable law, Dugong Global Services Pvt Ltd, its affiliates, directors, officers, employees, agents, and suppliers shall not be liable for any direct, indirect, incidental, special, consequential, exemplary, or punitive damages, including but not limited to loss of profits, loss of data, loss of use, loss of goodwill, or other intangible losses, resulting from (i) your access to or use of, or inability to access or use, the Staking Program or Staking Platform; (ii) any conduct or content of any third party related to the Staking Program; (iii) any content or information obtained from the Staking Program or Staking Platform; (iv) any interaction with the staking smart contract(s); and (v) unauthorized access, use, or alteration of your transmissions or content, whether based on warranty, contract, tort (including negligence), or any other legal theory, whether or not we have been informed of the possibility of such damage, and even if a remedy set forth herein is found to have failed of its essential purpose.
            </p>

            <h5>13. Governing Law and Dispute Resolution</h5>
            <h5>Governing Law</h5>
            <p>
                These Staking Terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions.
            </p>

            <h5>Dispute Resolution</h5>
            <p>
                Any dispute, claim, or controversy arising out of or relating to these Staking Terms or the breach, termination, enforcement, interpretation, or validity thereof, including the determination of the scope or applicability of this agreement to arbitrate, shall be resolved through binding arbitration administered by the International Chamber of Commerce (ICC) in Hyderabad, India, in accordance with the ICC Arbitration Rules then in effect. The arbitration shall be conducted in English, and the arbitral award shall be final and binding upon the parties. You waive any and all objections to arbitration under these terms and agree that judgment upon the arbitral award may be entered in any court having jurisdiction thereof.
            </p>

            <h5>14. Glossary</h5>
            <p>
                For clarity, the following terms are defined:
            </p>
            <ul>
                <li><strong>APY (Annual Percentage Yield):</strong> The estimated annual rate of return on staked tokens, expressed as a percentage</li>
                <li><strong>BEP20:</strong> A token standard on the Binance Smart Chain compatible with Ethereum's ERC-20 standard</li>
                <li><strong>Gas Fees:</strong> Transaction fees paid in BNB to execute operations on the Binance Smart Chain</li>
                <li><strong>Lock-up Period:</strong> A specified time during which staked tokens cannot be withdrawn</li>
                <li><strong>MEV (Maximal Extractable Value):</strong> Profit that miners/validators can extract by reordering, including, or excluding transactions</li>
                <li><strong>Smart Contract:</strong> Self-executing code deployed on a blockchain that automatically enforces agreement terms</li>
                <li><strong>Slashing:</strong> Penalty mechanism that reduces staked tokens for rule violations (where applicable)</li>
            </ul>

            <h5>15. Miscellaneous</h5>
            <h5>Entire Agreement</h5>
            <p>
                These Staking Terms, along with the Main Dharitri Project Terms of Service and Privacy Policy referenced herein, constitute the entire agreement between you and Dugong regarding your participation in the Staking Program. In case of any conflict between these Staking Terms and the Main ToS with respect to the Staking Program, these Staking Terms shall prevail.
            </p>

            <h5>Severability</h5>
            <p>
                If any provision of these Staking Terms is held to be invalid or unenforceable by a court of competent jurisdiction, such provision shall be struck and the remaining provisions shall be enforced to the fullest extent under law.
            </p>

            <h5>Waiver</h5>
            <p>
                The failure of Dugong to enforce any right or provision of these Staking Terms will not be considered a waiver of those rights or any other rights.
            </p>

            <h5>Assignment</h5>
            <p>
                You may not assign your rights or obligations under these Staking Terms without the prior written consent of Dugong. Dugong may assign its rights and obligations under these Staking Terms without restriction, including in connection with any future assignment of the Dharitri Project operations to the Dharitri Foundation (once legally established) or another designated entity.
            </p>

            <h5>Contact Information</h5>
            <p>
                For questions regarding these Staking Terms or the pREWA Staking Program, please contact Dugong Global Services Pvt Ltd:
            </p>
            <p>
                <strong>Email:</strong> legal@dharitri.org<br />
                <strong>For urgent smart contract issues:</strong> emergency@dharitri.org
            </p>
            <p>
                Additional contact methods are available on the stake.dharitri.org Staking Platform and the main Dharitri Project Website ([YourWebsiteAddress.com]).
            </p>
        </LegalDocumentTemplate>
    );
};

export default PREWAStakingTerms;
