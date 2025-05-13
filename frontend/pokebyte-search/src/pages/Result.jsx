import {Box, VStack, HStack, Text, Heading, Container} from "@chakra-ui/react";

export default function  ResultPage() {
  const mockResults = [{ name: "Pokémon #1", type: "Fire", match: "Sunny" },
    { name: "Pokémon #2", type: "Water", match: "Rainy" },
    { name: "Pokémon #3", type: "Grass", match: "Cloudy" },
  ];
  return (<Container maxW="5xl" py={10}>
      <VStack spacing={8} align="stretch">
        {/* Title */}
        <Heading textAlign="center">Pokémon Spawn Results</Heading>

        {/* City Info */}
        <Box p={6} borderWidth="1px" borderRadius="lg" bg="gray.50" shadow="md">
          <Text><strong>City:</strong> Seattle</Text>
          <Text><strong>Region:</strong> Washington</Text>
          <Text><strong>Season Average Temp:</strong> 54°</Text>
          <Text><strong>Weather Conditions:</strong> Rainy, Cloudy</Text>
        </Box>

        {/* Spawn Cards */}
        <Heading size="lg">Likely Pokémon Spawns:</Heading>
        <VStack spacing={4}>
          {mockResults.map((pokemon, index) => (
            <Box key={index} borderWidth="1px" borderRadius="lg" p={4} bg="white" shadow="sm" w="full">
              <HStack spacing={6}>
                {/* Placeholder for Image */}
                <Box 
                  w="100px" 
                  h="100px" 
                  bg="gray.100" 
                  borderRadius="md" 
                  display="flex" 
                  alignItems="center" 
                  justifyContent="center"
                  fontWeight="bold"
                  color="gray.600"
                >
                  Image
                </Box>

                {/* Pokémon Info */}
                <VStack align="start" spacing={1}>
                  <Text fontSize="xl" fontWeight="bold">{pokemon.name}</Text>
                  <Text>Type: {pokemon.type}</Text>
                  <Text>Condition Match: {pokemon.match}</Text>
                </VStack>
              </HStack>
            </Box>
          ))}
        </VStack>
      </VStack>
    </Container>
  );
}
