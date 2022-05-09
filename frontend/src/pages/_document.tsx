// pages/_document.js
import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="fi">
      <Head>
        {/* Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@200;300;400;600;700&display=swap"
          rel="stylesheet"
        />

        {/* SEO */}
        <meta name="theme-color" content="#23dd3e" />
        <meta charSet="utf-8" />
        <meta name="language" content="finnish" />

        <meta name="author" content="motimaa" />
        <meta name="designer" content="motimaa" />
        <meta name="publisher" content="motimaa" />

        <meta
          name="description"
          content="Yksi suomen suurimmista peliyhteisöistä."
        />
        <meta name="keywords" content="motimaa, minecraft, motimaanet" />

        <meta name="robots" content="index, follow" />
        <meta name="subject" content="minecraft" />

        {/* OpenGraph */}
        <meta
          property="og:site_name"
          content={`Yksi suurimmista peliyhteisöistä`}
        />
        <meta property="og:title" content="Motimaa.net" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://motimaa.net" />
        <meta
          property="og:description"
          content="Yksi suomen suurimmista peliyhteisöistä."
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
