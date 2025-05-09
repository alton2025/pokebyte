import { useState } from 'react';
import { Input, Button, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';

export default function SearchBar({ onSearch, defualtCity= "", defaultSeason = "select Season"}) {
    const [city, setCity] = useState(defualtCity);
    const[season, setSeason] = useState(defaultSeason);

    const handleSearch = () => {
        if (city && season !== 'Select Season'){
            onSearch(City, Season);
        }
    };

    return (
       <InputGroup maxW="600px" boxShadow="md">
      <InputLeftElement pointerEvents="none">
        <Icon as={SearchIcon} color="gray.400" />
      </InputLeftElement>
      <Input
        type="text"
        placeholder="Search City or Park..."
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
            {selectedSeason}
          </MenuButton>
          <MenuList>
            {["Fall", "Winter", "Spring", "Summer"].map((season) => (
              <MenuItem key={season} onClick={() => setSelectedSeason(season)}>
                {season}
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