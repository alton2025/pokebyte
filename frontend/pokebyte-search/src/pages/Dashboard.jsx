import { Box, Input, InputGroup, InputLeftElement, Icon, Flex, VStack, Image, Button, Text } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { useState } from "react";

export default function Dashboard() {
  const [pokemonName, setPokemonName] = useState("");
  const [results, setResults] = useState([]);
  const [error, setError] = useState("");

  const handleSearch = async () => {
    try {
      const response = await fetch(`http://localhost:3000/pokemon/${pokemonName}`);
      if (!response.ok) {
        throw new Error("Pokémon not found");
      }
      const data = await response.json();
      setResults(data);
      setError("");
    } catch (err) {
      setError(err.message);
      setResults([]);
    }
  };

  return (
    <Flex
      height="100vh"
      align="center"
      justify="center"
      bg="gray.50"
      px={4}
      direction="column"
    >
      <VStack spacing={6}>
        {/* Pokébyte Logo */}
        <Image
          src="/pokebyte-logo.png"
          alt="Pokébyte Logo"
          boxSize="200px"
          objectFit="contain"
        />

        {/* Search Bar */}
        <InputGroup maxW="400px" boxShadow="md">
          <InputLeftElement pointerEvents="none">
            <Icon as={SearchIcon} color="gray.400" />
          </InputLeftElement>
          <Input
            type="text"
            placeholder="Search Pokemon..."
            value={pokemonName}
            onChange={(e) => setPokemonName(e.target.value)}
            borderRadius="full"
            bg="white"
            _placeholder={{ color: "gray.500" }}
            _focus={{ borderColor: "blue.400", boxShadow: "outline" }}
          />
        </InputGroup>

        <Button colorScheme="blue" onClick={handleSearch}>
          Search
        </Button>

        {error && <Text color="red.500">{error}</Text>}

        {results.map((entry, index) => (
          <Box key={index} p={4} borderWidth="1px" borderRadius="lg" bg="white" w="100%" maxW="400px">
            <Text><strong>City:</strong> {entry.City}</Text>
            <Text><strong>Region:</strong> {entry.Region}</Text>
            <Text><strong>Spring Avg Temp:</strong> {entry.Spring_Avg}°</Text>
            <Text><strong>Weather Conditions:</strong> {entry.weather_conditions}</Text>
          </Box>
        ))}
      </VStack>
    </Flex>
  );
}
