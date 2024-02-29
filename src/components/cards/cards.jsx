// import useFetch from "../../hooks/useFetch";
import "./cards.css";
import { MdFavoriteBorder, MdBathroom, MdBedroomChild } from "react-icons/md";
import { FaBed } from "react-icons/fa";
import data from '../../utilities/dat.json'
import { MdOutlineFavorite } from "react-icons/md";

const Cards = () => {
  const url = 'https://airbnb13.p.rapidapi.com/search-location?location=Nairobi&checkin=2024-03-01&checkout=2024-03-09&adults=1&children=0&infants=0&pets=0&page=1&currency=USD';
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'bc18349b97msh36bcb6d8cd60e1cp17ad72jsna7367a9c1e00',
      'X-RapidAPI-Host': 'airbnb13.p.rapidapi.com'
    }
  };



  console.log(data)
  const favorites = JSON.parse(localStorage.getItem('favorites')) || []
  
  const handleFavorites = (item) =>{

   

    function checkIfItemExists (checkedItem){
      let exists = false
      favorites.forEach((favorite)=>{
        if (checkedItem === favorite) {
          exists = true
        }
      })
      return exists
    }

    const result = checkIfItemExists(item)
    if (result) {
      alert('Item already exists')
      console.log('Item exists')
    } else {
      console.log(result)
      favorites.push(item)
      localStorage.setItem('favorites', JSON.stringify(favorites))
    }
    
  }


  return (
    <div className="card-section">
      {data.results.map((item) => {
        return (
          <div key={item.id} className="card">
            <div className="card-image">
              <img src={item.images[0]} />
            </div>
            <div className="card-text">
              <div className="price">
                <p>{item.price.currency} {item.price.rate}</p>
                <button className="button-fav" onClick={()=>handleFavorites(item)}>
                  <MdFavoriteBorder color="red"/>
                  <MdOutlineFavorite color="red"/>
                </button>
              </div>
              <h3 className="item-name">{item.name}</h3>
              <p className="item-city">{item.city}</p>
              <div className="item-utils">
                <div>
                  <MdBathroom /> {item.bathrooms}
                </div>
                <div>
                  <FaBed /> {item.beds}
                </div>
                <div>
                  <MdBedroomChild /> {item.bedrooms}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cards;