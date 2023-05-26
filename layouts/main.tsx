import React, { Suspense } from "react";
import { Box, Flex } from "@chakra-ui/react";
import { Link, useMediaQuery } from "@chakra-ui/react";

import HeaderMain from "../components/HeaderMain";

interface Props {
  children: React.ReactNode;
}

const MainLayout: React.FC<Props> = ({ children }) => {
  const [isMobileOrTablet] = useMediaQuery("(max-width: 860px)");

  return (
    <Flex
      direction="column"
      minH="100vh"
      bg="primary.800"
      color="grey.50"
      overflowX="hidden"
      pt="80px"
    >
      <Suspense fallback={<div>Loading...</div>}>
        <HeaderMain isMobileOrTablet={isMobileOrTablet} />
        {children}

        <Box
          p="1em"
          w="100%"
          fontSize="0.8em"
          color="gray.400"
          textAlign="center"
        >
          <Link
            href="https://github.com/caseyslaught/casey-slaught-new-site"
            isExternal
          >
            Built by Casey Slaught
          </Link>{" "}
          with design inspiration from{" "}
          <Link href="https://brittanychiang.com/" isExternal>
            Brittany Chiang
          </Link>
          .
        </Box>
      </Suspense>
    </Flex>
  );
};

export default MainLayout;
