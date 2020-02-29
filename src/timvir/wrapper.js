import { Page } from "@timvir/core";
import Link from "next/link";
import { useRouter } from "next/router";
import toc from "./toc";

export default ({ children }) => (
  <Page Link={Link} location={useRouter()} toc={toc}>
    {children}
  </Page>
);
