// utils/auth.js

import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export const useAuth = () => {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem("token");
      const currentUrl = router.asPath;

      try {
        if (!token && router.pathname.includes("/profile")) {
          router.push("/login");
          setIsAuthenticated(false);
          return;
        } else if (
          token &&
          (router.pathname.includes("/login") ||
            router.pathname.includes("/register"))
        ) {
          router.push("/profile");
          setIsAuthenticated(true);
        }
      } catch (error) {
        router.push("/login");
      }
    };

    checkAuth();
  }, []);
  console.log("isAuthenticated", isAuthenticated);
  return {
    isAuthenticated: isAuthenticated,
  };
};
