import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import {
  Box,
  Flex,
  Heading,
  Image,
  Spinner,
  Text,
  VStack,
} from "@chakra-ui/react";

export default function Result() {
  const [searchParams] = useSearchParams();
  const city = searchParams.get("city");
  const season = searchParams.get("season");

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!city || !season) return;

    setLoading(true);
    setError("");
    setData([]);

    fetch(`http://localhost:3000/weather?city=${city}&season=${season}`)
      .then((res) => {
        if (!res.ok) throw new Error("No data found for that city and season.");
        return res.json();
      })
      .then((json) => {
        setData(json);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [city, season]);

  if (!city || !season) {
    return (
      <Flex height="100vh" align="center" justify="center">
        <Text fontSize="xl" color="red.500">
          Please provide both city and season in the search.
        </Text>
      </Flex>
    );
  }

  return (
    <Flex direction="column" align="center" p={6} bg="#9DC7EC" minH="100vh">
      <Heading mb={6} size="lg" color="blue.800">
        Pokémon Weather Results for {city} ({season})
      </Heading>

      {loading && <Spinner size="xl" />}

      {error && (
        <Text color="red.600" fontSize="md" mb={4}>
          {error}
        </Text>
      )}

      {!loading && !error && data.length === 0 && (
        <Text fontSize="md" color="gray.700">
          No Pokémon data found.
        </Text>
      )}

      <VStack spacing={4} w="100%" maxW="800px" overflowY="auto">
        {data.map((entry) => (
          <Box
            key={entry.PokemonName}
            p={4}
            bg="white"
            rounded="md"
            shadow="md"
            w="100%"
            display="flex"
            alignItems="center"
          >
            <Image
              src={entry.Image}
              alt={entry.PokemonName}
              boxSize="80px"
              objectFit="contain"
              mr={4}
              fallbackSrc="/placeholder-pokemon.png"
            />
            <Box>
              <Text fontWeight="bold" fontSize="lg">
                {entry.PokemonName}
              </Text>
              <Text>
                <strong>Type 1:</strong> {entry.Type1}{" "}
                {entry.Type2 && (
                  <>
                    <strong>Type 2:</strong> {entry.Type2}
                  </>
                )}
              </Text>
              <Text>
                <strong>Region:</strong> {entry.Region} |{" "}
                <strong>Season Temp Range:</strong> {entry.Season_Temp_Range}°F
              </Text>
              <Text>
                <strong>Weather Conditions:</strong> {entry.WeatherConditions}
              </Text>
            </Box>
          </Box>
        ))}
      </VStack>
    </Flex>
  );
}

