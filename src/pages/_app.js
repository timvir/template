import * as React from "react";
import "@timvir/core/styles.css";
import "@timvir/blocks/styles.css";

export default ({ Component, pageProps }) => (
  <>
    <style jsx global>{`
      body {
        margin: 0;
        box-sizing: border-box;
      }

      *,
      *:before,
      *:after {
        box-sizing: inherit;
      }
    `}</style>

    <Component {...pageProps} />
  </>
);
