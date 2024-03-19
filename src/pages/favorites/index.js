import { useEffect, useState, useContext} from "react";
import { TheCatAPI } from "@thatapicompany/thecatapi";
import BoxFavorites from "../../components/BoxFavorites";
import UserContext from "../../components/UserContext";

const Favorites = () => {
  const apiKey = process.env.REACT_APP_API_KEY;
  const theCatAPI = new TheCatAPI(apiKey);
  const [favorites, setFavorites] = useState([]);
  const { user } = useContext(UserContext);

  useEffect(() => {
    async function fetchFavorites() {
      try {
        const userFavorites = await getUserFavourites();
        setFavorites(userFavorites);
      } catch (error) {
        console.error("Error fetching user favorites:", error);
      }
    }
    fetchFavorites();
  }, []);

  async function getUserFavourites() {
    const favourites = await theCatAPI.favourites.getFavourites(user);
    console.log(favourites);
    return favourites;
  }

   async function deleteFavorite(favoriteId) {
    await theCatAPI.favourites.deleteFavourite(favoriteId);
    return favoriteId;
  }

  const handleRemoveFromFavorites = async (favoriteId) => {
    try {
      await deleteFavorite(favoriteId);
      setFavorites(favorites.filter((fav) => fav.id !== favoriteId));
    } catch (error) {
      console.error("Error removing favorite:", error);
    }
  };

  return (
    <div >
       <div className="home">
      <h1>Favorites</h1>
       </div>
      <div style={{ display: "flex", flexWrap: "wrap", marginTop: "10px" }}>
        {favorites.map((favorite, index) => (
          <BoxFavorites
            key={index}
            image={favorite.image.url}
            onRemoveFromFavorites={() => handleRemoveFromFavorites(favorite.id)}
            isFavorite={true}
            style={{ margin: "10px" }}
          />
        ))}
      </div>
    </div>
  );
};

export default Favorites;
