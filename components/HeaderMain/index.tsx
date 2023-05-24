import React, { useRef, useState } from "react";
import {
  Box,
  Button,
  Circle,
  Divider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Flex,
  HStack,
  IconButton,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FiAlignRight } from "react-icons/fi";

interface Props {
  isMobileOrTablet: boolean;
}

const HeaderMain: React.FC<Props> = ({ isMobileOrTablet }) => {
  return (
    <Flex w="100%" px={["1em", "1em", "2em"]} h="80px">
      <Flex
        color="gray.50"
        w="100%"
        margin="0 auto"
        h="100%"
        align="center"
        justify="space-between"
      >
        <Text color="gray.200" fontSize="xl">
          Casey Slaught
        </Text>
        {isMobileOrTablet ? <MobileMenu /> : <DesktopMenu />}
      </Flex>
    </Flex>
  );
};

const DesktopMenu: React.FC = () => {
  return (
    <HStack spacing={5}>
      <Sections isMobileOrTablet={false} />
      <Button colorScheme="accent" variant="outline">
        Resume
      </Button>
    </HStack>
  );
};

const MobileMenu: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <Box position="relative">
        <IconButton
          color="gray.200"
          aria-label="Menu"
          fontSize="2.4em"
          icon={<FiAlignRight />}
          variant="ghost"
          onClick={() => setMenuOpen(true)}
          _hover={{ bg: "transparent", color: "gray.300" }}
        />
        <Circle
          bg="accent.500"
          size="10px"
          position="absolute"
          top="3px"
          right="0px"
        />
      </Box>
      <Drawer
        isOpen={menuOpen}
        placement="right"
        onClose={() => setMenuOpen(false)}
        autoFocus={false}
        returnFocusOnClose={false}
      >
        <DrawerOverlay />
        <DrawerContent bg="primary.700" color="gray.50">
          <DrawerCloseButton />
          <DrawerBody>
            <VStack align="flex-start" mt={24} spacing={4}>
              <Button colorScheme="accent" variant="outline" size="lg">
                Resume
              </Button>

              <Divider pt={2} />

              <Sections
                isMobileOrTablet={true}
                onClickCallback={() => {
                  setMenuOpen(false);
                }}
              />
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

interface SectionsProps {
  isMobileOrTablet: boolean;
  onClickCallback?: () => void;
}

const Sections: React.FC<SectionsProps> = ({
  isMobileOrTablet,
  onClickCallback,
}) => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    const offsetPad = isMobileOrTablet ? 20 : 80;
    if (section) {
      const offset = section.offsetTop - offsetPad;
      window.scrollTo({
        top: offset,
        behavior: "smooth",
      });
      if (onClickCallback) {
        onClickCallback();
      }
    }
  };

  const fontSize = isMobileOrTablet ? "md" : "sm";

  return (
    <>
      <Link
        onClick={() => {
          scrollToSection("intro-section");
        }}
      >
        <Text fontSize={fontSize}>👋 Intro</Text>
      </Link>
      <Link
        onClick={() => {
          scrollToSection("experience-section");
        }}
      >
        <Text fontSize={fontSize}>🧑‍💻 Experience</Text>
      </Link>
      <Link
        onClick={() => {
          scrollToSection("projects-section");
        }}
      >
        <Text fontSize={fontSize}>🏗️ Projects</Text>
      </Link>
      <Link
        onClick={() => {
          scrollToSection("contact-section");
        }}
      >
        <Text fontSize={fontSize}>✉️ Contact</Text>
      </Link>
    </>
  );
};

export default HeaderMain;
