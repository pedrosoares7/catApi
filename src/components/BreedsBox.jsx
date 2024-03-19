import React, { useRef, useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Box, Typography } from '@mui/material';


const BreedBox = ({ breeds, selectedBreed,onBreedHandler, image}) => {
  const hint = useRef('');
  const [inputValue, setInputValue] = useState('');
 

  const handleBreedChange = (event, newValue) => {
    setInputValue(newValue);
    onBreedHandler(newValue);
     
    
  };
  return (
    <Box>
    <Autocomplete
      onKeyDown={(event) => {
        if (event.key === 'Tab') {
          if (hint.current) {
            setInputValue(hint.current);
            event.preventDefault();
          }
        }
      }}
      onBlur={() => {
        hint.current = '';
      }}
      disablePortal
      inputValue={inputValue}
      filterOptions={(options, state) => {
        const displayOptions = options.filter((option) =>
         option && 
            option.toLowerCase()
            .trim()
            .includes(state.inputValue.toLowerCase().trim()),
        );

        return displayOptions;
      }}
      id="combo-box-hint-demo"
      options={breeds}
      sx={{ width: "auto" , marginBottom: "10px" , marginTop: "20px"}}
      onChange={handleBreedChange}
      
      renderInput={(params) => {
        return (
          <Box sx={{ position: 'relative' }}>
            <Typography
              sx={{ position: 'absolute', opacity: 0.5, left: 14, top: 16 }}
            >
              {hint.current}
            </Typography>
            <TextField
              {...params}
              onChange={(e) => {
                const newValue = e.target.value;
                setInputValue(newValue);
                const matchingOption = breeds.find((option) =>
                  option.startsWith(newValue),
                );

                if (e.target.value && matchingOption) {
                  hint.current = matchingOption;
                } else {
                  hint.current = '';
                }
              }}
              label="Breeds"
            />
          </Box>
        );
      }}
    />
    { selectedBreed && (
      <Box sx={{ marginTop: 2, textAlign: "center" }}>
        <img src={image } alt="cat" style={{ maxWidth: "20%", maxHeight: "20%"}} />
        <div style={{ marginTop: "10px", maxWidth: "700px", marginLeft: "auto", marginRight: "auto" }}>
        <Typography variant="h6">Name: {selectedBreed.name}</Typography>
        <Typography variant="h6">Description: {selectedBreed.description}</Typography>
        <Typography variant="h6">Temperament: {selectedBreed.temperament}</Typography>
        <Typography variant="h6">Origin: {selectedBreed.origin}</Typography>

        </div>
   </Box>
    )}
  </Box> 
);
}

export default BreedBox;