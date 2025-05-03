import { Box, Input, InputGroup, InputLeftElement, Icon, Flex, VStack, Image} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

export default function Home() {
  return (
    <Flex
      height="60vh"
      align="center"
      justify="center"
      bg="gray.50"
      px={4}
    >
      <VStack spacing={0}>
        {/* Pokébyte Logo */}
        <Image
          src="/pokebyte-logo.png"
          alt="Pokébyte Logo"
          boxSize="600px"
          objectFit="contain"
        />

        {/* Rounded Search Bar */}
        <InputGroup maxW="600px" boxShadow="md">
          <InputLeftElement pointerEvents="none">
            <Icon as={SearchIcon} color="gray.400" />
          </InputLeftElement>
          <Input
            type="text"
            placeholder="Search City..."
            borderRadius="full"
            bg="white"
            _placeholder={{ color: "gray.500" }}
            _focus={{ borderColor: "blue.400", boxShadow: "outline" }}
          />
        </InputGroup>
      </VStack>
    </Flex>
  );
}