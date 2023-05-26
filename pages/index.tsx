import Head from "next/head";
import { Divider, Flex, Heading, Text, VStack } from "@chakra-ui/react";

import MainLayout from "../layouts/main";
import HeroSection from "../components/HeroSection";
import IntroSection from "../components/IntroSection";
import ExperienceSection from "../components/ExperienceSection";
import ProjectsSection from "../components/ProjectsSection";

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

const ContactSection = () => {
  return (
    <Flex
      id="contact-section"
      px={["1em", "1em", "2em"]}
      justify="flex-start"
      align="flex-start"
      pb={["60px", "120px"]}
    >
      <Flex
        direction="column"
        align="flex-start"
        w="100%"
        maxW="1080px"
        m="0 auto"
        color="gray.50"
        mb="40px"
      >
        <VStack w={["100%", "100%", "360px"]} align="flex-start" mb="20px">
          <Heading fontSize={["xl", "2xl"]}>✉️ Contact</Heading>
          <Divider />
        </VStack>
      </Flex>
    </Flex>
  );
};
