import Head from "next/head";
import { Divider, Flex, Heading, Text, VStack } from "@chakra-ui/react";

import MainLayout from "../layouts/main";
import HeroSection from "../components/HeroSection";
import IntroSection from "../components/IntroSection";
import ExperienceSection from "../components/ExperienceSection";
import ProjectsSection from "../components/ProjectsSection";
import ContactSection from "../components/ContactSection";

export default function Home() {
  return (
    <MainLayout>
      <Head>
        <title>Casey Slaught</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <HeroSection />
      <IntroSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
    </MainLayout>
  );
}
