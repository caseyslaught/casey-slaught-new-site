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
  Heading,
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
    <Flex w="100%" p="1em" h="80px">
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
        {isMobileOrTablet ? (
          <MobileMenu />
        ) : (
          <HStack spacing={5}>
            <Link>
              <Text fontSize="sm">👋 Intro</Text>
            </Link>
            <Link>
              <Text fontSize="sm">🧑‍💻 Experience</Text>
            </Link>
            <Link>
              <Text fontSize="sm">🏗️ Projects</Text>
            </Link>
            <Link>
              <Text fontSize="sm">✉️ Contact</Text>
            </Link>
            <Button colorScheme="accent" variant="outline">
              Resume
            </Button>
          </HStack>
        )}
      </Flex>
    </Flex>
  );
};

const MobileMenu: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef();

  return (
    <>
      <Box position="relative">
        <IconButton
          //ref={menuRef}
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
        //finalFocusRef={menuRef}
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

              <Text fontSize="md">👋 Intro</Text>
              <Text fontSize="md">🧑‍💻 Experience</Text>
              <Text fontSize="md">🏗️ Projects</Text>
              <Text fontSize="md">✉️ Contact</Text>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default HeaderMain;
