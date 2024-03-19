import React, { useState, useEffect } from 'react';
import BreedBox from "../../components/BreedsBox";
import { TheCatAPI } from "@thatapicompany/thecatapi";
   
    const Breeds = () => {
      const [breeds, setBreeds] = useState([]);
      const [breedsName, setBreedsName] = useState([]);
      const apiKey = process.env.REACT_APP_API_KEY;
      const theCatAPI = new TheCatAPI(apiKey);
      const [breedImageRef, setBreedImageRef] = useState("");
      const [breedImage, setBreedImage] = useState(""); 
      const [selectedBreed, setSelectedBreed] = useState(null);

      const getBreeds = async () => { 
      try {
      const fetchBreeds= await fetch(
        "https://api.thecatapi.com/v1/breeds?limit=100&page=0",
      {headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey,
      },
    }
      );
      const breedData = await fetchBreeds.json();
      return breedData;
    } catch (error) {
      alert("Error fetching breed list");
    }
  };

  useEffect(() => {
    const fetchAllBreeds = async () => {
      const response = await getBreeds();
      const breeds = await response.map(({ name, id }) => ({ name, id }));
      setBreeds(breeds);
      setBreedsName(response.map((breed) => breed.name));
    }

    fetchAllBreeds();
    }, []);

     const breedById = async (breedId) => {
      try {
        const response = await fetch(
          "https://api.thecatapi.com/v1/breeds/" + breedId,
          {
            headers: {
              "Content-Type": "application/json",
            },
          });
        const data = await response.json();
        return data;
      } catch (error) {
        alert(error);
      }
    };
    
    const onBreedHandler = async (value) => {
      if (!value) {
        return;
      }
      const breed = breeds.find((breed) => breed.name === value);
      const response = await breedById(breed.id);
      setSelectedBreed(response);
      console.log(response);
      setBreedImageRef(response.reference_image_id);
    };


    const getImageById = async (imageId) => {
      try {
        const response = await theCatAPI.images.getImage(imageId);
        return response;
      } catch (error) {
        alert(error);
      }
    };


    useEffect(() => {
      const getBreedImage = async () => {
        const response = await getImageById(breedImageRef);
        setBreedImage(response.url)
        
      };
      getBreedImage();
    }, [breedImageRef]);

      return (
        <div >
           <div className="home">
          
          <h1>Breeds</h1>
       </div>
          <BreedBox 
          breeds={breedsName} 
          onBreedHandler={onBreedHandler}
          selectedBreed={selectedBreed} 
          image={breedImage} 
           /> 
        </div>
      );
    };
    
    export default Breeds;