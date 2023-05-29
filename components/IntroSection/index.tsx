import React from "react";
import Image from "next/image";
import {
  Box,
  Divider,
  Flex,
  Heading,
  Icon,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Text,
  VStack,
  useMediaQuery,
} from "@chakra-ui/react";
import { FiInfo } from "react-icons/fi";

interface Props {}

const IntroSection: React.FC<Props> = () => {
  const [isMobileOrTablet] = useMediaQuery("(max-width: 860px)");

  return (
    <Flex
      id="intro-section"
      px={["1em", "2em"]}
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
            maxW={["none", "none", "500px"]}
            spacing={6}
            zIndex={[0, 0, 99]}
            fontSize="1em"
          >
            <Text>
              Hello, and thanks for visiting my personal website! I made this
              site to showcase the things I am interested in (both tech-related
              and otherwise) and hopefully serve as a reference for others who
              feel their path towards software development is weird or
              non-conventional.
            </Text>

            <Text>
              As a software engineer, I&apos;m interested in building intuitive
              geospatial tools on the web. I know from experience that aerial
              imagery and spatial data can be hugely beneficial, but many of the
              current tools out there are too complicated. I want to change
              that.
            </Text>

            <Text>
              Software is a means to an end, and for much of my career the cause
              that I thought most in need attention was the ongoing pressures
              faced by conservationists and the wildlife they protect. I still
              do, but I also think that geospatial technology and has a big role
              to play in our transition towards more sustainable energy and food
              systems. I hope to be a part of this transformation.
            </Text>
            <Text>
              Here are some of the technologies I regularly use: Python,
              PyTorch, JavaScript, TypeScript, Next.js, React, GDAL, Mapbox, AWS
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
                  In the summer of 2013 I finished an anti-poaching training
                  program in South Africa after a final 50 kilometer trek
                  through the bush.
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

export default IntroSection;
