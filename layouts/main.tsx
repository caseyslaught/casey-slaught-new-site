import React, { Suspense, useEffect } from "react";
import { Flex } from "@chakra-ui/react";
import { useMediaQuery } from "@chakra-ui/react";

import HeaderMain from "../components/HeaderMain";

interface Props {
  children: React.ReactNode;
}

const MainLayout: React.FC<Props> = ({ children }) => {
  const [isMobileOrTablet] = useMediaQuery("(max-width: 768px)");

  return (
    <Flex direction="column" minH="100vh" bg="primary.800" color="grey.50">
      <Suspense fallback={<div>Loading...</div>}>
        <HeaderMain isMobileOrTablet={isMobileOrTablet} />
        {children}
      </Suspense>
    </Flex>
  );
};

export default MainLayout;
