import Head from "next/head";
import App from "../components/App";


export default function index() {
    return <>
        <Head>
            <title>Test app</title>
            <meta charSet="utf-8"/>
        </Head>
        <App/>
    </>
}