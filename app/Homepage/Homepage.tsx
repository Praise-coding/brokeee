import TradingViewChart from "../CryptoWidgets/Topwidget";
import CommonQuestions from './CommonQuestions';
import Footer from "./Footer";
import FutureBlockChain from "./FutureBlockChain";
import FutureBreakdown from "./FutureBreakdown";
import InnovatorsTrust from "./InnovatorsTrust";
import LandingPage from "./LandingPage";
import LeverageProducts from "./LeverageProducts";
import NavBar from "./NavBar";
import Partners from "./Partners";
import Revolutionary from "./Revolutionary";

export default function Homepage() {
    return (
        <main className="overflow-x-hidden">
            <TradingViewChart/>
            <NavBar/>
            <div className={"h-[1px] w-full border-b border-b-[#2E2E2E] "}>

            </div>
            <LandingPage/>
            <Partners/>
            <FutureBreakdown/>

            <LeverageProducts/>
            <FutureBlockChain/>
            <InnovatorsTrust/>


            <CommonQuestions/>
            <Revolutionary/>
            <Footer/>
        </main>
    )
}