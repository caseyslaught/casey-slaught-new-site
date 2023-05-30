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
        <VStack
          w={["100%", "100%", "360px"]}
          align="flex-start"
          mb={["20px", "20px", "40px"]}
        >
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
        <Heading fontSize={["xl", "2xl"]}>{title}</Heading>
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
        {demo ? (
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
        ) : (
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
        )}
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
      "Web application that makes preparing cloud-free Sentinel-2 imagery and land cover classifications simple for non-technical users. Select a study area and date, then view or download an analysis-ready image. Uses semantic segmentation models to perform cloud detection and land cover classification. Run on AWS Fargate for highly scalable tasks.",
    tech: ["Python", "GDAL", "PyTorch", "Labelbox", "React", "Django", "AWS"],
    github: "https://github.com/caseyslaught/smartcarte-containers",
    demo: "https://smartcarte.earth/demo/halmahera-nickel-apr-2023",
    image: "/images/smartcarte.png",
  },
  {
    title: "SimpleDroneMaps",
    description:
      "Currently working on an aerial imagery management tool to help drone operators and researchers host orthomosaics, satellite imagery, and 3D models and share them easily with clients or colleagues. Visualization of very large assets is performed through map tiling and CDN setup with AWS S3 and CloudFront.",
    tech: ["Python", "GDAL", "Next.js", "TypeScript", "Django", "AWS"],
    github: "",
    demo: "https://simpledronemaps.com",
    image: "/images/simpledronemaps.png",
  },
  {
    title: "Virunga LoRa Alert System",
    description:
      "System that helps communities around Virunga National Park report sightings of dangerous rebel groups in real-time through LoRa alert buttons connected to a security dashboard and SMS service. Designed network infrastructure, configured LoRa devices and server, and built interface for viewing network of devices.",
    tech: ["Python", "LoRaWAN", "Chirpstack", "React", "AWS"],
    github: "https://github.com/virunga/lora-alert-app",
    demo: "",
    image: "/images/loraalertsystem.png",
  },
  {
    title: "Allergood",
    description:
      "Designed and built site for startup addressing dining issues for people with food allergies. Built Stripe and HubSpot integrations for waitlist signups as well as detailed Figma designs for fully featured app.",
    tech: ["Next.js", "Stripe", "HubSpot", "Figma"],
    github: "",
    demo: "https://allergood.com",
    image: "/images/allergood.png",
  },
];

export default ProjectsSection;
