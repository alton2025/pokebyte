import { useState } from 'react';
import {
  Input,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Flex,
  InputGroup,
  Icon,
  InputLeftElement,
} from '@chakra-ui/react';
import { ChevronDownIcon, SearchIcon } from '@chakra-ui/icons';

export default function SearchBar({ onSearch, defaultCity = "", defaultSeason = "Select Season" }) {
  const [city, setCity] = useState(defaultCity);
  const [season, setSeason] = useState(defaultSeason);

  const handleSearch = () => {
    if (city && season !== 'Select Season') {
      onSearch(city, season);
    }
  };

  return (
    <Flex
      maxW="600px"
      w="100%"
      boxShadow="md"
      align="center"
      bg="white"
      borderRadius="full"
      px={4}
      py={2}
    >
      <InputGroup flex="1" mr={2}>
        <InputLeftElement pointerEvents="none">
          <Icon as={SearchIcon} color="gray.400" />
        </InputLeftElement>
        <Input
          type="text"
          placeholder="Enter a city in Washington..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
          borderRadius="full"
          _placeholder={{ color: "gray.500" }}
          _focus={{ borderColor: "blue.400", boxShadow: "outline" }}
          width="100%"
        />
      </InputGroup>

      <Menu>
        <MenuButton as={Button} size="sm" rightIcon={<ChevronDownIcon />} mr={2}>
          {season}
        </MenuButton>
        <MenuList zIndex="popover">
          {["Fall", "Winter", "Spring", "Summer"].map((s) => (
            <MenuItem key={s} onClick={() => setSeason(s)}>
              {s}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>

      <Button size="sm" onClick={handleSearch}>
        Search
      </Button>
    </Flex>
  );
}
