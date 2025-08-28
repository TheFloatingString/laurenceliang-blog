import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  const meta = {
    title: "Laurence Liang",
    description: "Essays and projects",
    // image: "https://assets.vercel.com/image/upload/q_auto/front/vercel/dps.png",
  };

  return (
    <Html lang="en">
      <Head>
        <meta name="robots" content="follow, index" />
        <meta name="description" content={meta.description} />
        <meta property="og:site_name" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@yourname" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
      </Head>
      <body onLoad={() => window.location.href = 'https://laurenceliang.github.io'}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
