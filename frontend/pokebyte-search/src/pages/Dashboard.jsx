import { Box, Input, InputGroup, InputLeftElement, Icon, Flex, VStack, Image} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

export default function Dashboard() {
  return (
    <Flex
      height="100vh"
      align="center"
      justify="center"
      bg="gray.50"
      px={4}
    >
      <VStack spacing={6}>
        {/* Pokébyte Logo */}
        <Image
          src="/pokebyte-logo.png"
          alt="Pokébyte Logo"
          boxSize="200px"
          objectFit="contain"
        />

        {/* Rounded Search Bar */}
        <InputGroup maxW="400px" boxShadow="md">
          <InputLeftElement pointerEvents="none">
            <Icon as={SearchIcon} color="gray.400" />
          </InputLeftElement>
          <Input
            type="text"
            placeholder="Search Pokemon..."
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