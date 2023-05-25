import Head from "next/head";
import { Divider, Flex, Heading, Text, VStack } from "@chakra-ui/react";

import MainLayout from "../layouts/main";
import IntroSection from "../components/IntroSection";
import ExperienceSection from "../components/ExperienceSection";

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

const HeroSection = () => {
  return (
    <Flex
      id="hero-section"
      px={["1em", "1em", "2em"]}
      justify="flex-start"
      align="center"
      h="calc(100vh - 80px)"
    >
      <Flex
        align="flex-start"
        w="100%"
        maxW="1080px"
        m="0 auto"
        color="gray.50"
        mb="40px"
      >
        <VStack spacing={6} maxW="560px" align="flex-start">
          <Text>Hey there,</Text>
          <Text>
            My name is{" "}
            <Text as="span" color="accent.500">
              Casey Slaught
            </Text>
            .
          </Text>
          <Text>I build geospatial applications on the web.</Text>
          <Text>
            I&apos;m a full-stack developer focused on building
            geospatial-driven applications that have a meaningful environmental
            impact. I recently earned a Masters in Environmental Management
            degree from Duke University. I also oversee a couple technology
            projects at Virunga National Park in the Democratic Republic of the
            Congo.
          </Text>
        </VStack>
      </Flex>
    </Flex>
  );
};

const ProjectsSection = () => {
  return (
    <Flex
      id="projects-section"
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
          <Heading fontSize={["xl", "2xl"]}>🏗️ Projects</Heading>
          <Divider />
        </VStack>
      </Flex>
    </Flex>
  );
};

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
