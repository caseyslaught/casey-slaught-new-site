import React, { Suspense } from "react";
import { Box, Flex } from "@chakra-ui/react";
import { Link, useMediaQuery } from "@chakra-ui/react";

import HeaderMain from "../components/HeaderMain";

interface Props {
  isLoaded: boolean;
  children: React.ReactNode;
}

const MainLayout: React.FC<Props> = ({ isLoaded, children }) => {
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
      <Suspense fallback={<div></div>}>
        <HeaderMain isMobileOrTablet={isMobileOrTablet} isLoaded={isLoaded} />
        {children}

        {isLoaded && (
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
        )}
      </Suspense>
    </Flex>
  );
};

export default MainLayout;
