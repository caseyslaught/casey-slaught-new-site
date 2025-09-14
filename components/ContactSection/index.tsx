import React from "react";
import { As, Divider, Flex, Heading, Icon, Link, Text, VStack } from "@chakra-ui/react";
import { FiGithub, FiMail, FiTwitter } from "react-icons/fi";

interface Props {}

const ContactSection: React.FC<Props> = () => {
  return (
    <Flex
      id="contact-section"
      px={["1em", "1em", "2em"]}
      justify="flex-start"
      align="flex-start"
      pb="160px"
    >
      <Flex direction="column" align="flex-start" w="100%" maxW="1080px" m="0 auto" color="gray.50">
        <VStack w={["100%", "100%", "360px"]} align="flex-start" mb="40px">
          <Heading fontSize={["xl", "2xl"]}>✉️ Contact</Heading>
          <Divider />
        </VStack>

        <VStack w="100%">
          <Text textAlign="center" mb={["20px", "20px", "10px"]} maxW="520px">
            Let me know if you&apos;re interested in the stuff I&apos;ve been working on!
          </Text>
          <VStack align="flex-start" spacing={[4, 4, 2]}>
            <ContactItem icon={FiMail} href="mailto:caseyslaught@gmail.com">
              email me
            </ContactItem>

            <ContactItem icon={FiGithub} href="https://github.com/caseyslaught">
              follow me
            </ContactItem>

            <ContactItem icon={FiTwitter} href="https://twitter.com/caseyslaught">
              tweet me
            </ContactItem>
          </VStack>
        </VStack>
      </Flex>
    </Flex>
  );
};

interface ContactItemProps {
  icon: As;
  href: string;
  children: React.ReactNode;
}

const ContactItem: React.FC<ContactItemProps> = ({ icon, href, children }) => {
  return (
    <Link href={href} isExternal>
      <Flex align="center" fontSize={["1.2em", "1.2em", "1em"]}>
        <Icon as={icon} color="secondary.200" me="10px" />
        <Text color="secondary.200">{children}</Text>
      </Flex>
    </Link>
  );
};

export default ContactSection;
