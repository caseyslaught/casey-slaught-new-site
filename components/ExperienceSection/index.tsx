import React, { useState } from "react";
import {
  Divider,
  Flex,
  Heading,
  ListItem,
  Stack,
  Text,
  VStack,
  UnorderedList,
} from "@chakra-ui/react";

interface Props {}

const ExperienceSection: React.FC<Props> = () => {
  const [selectedJob, setSelectedJob] = useState("Virunga National Park");

  return (
    <Flex
      id="experience-section"
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
      >
        <VStack w={["100%", "100%", "360px"]} align="flex-start" mb="20px">
          <Heading fontSize={["xl", "2xl"]}>🧑‍💻 Experience</Heading>
          <Divider />
        </VStack>

        <Flex
          direction={["column", "column", "row"]}
          align="center"
          justify="flex-start"
          w="100%"
        >
          <Stack
            id="jobs-list"
            direction={["row", "row", "column"]}
            align={["center", "center", "flex-start"]}
            justify="flex-start"
            w={["calc(100vw - 12px)", "calc(100vw - 12px)", "100%"]}
            maxW={["none", "none", "480px"]}
            spacing={0}
            overflowX="scroll"
          >
            {Object.keys(jobs).map((job) => (
              <Flex
                key={job}
                bg={job === selectedJob ? "primary.600" : "primary.800"}
                px={["1em", "1em", "2em"]}
                py="1em"
                w={["auto", "auto", "268px"]}
                flex={1}
                justify={["center", "center", "flex-start"]}
                cursor="pointer"
                borderLeft={["none", "none", "2px solid"]}
                borderBottom={["2px solid", "2px solid", "none"]}
                borderColor={
                  job === selectedJob
                    ? "accent.500 !important"
                    : "secondary.200 !important"
                }
                onClick={() => setSelectedJob(job)}
                whiteSpace="nowrap"
              >
                {job}
              </Flex>
            ))}
          </Stack>

          <VStack
            align="flex-start"
            h={["auto", "auto", "360px"]}
            flex={["", "", 1]}
            w={["100%", "100%", "auto"]}
            maxW="560px"
            mt={["20px", "20px", "0px"]}
          >
            <Heading fontSize="lg" color="gray.100">
              {jobs[selectedJob].role}
            </Heading>
            <Text fontSize="sm" color="gray.200">
              {jobs[selectedJob].dateRange}
            </Text>
            <Text fontSize="sm" color="gray.400">
              {jobs[selectedJob].location}
            </Text>
            <UnorderedList
              spacing={3}
              listStylePosition={["inside", "inside", "outside"]}
              pt="20px"
            >
              {jobs[selectedJob].points.map((point) => (
                <ListItem key={point}>{point}</ListItem>
              ))}
            </UnorderedList>
          </VStack>
        </Flex>
      </Flex>
    </Flex>
  );
};

interface JobType {
  [name: string]: {
    role: string;
    dateRange: string;
    location: string;
    points: string[];
  };
}

const jobs: JobType = {
  "Virunga National Park": {
    role: "Technology Project Manager",
    dateRange: "Jan 2016 - Aug 2017 and Jan 2020 - Aug 2022",
    location: "North Kivu, Democratic Republic of the Congo",
    points: [
      "Designed real-time LoRa alert system for communities to report potential rebel incursions",
      "Created cloud-based spatial data integration system to track ranger patrols and park vehicles",
      "Developed Google Earth Engine project to monitor deforestation and agricultural encroachment",
      "Established drone surveillance program by training 25 rangers in French",
    ],
  },
  "Flower Child": {
    role: "Founder / Operations Manager",
    dateRange: "Apr 2020 - June 2021",
    location: "Kigali, Rwanda",
    points: [
      "Founded a plant shop that works with small-scale plant nurseries, potters, and visual artists, highlighting native species and local art forms",
      "Training a staff of 3 to handle all aspects of the company, from procurement and preparation, to sales and delivery",
      "Injected over $12,000 into artisinal craftspeople and plant nurseries in the first year of operation",
    ],
  },
  "quip.link": {
    role: "Co-Founder / Software Engineer",
    dateRange: "Jan 2018 - Apr 2020",
    location: "Kigali, Rwanda",
    points: [
      "Founded and designed platform that links informal hardware shops with institutional buyers to reduce inefficiencies in the market",
      "Developed an online marketplace for heavy machinery that featured over 200 items from East Africa",
      "Engineered an authenticated backend system, cloud architecture, relational database, and GIS-powered onboarding process",
    ],
  },
  Caracal: {
    role: "Founder / Software Engineer",
    dateRange: "January 2019 - December 2019",
    location: "Kigali, Rwanda",
    points: [
      "Designed and implemented geospatial data automation tool for protected areas to connect wildlife tracking collars with GIS platforms",
      "Received a Early Career grant from the National Geographic Society to cover development costs",
      "Managed a team of 2 remote programmers in the design and implementation of new features",
    ],
  },
  "Tuma Consulting": {
    role: "Softare Consultant",
    dateRange: "Sep 2017 - Jun 2018",
    location: "Kigali, Rwanda",
    points: [
      "Founded technology consulting firm that specializes in data visualization and geospatial analysis",
      "Developed a web-based platform for the Rwanda Development Board to track foreign investments in the country",
      "Worked with Impact Hub Kigali on several Design Thinking workshops with local tech entrepreneurs",
    ],
  },
};

export default ExperienceSection;
