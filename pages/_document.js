import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="Edwin De Jong — Lead DevOps Engineer at Kongsberg Discovery, game developer behind Ugaris MMORPG, and homelab architect."
          />
          <meta
            name="keywords"
            content="DevOps, Cloud Engineering, SRE, Edwin De Jong, Norway, Ugaris, MMORPG, Game Development, Kubernetes, Terraform, Homelab"
          />

          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <script
            dangerouslySetInnerHTML={{
              __html: `
              (function() {
                var savedTheme = localStorage.getItem('theme');
                if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark-mode');
                }
              })();
            `,
            }}
          />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;