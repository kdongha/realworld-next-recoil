import React from 'react';
import Document, {DocumentContext, Html, Head, Main, NextScript} from 'next/document'
import Header from "../components/modules/Header";

class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const initialProps = await Document.getInitialProps(ctx)
        return {...initialProps}
    }

    render() {
        return (
            <Html>
                <Head>
                    <link rel="stylesheet" href="//demo.productionready.io/main.css"/>
                </Head>
                <body>
                <Main/>
                <NextScript/>
                </body>
            </Html>
        )
    }
}

export default MyDocument