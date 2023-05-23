import Head from "next/head";
import Image from "next/image";
import { Flex, Text, VStack } from "@chakra-ui/react";

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
      <Flex px="1em" justify="flex-start" align="center" h="calc(100vh - 80px)">
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
              I am a full-stack developer focused on building spatial-driven
              applications that have a meaningful environmental impact. I
              recently earned a Masters in Environmental Management degree at
              Duke University . I also oversee a couple technology projects at
              Virunga National Park in the Democratic Republic of the Congo.
            </Text>
          </VStack>
        </Flex>
      </Flex>
    </MainLayout>
  );
}
