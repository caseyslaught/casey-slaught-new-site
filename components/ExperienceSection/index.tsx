import React, { useState } from "react";
import { Divider, Flex, Heading, Stack, Text, VStack } from "@chakra-ui/react";

interface Props {}

const ExperienceSection: React.FC<Props> = () => {
  const [selectedJob, setSelectedJob] = useState("Virunga National Park");

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
            maxW={["none", "none", "400px"]}
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
            h="360px"
            flex={["", "", 1]}
            w={["100%", "100%", "auto"]}
            mt={["20px", "20px", "0px"]}
          >
            <Heading fontSize="lg" color="gray.100">
              {jobs[selectedJob].role}
            </Heading>
            <Text fontSize="md" color="gray.200">
              {jobs[selectedJob].dateRange}
            </Text>
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
    points: string[];
  };
}

const jobs: JobType = {
  "Virunga National Park": {
    role: "Technology Project Manager",
    dateRange: "Jan 2020 - Aug 2021 and Jan 2016 - Jul 2017",
    points: [
      "Worked within security dept. to develop data automation and spatial viz. tools",
      "Developed LoRaWAN alert system, frontend dashboard, and SMS integration for communities threatened by the ADF rebel group",
      "Established drone surveillance program using low-cost models; trained over 25 rangers in French",
      "Created Google Earth Engine land cover assessment applications to monitor deforestation and burn areas in near real time",
    ],
  },
  Caracal: {
    role: "Founder / Software Engineer",
    dateRange: "Jan 2018 - Mar 2019",
    points: [
      "Developed a web app to help users find and share outdoor activities",
      "Built a REST API with Node.js and Express",
      "Created a React frontend with Redux state management",
      "Implemented a PostgreSQL database with Sequelize ORM",
    ],
  },
  "quip.link": {
    role: "Co-Founder / Software Engineer",
    dateRange: "Jan 2018 - Mar 2019",
    points: [
      "Developed a web app to help users find and share outdoor activities",
      "Built a REST API with Node.js and Express",
      "Created a React frontend with Redux state management",
      "Implemented a PostgreSQL database with Sequelize ORM",
    ],
  },
  "Flower Child": {
    role: "Founder / Operations Manager",
    dateRange: "Jan 2020 - June 2021",
    points: [
      "Developed a web app to help users find and share outdoor activities",
      "Built a REST API with Node.js and Express",
      "Created a React frontend with Redux state management",
      "Implemented a PostgreSQL database with Sequelize ORM",
    ],
  },
};

export default ExperienceSection;
