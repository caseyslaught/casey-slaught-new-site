import React from "react";
import { Flex, Skeleton, Text, VStack } from "@chakra-ui/react";

interface Props {
  isLoaded: boolean;
}

const HeroSection: React.FC<Props> = ({ isLoaded }) => {
  return (
    <Flex
      id="hero-section"
      px={["1em", "2em"]}
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
          <Skeleton isLoaded={isLoaded} fadeDuration={2}>
            <Text>Hey there,</Text>
          </Skeleton>
          <Skeleton isLoaded={isLoaded} fadeDuration={2}>
            <Text>
              My name is{" "}
              <Text as="span" color="accent.500">
                Casey Slaught
              </Text>
              .
            </Text>
          </Skeleton>
          <Skeleton isLoaded={isLoaded} fadeDuration={2}>
            <Text>I build web-based geospatial applications.</Text>{" "}
          </Skeleton>
          <Skeleton isLoaded={isLoaded} fadeDuration={2}>
            <Text>
              I am passionate about building tools that help people make better
              decisions about ecosystems and natural resources.
            </Text>
          </Skeleton>
        </VStack>
      </Flex>
    </Flex>
  );
};

export default HeroSection;
