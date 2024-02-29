import { useEffect, useState } from "react"
import { MdBathroom, MdBedroomChild } from "react-icons/md";
import { FaBed } from "react-icons/fa";
import './favorites.css'
import '../../utilities/dat.json'

const FavSection = ()=>{
    const [ favItems, setFav] = useState([])

    const fetchFavorites = ()=>{
        const data = JSON.parse(localStorage.getItem('favorites'))
        setFav(data)
    }

    useEffect(()=>{
        fetchFavorites()
    }, [])

    return (
        <div className="favs">
            {favItems.map((item)=>{
                    return (
                        <div key={item.id} className="card">
                            <div className="card-image">
                               <img src={item.images[0]}/>
                            </div>
                            <div className="card-text">
                               <div className="price">
                               <p>{item.price.currency} {item.price.rate}</p>
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
                
                    )
                })
            }
        </div>
    )
}

export default FavSection