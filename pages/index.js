import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Publication from "@/components/Publication";

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Publication />
    </div>
  );
};

export default Home;
