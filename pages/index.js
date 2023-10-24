import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
    </div>
  );
};

export default Home;
