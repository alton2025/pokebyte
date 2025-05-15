import { Flex, VStack, Image } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import React from "react";
import SearchBar from "../components/SearchBar.jsx";
import MusicButton from "../components/MusicButton.jsx"; // Import the music button

export default function Home() {
  const navigate = useNavigate();

  const handleSearch = (city, season) => {
    navigate(`/Result?city=${city}&season=${season}`);
  };

  return (
    <Flex height="60vh" align="center" justify="center" px={4}>
      <VStack spacing={4}>
        {/* Pokebyte Logo */}
        <Image
          src="/logo.PNG"
          alt="Pokébyte Logo"
          boxSize="500px"
          objectFit="contain"
          mb={0}
        />
        

        {/* Search bar */}
        <SearchBar onSearch={handleSearch} />

        {/* Music button below search bar */}
        <MusicButton />
      </VStack>
    </Flex>
  );
}
