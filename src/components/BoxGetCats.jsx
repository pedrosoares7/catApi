import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { IconButton } from '@mui/material';
import { Typography } from '@mui/material';

const BoxComponent= ({ breed, image, temperament, onGetRandomImage,  onAddToFavorites, isFavorite }) =>{
    return (    
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <Box
      sx={{
        width: 500,
        height: 80,   
        bgcolor: 'cornsilk',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        
      }}
    >
      <Typography variant="h4" style={{fontFamily: "cursive"}}>Breed: {breed}</Typography>
    </Box>
    <Box
      sx={{
        width: 500,
        height: 300, 
        bgcolor: 'cornsilk',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        
       
      }}
    >
      <img src={image} alt="cat" style={{ maxWidth: "100%", maxHeight: "100%" }} />
    </Box>
    <Box
      sx={{
        width: 500,
        height: 50, 
        bgcolor: 'cornsilk;',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',       
      }}
    >
      <p>{temperament}</p>
    </Box>
    <Box
      sx={{
        width: 500,
        height: 50,
        bgcolor: 'cornsilk',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        
      }}
    >
     <IconButton aria-label='add to favorites' onClick= {onAddToFavorites}>
     {isFavorite ? <FavoriteIcon style={{ color: 'red' }} /> : <FavoriteBorderIcon style={{ color: 'red' }}/>}
     </IconButton>
      <Box sx={{ width: 80 }} />
      <Button onClick={onGetRandomImage}>Get Cats</Button>
    </Box>
  </Box>
);
}
export default BoxComponent;
