import { useState } from 'react';
import { Input, Button, Menu, MenuButton, MenuList, MenuItem, InputGroup, Icon, InputLeftElement, InputRightElement} from '@chakra-ui/react';
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
    <InputGroup maxW="600px" boxShadow="md">
      <InputLeftElement pointerEvents="none">
        <Icon as={SearchIcon} color="gray.400" />
      </InputLeftElement>
      <Input
        type="text"
        placeholder="Search City or Park In Washington..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
        borderRadius="full"
        bg="white"
        _placeholder={{ color: "gray.500" }}
        _focus={{ borderColor: "blue.400", boxShadow: "outline" }}
      />
      <InputRightElement width="auto" pr="2">
        <Menu>
          <MenuButton as={Button} size="sm" rightIcon={<ChevronDownIcon />}>
            {season}
          </MenuButton>
          <MenuList>
            {["Fall", "Winter", "Spring", "Summer"].map((s) => (
              <MenuItem key={s} onClick={() => setSeason(s)}>
                {s}
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
        <Button ml={2} size="sm" onClick={handleSearch}>
          Search
        </Button>
      </InputRightElement>
    </InputGroup>
  );
}