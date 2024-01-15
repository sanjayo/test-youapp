import "@/styles/globals.css";

import { useAuth } from "@/utils/auth";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const { isAuthenticated } = useAuth();
  const currentUrl = router.asPath;
  // if (!isAuthenticated) {
  //   router.push("/login");
  // }
  return <Component {...pageProps} />;
}
