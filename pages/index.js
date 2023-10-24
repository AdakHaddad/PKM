import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Anggota from "@/components/anggota";

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Anggota />
    </div>
  );
};

export default Home;
