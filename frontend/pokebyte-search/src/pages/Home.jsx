import {Flex, VStack, Image} from "@chakra-ui/react";
import {useNavigate} from
import React, { useState } from "react";

export default function Home() {
  const navigate = useNavigate();

  return (
    <Flex
      height="60vh"
      align="center"
      justify="center"
      px={4}
    >
      <VStack spacing={4}>
        {/* Pokébyte Logo */}
        <Image
          src="/pokebyte-logo.png"
          alt="Pokébyte Logo"
          boxSize="600px"
          objectFit="contain"
        />

        {/* Rounded Search Bar with Dropdown Filter */}
        <InputGroup maxW="600px" boxShadow="md">
          <InputLeftElement pointerEvents="none">
            <Icon as={SearchIcon} color="gray.400" />
          </InputLeftElement>
          <Input
            type="text"
            placeholder="Search City or Park..."
            borderRadius="full"
            bg="white"
            _placeholder={{ color: "gray.500" }}
            _focus={{ borderColor: "blue.400", boxShadow: "outline" }}
          />

          {/* Right Addon Dropdown Menu */}
          <InputRightElement width="auto" pr="2">
            <Menu>
              <MenuButton as={Button} size="sm" rightIcon={<ChevronDownIcon />}>
                {selectedFilter}
              </MenuButton>
              <MenuList>
                <MenuItem onClick={() => setSelectedFilter("Fall")}>Fall</MenuItem>
                <MenuItem onClick={() => setSelectedFilter("Winter")}>Winter</MenuItem>
                <MenuItem onClick={() => setSelectedFilter("Spring")}>Spring</MenuItem>
                <MenuItem onClick={() => setSelectedFilter("Summer")}>Summer</MenuItem>
              </MenuList>
            </Menu>
          </InputRightElement>
        </InputGroup>
      </VStack>
    </Flex>
  );
}