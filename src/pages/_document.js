import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Mobile Specific Meta */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {/* Favicon*/}
        <link rel="shortcut icon" href="assets/img/fav.png" />
        {/* Author Meta */}
        <meta name="author" content="CodePixar" />
        {/* Meta Description */}
        <meta name="description" content="" />
        {/* Meta Keyword */}
        <meta name="keywords" content="" />
        {/* meta character set */}
        <meta charSet="UTF-8" />
        {/* Site Title */}
        <title>Karma Shop</title>
        {/*
		CSS
		============================================= */}
        <link rel="stylesheet" href="assets/css/linearicons.css" />
        <link rel="stylesheet" href="assets/css/font-awesome.min.css" />
        <link rel="stylesheet" href="assets/css/themify-icons.css" />
        <link rel="stylesheet" href="assets/css/bootstrap.css" />
        <link rel="stylesheet" href="assets/css/owl.carousel.css" />
        <link rel="stylesheet" href="assets/css/nice-select.css" />
        <link rel="stylesheet" href="assets/css/nouislider.min.css" />
        <link rel="stylesheet" href="assets/css/ion.rangeSlider.css" />
        <link rel="stylesheet" href="assets/css/ion.rangeSlider.skinFlat.css" />
        <link rel="stylesheet" href="assets/css/magnific-popup.css" />
        <link rel="stylesheet" href="assets/css/main.css" />
      </Head>
      <body>
        <Main />
        <NextScript src="assets/js/vendor/jquery-2.2.4.min.js"/>

      </body>
    </Html>
  );
}
