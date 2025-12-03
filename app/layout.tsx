import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import Script from "next/script";
import { ModalProvider } from "@/components/shared/ModalProvider";
import "./globals.css";

// Rubik font - Next.js optimized with automatic subsetting
const rubik = Rubik({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-rubik",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "Residential Structural Engineers | ProStruct Engineering",
  description:
    "Professional Structural Design And Permit Plans For Your New Home, Addition, Remodel, ADU, & More | Low Cost, High Speed, High Quality | Contact Us Today!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={rubik.variable}>
      <head>
        {/* Bootstrap CSS - Grid system only (container, row, col-*) */}
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
          crossOrigin="anonymous"
        />

        {/* WordPress CSS files - Load in correct order */}
        <link rel="stylesheet" href="/css/style.css" />
        <link rel="stylesheet" href="/css/header.css" />
        <link rel="stylesheet" href="/css/home-banner.css" />
        <link rel="stylesheet" href="/css/home-body.css" />
        <link rel="stylesheet" href="/css/footer.css" />
        <link rel="stylesheet" href="/css/about-body.css" />

        {/* DNS Prefetch & Preconnect for performance */}
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="preconnect" href="https://d2p078bqz5urf7.cloudfront.net" />
        <link rel="preconnect" href="https://www.clickcease.com" />
        <link rel="preconnect" href="https://cdn.jsdelivr.net" />
      </head>

      <body className={rubik.className}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NP5TBLL"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        {/* Modal Provider wraps content - Headless UI for modals */}
        <ModalProvider>{children}</ModalProvider>

        {/* 
          ===== Next.js Script Component =====
          Benefits:
          - Automatic loading strategies
          - Better performance
          - Prevents blocking
        */}

        {/* Google Tag Manager - beforeInteractive (critical) */}
        <Script
          id="gtm-script"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-NP5TBLL');
            `,
          }}
        />

        {/* Google Analytics - afterInteractive (better performance) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-61MTN3BM0P"
          strategy="afterInteractive"
        />
        <Script
          id="ga-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-61MTN3BM0P');
            `,
          }}
        />

        {/* EngageBay/ClickCease - lazyOnload (non-critical) */}
        <Script
          id="engagebay-script"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
              var EhAPI = EhAPI || {}; EhAPI.after_load = function(){
              EhAPI.set_account('3mr5akvphhvicl1lqjsl9iqqsm', 'prostructengineering');
              EhAPI.execute('rules');};(function(d,s,f) {
              var sc=document.createElement(s);sc.type='text/javascript';
              sc.async=true;sc.src=f;var m=document.getElementsByTagName(s)[0];
              m.parentNode.insertBefore(sc,m);
              })(document, 'script', '//d2p078bqz5urf7.cloudfront.net/jsapi/ehform.js?v' + new Date().getHours());
            `,
          }}
        />

        {/* FontAwesome - afterInteractive */}
        <Script
          src="https://kit.fontawesome.com/a4cea2dab2.js"
          strategy="afterInteractive"
          crossOrigin="anonymous"
        />

        {/* Note: No Bootstrap JS - Using Headless UI for modals/dialogs instead */}
      </body>
    </html>
  );
}
