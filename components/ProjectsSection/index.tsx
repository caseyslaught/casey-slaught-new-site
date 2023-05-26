import React from "react";
import NextImage from "next/image";

import {
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
} from "@chakra-ui/react";
import { FiExternalLink, FiGithub } from "react-icons/fi";

interface Props {}

const ProjectsSection: React.FC<Props> = () => {
  return (
    <Flex
      id="projects-section"
      px={["1em", "2em"]}
      justify="flex-start"
      align="flex-start"
      pb={["60px", "120px"]}
      zIndex={9}
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

        <VStack w="100%" spacing={[8, 12, 24]}>
          {projects.map((project, i) => (
            <ProjectItem
              key={project.title}
              {...project}
              direction={i % 2 == 0 ? "ltor" : "rtol"}
            />
          ))}
        </VStack>
      </Flex>
    </Flex>
  );
};

interface ItemProps {
  direction: "ltor" | "rtol";
  title: string;
  description: string;
  tech: string[];
  github: string;
  demo: string;
  image: string;
}

const ProjectItem: React.FC<ItemProps> = ({
  direction,
  title,
  description,
  tech,
  github,
  demo,
  image,
}) => {
  const [isMobileOrTablet] = useMediaQuery("(max-width: 860px)");

  return (
    <Flex
      h={["520px", "500px", "480px"]}
      w="100%"
      mt="40px"
      align="center"
      justify={
        direction === "ltor" || isMobileOrTablet ? "flex-start" : "flex-end"
      }
      position="relative"
    >
      <VStack
        w="100%"
        maxW="480px"
        align={
          direction === "ltor" || isMobileOrTablet ? "flex-start" : "flex-end"
        }
        mt={["10px", "40px"]}
        px={["10px", "24px", "10px"]}
        spacing={4}
        zIndex={999}
      >
        <Heading fontSize="xl">{title}</Heading>
        <Flex
          bg="secondary.200"
          color="primary.700"
          p="1em"
          borderRadius="md"
          shadow="md"
        >
          {description}
        </Flex>

        <UnorderedList
          display="flex"
          flexWrap="wrap"
          position="relative"
          styleType="none"
          px="2px"
        >
          {tech.map((t) => (
            <ListItem key={t} me="10px">
              {t}
            </ListItem>
          ))}
        </UnorderedList>

        <HStack spacing={4}>
          {github && (
            <Link href={github} target="_blank">
              <Icon as={FiGithub} fontSize="1.8em" color="secondary.200" />
            </Link>
          )}
          {demo && (
            <Link href={demo} target="_blank">
              <Icon
                as={FiExternalLink}
                fontSize="1.8em"
                color="secondary.200"
              />
            </Link>
          )}
        </HStack>
      </VStack>
      <Flex
        w={["100%", "100%", "640px"]}
        h={["520px", "500px", "480px"]}
        bg="primary.700"
        position="absolute"
        left={direction === "rtol" ? "0" : "auto"}
        right={direction === "ltor" ? "0" : "auto"}
        zIndex={0}
        overflow="hidden"
        borderRadius="md"
      >
        <Link href={demo} target="_blank">
          <NextImage
            className="project-image"
            fill={true}
            src={image}
            alt="project screenshot"
            style={{
              objectFit: "cover",
              filter: "blur(1px)",
            }}
          />
        </Link>
      </Flex>
    </Flex>
  );
};

interface ProjectItemType {
  title: string;
  description: string;
  tech: string[];
  github: string;
  demo: string;
  image: string;
}

const projects: ProjectItemType[] = [
  {
    title: "Smart Carte",
    description:
      "I am currently working on a cloud-based remote sensing tool to help protected areas understand deforestation and burned areas. Current remote sensing tools require too much expertise for parks to invest in. This tool makes it really simple to understand forests and grasslands and direct staff to hotspots.",
    tech: ["Python", "NN/ML", "React", "GDAL", "Mapbox", "Django", "AWS"],
    github: "https://github.com/caseyslaught/smartcarte-containers",
    demo: "https://smartcarte.earth/demo/halmahera-nickel-apr-2023",
    image: "/images/smartcarte.png",
  },
  {
    title: "SimpleDroneMaps",
    description:
      "I am currently working on a cloud-based remote sensing tool to help protected areas understand deforestation and burned areas. Current remote sensing tools require too much expertise for parks to invest in. This tool makes it really simple to understand forests and grasslands and direct staff to hotspots.",
    tech: ["Python", "GDAL", "React", "Mapbox", "Django", "AWS"],
    github: "",
    demo: "https://simpledronemaps.com",
    image: "/images/simpledronemaps.png",
  },
  {
    title: "Virunga LoRa Alert System",
    description:
      "This system helps communities report sightings of dangerous rebel groups in the region as well as helping the park to track vehicles and personnel. I designed the LoRa antenna network and built the software that makes use of the position data.",
    tech: ["LoRaWAN", "Chirpstack", "Python", "React", "AWS"],
    github: "https://github.com/virunga/lora-alert-app",
    demo: "",
    image: "/images/loraalertsystem.png",
  },
  {
    title: "Allergood",
    description:
      "I worked as a software engineer and UI designer for Allergood, a startup that helps people with food allergies find safe restaurants. I built the Next.js web application which features a Stripe integration for payments.",
    tech: ["Next.js", "React", "Stripe"],
    github: "",
    demo: "https://allergood.com",
    image: "/images/allergood.png",
  },
];

export default ProjectsSection;
