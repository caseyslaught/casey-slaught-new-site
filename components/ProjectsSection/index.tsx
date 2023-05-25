import React from "react";
import NextImage from "next/image";
import NextLink from "next/link";

import {
  Box,
  Divider,
  Flex,
  HStack,
  Heading,
  Icon,
  ListItem,
  Link,
  UnorderedList,
  VStack,
  useMediaQuery,
  Img,
} from "@chakra-ui/react";
import { FiExternalLink, FiGithub } from "react-icons/fi";

interface Props {}

const ProjectsSection: React.FC<Props> = () => {
  const [isMobileOrTablet] = useMediaQuery("(min-width: 860px)");

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

        <VStack w="100%">
          <Flex w="100%" justify="flex-start" position="relative">
            <VStack
              w="100%"
              maxW="480px"
              align="flex-start"
              mt={["10px", "40px"]}
              px="10px"
              spacing={4}
              zIndex={999}
            >
              <Heading fontSize="xl">Smart Carte</Heading>
              <Flex
                bg="secondary.200"
                color="primary.700"
                p="1em"
                borderRadius="md"
              >
                I am currently working on a cloud-based remote sensing tool to
                help protected areas understand deforestation and burned areas.
                Current remote sensing tools require too much expertise for
                parks to invest in. This tool makes it really simple to
                understand forests and grasslands and direct staff to hotspots.
              </Flex>

              <UnorderedList
                display="flex"
                flexWrap="wrap"
                position="relative"
                styleType="none"
                px="2px"
              >
                <ListItem me="10px">Python</ListItem>
                <ListItem me="10px">NN/ML</ListItem>
                <ListItem me="10px">React</ListItem>
                <ListItem me="10px">Mapbox</ListItem>
                <ListItem me="10px">Django</ListItem>
                <ListItem me="10px">AWS</ListItem>
              </UnorderedList>

              <HStack spacing={4}>
                <Link
                  href="https://github.com/caseyslaught/smartcarte-containers"
                  target="_blank"
                >
                  <Icon as={FiGithub} fontSize="1.8em" color="secondary.200" />
                </Link>

                <Link
                  href="https://smartcarte.earth/demo/halmahera-nickel-apr-2023"
                  target="_blank"
                >
                  <Icon
                    as={FiExternalLink}
                    fontSize="1.8em"
                    color="secondary.200"
                  />
                </Link>
              </HStack>
            </VStack>
            <Flex
              w={["100%", "100%", "640px"]}
              h="480px"
              bg="primary.700"
              position="absolute"
              right={0}
              zIndex={0}
              overflow="hidden"
              borderRadius="md"
            >
              <NextImage
                className="project-image"
                fill={true}
                src="/images/smart_carte.png"
                alt="Smart Carte screenshot"
                style={{
                  objectFit: "cover",
                  filter: "blur(1px)",
                }}
              />
            </Flex>
          </Flex>
        </VStack>
      </Flex>
    </Flex>
  );
};

export default ProjectsSection;
