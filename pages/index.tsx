import Head from "next/head";
import Image from "next/image";
import {
  Box,
  Circle,
  Divider,
  Flex,
  HStack,
  Heading,
  Icon,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Stack,
  Text,
  VStack,
  useMediaQuery,
} from "@chakra-ui/react";
import { FiInfo } from "react-icons/fi";

import MainLayout from "../layouts/main";

export default function Home() {
  return (
    <MainLayout>
      <Head>
        <title>Casey Slaught</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeroSection />
      <IntroSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
    </MainLayout>
  );
}

const IntroSection = () => {
  const [isMobileOrTablet] = useMediaQuery("(max-width: 860px)");

  return (
    <Flex
      id="intro-section"
      px={["1em", "1em", "2em"]}
      justify="flex-start"
      align="flex-start"
      minH="calc(100vh)"
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
          <Heading fontSize={["xl", "2xl"]}>👋 Intro</Heading>
          <Divider />
        </VStack>
        <Flex
          position="relative"
          w="100%"
          align="center"
          justify="space-between"
          direction={["column", "column", "row"]}
        >
          <VStack
            align="flex-start"
            justify="center"
            w="100%"
            maxW="500px"
            spacing={6}
            zIndex={[0, 0, 99]}
            fontSize="0.9em"
          >
            <Text>
              Hello, and thanks for visiting my personal website! I made this
              site to showcase the things I am interested in (both tech-related
              and otherwise) and hopefully serve a marker to others who feel
              like they have an unconventional background as a software
              developer.
            </Text>
            <Text>
              Software is a means to an end and since 2013 the end that I
              thought most in need attention was the ongoing pressures faced by
              conservationists and the wildlife they protect.
            </Text>
            <Text>
              Aenean sed adipiscing diam donec adipiscing tristique risus nec.
              Lectus sit amet est placerat in egestas erat imperdiet. Tortor
              posuere ac ut consequat semper viverra nam. In pellentesque massa
              placerat duis ultricies lacus sed turpis. Id cursus metus aliquam
              eleifend.
            </Text>
            <Text>
              Aenean sed adipiscing diam donec adipiscing tristique risus nec.
              Lectus sit amet est placerat in egestas erat imperdiet. Tortor
              posuere ac ut consequat semper viverra nam. In pellentesque massa
              placerat duis ultricies lacus sed turpis. Id cursus metus aliquam
              eleifend.
            </Text>
          </VStack>
          <Box
            position={["relative", "relative", "absolute"]}
            right="0px"
            mt={["40px", "40px", "0px"]}
            zIndex={9}
          >
            <Popover
              placement={isMobileOrTablet ? "top-end" : "top-end"}
              trigger="hover"
            >
              <PopoverTrigger>
                <Box position="absolute" top="-10px" right="-6px">
                  <Icon
                    as={FiInfo}
                    color="primary.800"
                    fill="accent.500"
                    fontSize={["2em", "1.8em", "1.5em"]}
                  />
                </Box>
              </PopoverTrigger>
              <PopoverContent
                bg="secondary.200"
                color="primary.800"
                fontSize="1em"
                maxW="280px"
                right={["-2px", "-6px"]}
              >
                <PopoverArrow bg="secondary.200" ms={["-2px", "-6px"]} />
                <PopoverHeader fontWeight="bold" fontSize="0.8em">
                  What&apos;s going on here?
                </PopoverHeader>
                <PopoverBody fontSize="0.8em">
                  I just finished an anti-poaching training program in South
                  Africa after a final 50 kilometer trek through the bush.
                </PopoverBody>
              </PopoverContent>
            </Popover>

            <Box overflow="hidden" borderRadius="md">
              <Image
                src="/images/me.jpg"
                alt="Picture of the author"
                width={340}
                height={340}
              />
            </Box>
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
};

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

const ExperienceSection = () => {
  return (
    <Flex
      id="experience-section"
      px={["1em", "1em", "2em"]}
      justify="flex-start"
      align="flex-start"
      minH="calc(100vh)"
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
          <Heading fontSize={["xl", "2xl"]}>🧑‍💻 Experience</Heading>
          <Divider />
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
      minH="calc(100vh)"
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
      minH="calc(100vh)"
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
