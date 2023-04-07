import React from "react";
import { useRouter } from "next/router";
import Footer from "../Footer";
import Header from "../Header";
import { Lato } from "next/font/google";

export const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});
const Layout = ({ children }) => {
  const { pathname } = useRouter();
  const isGameMode = pathname !== "/";
  console.log(pathname);
  return (
    <>
      {isGameMode && <Header />}
      <main
        className={`${lato.className} flex flex-col items-center justify-center w-full h-full`}
      >
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
