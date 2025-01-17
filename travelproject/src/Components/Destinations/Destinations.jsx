import React, { useEffect } from 'react'
import './Destinations.css'

//Import Icons
import { MdLocationPin } from "react-icons/md";
import { BsFillCreditCardFill } from "react-icons/bs";
import { BsFillCalendarDateFill } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import { TiLocation } from "react-icons/ti";

//Import Images
import image1 from '../../Assets/image11.jpg'
import image2 from '../../Assets/image9.jpg'
import image3 from '../../Assets/image12.jpg'
import image4 from '../../Assets/image.jpg'
import image5 from '../../Assets/image5.jpg'
import image6 from '../../Assets/image6.jpg'
import image7 from '../../Assets/image7.jpg'
import image8 from '../../Assets/image13.jpg'


//Import animation
import Aos from 'aos'
import 'aos/dist/aos.css'

//Create array that is gonna contain all Destination data and Loop through

const destinations = [
  {
    id: 1,
    img: image1,
    name: 'Seychelles Island',
    location: 'Indian Ocean',
    rating: 4.7,
  },
  {
    id: 2,
    img: image2,
    name: 'Bora bora Island',
    location: 'Polynesia',
    rating: 4.3,
  },
  {
    id: 3,
    img: image3,
    name: 'Maldives Island',
    location: 'Indian Ocean',
    rating: 4.9,
  },
  {
    id: 4,
    img: image4,
    name: 'Santorini Island',
    location: 'Greece',
    rating: 4.5,
  },
  {
    id: 5,
    img: image5,
    name: 'Bali Island',
    location: 'Indonesia',
    rating: 4.9,
  },
  {
    id: 6,
    img: image6,
    name: 'Maui Island',
    location: 'Hawaii, USA',
    rating: 4.9,
  },
  {
    id: 7,
    img: image7,
    name: 'Capri Island',
    location: 'Italy',
    rating: 4.7,
  },
  {
    id: 8,
    img: image8,
    name: 'Fiji Island',
    location: 'South Pacific',
    rating: 4.4,
  },
]

export const Destinations = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])
  return (
    <div className='destination section container'>
      <div className="secContainer">
        <div className="secTitle">
          <span className="redText" data-aos='fade-up'>
            EXPLORE NOW
          </span>
          <h3 data-aos='fade-up'>
            Find Your Dream Destination
          </h3>
          <p data-aos='fade-up'>
            Fill in the fields below to find the best spot for your next tour.
          </p>
        </div>

        <div className="searchField grid">
          <div className="inputField flex" data-aos='fade-up'>
            <MdLocationPin className='icon' />
            <input type="text" placeholder='Location' />
          </div>

          <div className="inputField flex" data-aos='fade-up'>
            <BsFillCreditCardFill className='icon' />
            <input type="text" placeholder='Budget' />
          </div>

          <div className="inputField flex" data-aos='fade-up'>
            <BsFillCalendarDateFill className='icon' />
            <input type="text" placeholder='Date' />
          </div>

          <button className='btn flex' data-aos='fade-up'>
            <BiSearchAlt className='icon' /> Search
          </button>
        </div>

        <div className="secMenu">
          <ul className="flex" data-aos='fade-up'>
            <li className="active">All</li>
            <li>Recommended</li>
            <li>Beach</li>
            <li>Park</li>
            <li>Nature</li>
            <li>Mountain</li>
          </ul>
        </div>

        <div className="destinationContainer grid">
          {destinations.map(destination => {
            return (
              <div className="singleDestination" key={destination.id} data-aos='fade-up'>
                <div className="imgDiv" data-aos='fade-up'>
                  <img src={destination.img} alt="Destination Image" />
                  <div className="descInfo flex">
                    <div className="text">
                      <span className="name">{destination.name}</span>
                      <p className='flex'><TiLocation className='icon' />{destination.location}</p>
                    </div>
                    <span className="rating">{destination.rating}</span>
                  </div>
                </div>


              </div>
            )
          })}

        </div>
      </div>
    </div>
  )
}
