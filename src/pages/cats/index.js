import { useEffect, useState, useContext } from "react";
import { TheCatAPI } from "@thatapicompany/thecatapi";
import BoxComponent from "../../components/BoxGetCats";
import UserContext from "../../components/UserContext";

const Cats = () => {
  const apiKey = process.env.REACT_APP_API_KEY;
  const theCatAPI = new TheCatAPI(apiKey);
  const [cat, setCat] = useState();
  const [favorites, setFavorites] = useState([]);
  const [isFavorite, setIsFavorite] = useState(false);
  const { user } = useContext(UserContext);

  useEffect(() => {
    getRandomImage()
      .then((image) => {
        setCat(image);
        setIsFavorite(isCatFavorite(image.id));
      })
      .catch((error) => {
        console.error("Error fetching cat image:", error);
      });
  }, []);

  async function getRandomImage() {
    try {
      const catImage = await theCatAPI.images.getRandomImage({
        hasBreeds: true,
      });
      return catImage;
    } catch (error) {
      alert("Error fetching cat image");
      return null;
    }
  }

  async function favouriteImage() {
    try {
      const favorite = await theCatAPI.favourites.addFavourite(cat.id, user);
      return favorite;
    } catch (error) {
      alert("Error adding to favorites");
      return null;
    }
  }

  const handleGetRandomImage = async () => {
    const image = await getRandomImage();
    setCat(image);
    setIsFavorite(isCatFavorite(image.id));
  };

  const handleAddToFavorites = async () => {
    const favorite = await favouriteImage();
    setFavorites([...favorites, favorite]);
    setIsFavorite(true);
  };

  const isCatFavorite = (catId) => {
    return favorites.some((fav) => fav.id === catId);
  };

  return (
    <div>
      <div className="home">
        <h1>Cats</h1>
      </div>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          marginTop: "10px",
          justifyContent: "center",
        }}
      >
        <BoxComponent
          breed={cat ? cat.breeds[0].name : "No info"}
          image={cat ? cat.url : "No info"}
          temperament={cat ? cat.breeds[0].temperament : "No info"}
          onAddToFavorites={handleAddToFavorites}
          onGetRandomImage={handleGetRandomImage}
          isFavorite={isFavorite}
        />
      </div>
    </div>
  );
};

export default Cats;
