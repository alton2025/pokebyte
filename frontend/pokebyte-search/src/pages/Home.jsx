import {Flex, VStack, Image} from "@chakra-ui/react";
import {useNavigate} from "react-router-dom";
import React from "react";
import SearchBar from "../components/SearchBar.jsx";


export default function Home() {
  const navigate = useNavigate();

  const handleSearch = (city, season) => {
    navigate(`/Result?city=${city}&season=${season}`);
  };

  return (
    <Flex height="60vh" align="center" justify="center" px={4}>
      <VStack spacing={0}>
        {/* Pokebyte Logo */}
        <Image
          src="/pokebyte-logo.png"
          alt="Pokébyte Logo"
          boxSize="600px"
          objectFit="contain"
          mb ={0}
        />

        {/* Search bar below logo */}
        <SearchBar onSearch={handleSearch} />
      </VStack>
    </Flex>
  );
}