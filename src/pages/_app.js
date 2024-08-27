import Layout from "@/components/layouts/Layout";
import "@/styles/globals.css";
import Head from "next/head";
import Script from "next/script";

export default function App({ Component, pageProps }) {
  return (
    <div>
      <Head />
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <Script src="assets/js/vendor/jquery-2.2.4.min.js"/>
	<Script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.11.0/umd/popper.min.js" integrity="sha384-b/U6ypiBEHpOf/4+1nzFpr53nxSS+GLCkfwBdFNTxtclqqenISfwAzpKaMNFNmj4"
	 crossorigin="anonymous"/>
	<Script src="assets/js/vendor/bootstrap.min.js"/>

    </div>
  );
}
