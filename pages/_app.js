import {RecoilRoot} from 'recoil'
import Header from "../components/modules/Header";
import Footer from "../components/modules/Footer";

function MyApp({Component, pageProps}) {
    return (
        <RecoilRoot>
            <Header />
            <Component {...pageProps} />
            <Footer />
        </RecoilRoot>);
}

export default MyApp
