import { Head, Html, Main, NextScript } from "next/document";

import { AppConfig } from "@/utils/AppConfig";

export default function Document() {
  return (
    <Html lang={AppConfig.locale}>
      <Head>{/* Import custom fonts here */}</Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
