import { useRef, useState } from "react";
import { Button, Box, Text } from "@chakra-ui/react";
import { FaPlay, FaPause } from "react-icons/fa";

export default function MusicButton() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayback = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }

    setIsPlaying(!isPlaying);
  };

  return (
    <>
      <audio ref={audioRef} src="/Pokemon.mp3" />
      <Button
        leftIcon={isPlaying ? <FaPause /> : <FaPlay />}
        colorScheme="yellow"
        variant="solid"
        onClick={togglePlayback}
        mt={4}
      >
        {isPlaying ? "Pause Theme" : "Play Theme"}
      </Button>

      <Box
        mt={6}
        bg="yellow.50"
        p={5}
        borderRadius="lg"
        shadow="sm"
        maxW="550px"
        mx="auto"
      >
        <Text fontSize="2xl" fontWeight="bold" mb={4} color="black">
          What is Pokebyte?
        </Text>
        <Text fontSize="md" lineHeight="1.6" color="black">
          Pokebyte is a Pokémon GO tool that helps players in Washington discover what Pokémon are likely to spawn based on city and season. Pokebyte provides information about the Pokémon, the city's region, the weather condition, and the range of temperatures where you may find the Pokémon.
        </Text>
      </Box>
    </>
  );
}
