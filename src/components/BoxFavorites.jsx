import Box from '@mui/material/Box';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { IconButton } from '@mui/material';

const BoxFavorites= ({ image,  onRemoveFromFavorites, isFavorite }) =>{
    return ( 
        
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: "25px" }}>
    <Box
      sx={{
        width: 500,
        height: 200,   
        bgcolor: 'cornsilk',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        
      }}
    >
      <img src={image} alt="cat" style={{ maxWidth: "100%", maxHeight: "100%"}} />
    </Box>
    <Box
      sx={{
        width: 300,
        height: 50, 
        bgcolor: 'cornsilk',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',       
      }}
    >
      
     <IconButton aria-label='add to favorites' onClick= {onRemoveFromFavorites}>
     {isFavorite ? <FavoriteIcon style={{ color: 'red' }}/> : <FavoriteBorderIcon style={{ color: 'red' }} />}
     </IconButton>
    </Box>
  </Box>
);
}
export default BoxFavorites;