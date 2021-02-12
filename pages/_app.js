import {RecoilRoot} from 'recoil'
import Header from "../components/modules/Header";

function MyApp({Component, pageProps}) {
    return (
        <RecoilRoot>
            <Header />
            <Component {...pageProps} />
        </RecoilRoot>);
}

export default MyApp
