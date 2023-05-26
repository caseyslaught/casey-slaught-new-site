import React, { useState } from "react";
import Head from "next/head";

import MainLayout from "../layouts/main";
import HeroSection from "../components/HeroSection";
import IntroSection from "../components/IntroSection";
import ExperienceSection from "../components/ExperienceSection";
import ProjectsSection from "../components/ProjectsSection";
import ContactSection from "../components/ContactSection";
import { useEffect } from "react";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 2400);
  }, []);

  return (
    <MainLayout isLoaded={isLoaded}>
      <Head>
        <title>Casey Slaught</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <HeroSection isLoaded={isLoaded} />
      {isLoaded && (
        <>
          <IntroSection />
          <ExperienceSection />
          <ProjectsSection />
          <ContactSection />
        </>
      )}
    </MainLayout>
  );
}
