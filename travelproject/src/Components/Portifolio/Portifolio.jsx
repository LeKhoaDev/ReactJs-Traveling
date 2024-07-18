import React, { useEffect } from 'react'
import './Portifolio.css'

//imoport assets
import icon1 from '../../Assets/protection.png'
import icon2 from '../../Assets/destination.png'
import icon3 from '../../Assets/online-chat.png'
import image from '../../Assets/gridImage.jpg'

//Import animation
import Aos from 'aos'
import 'aos/dist/aos.css'

export const Portifolio = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])
  return (
    <div className='portifolio section container'>
      <div className="secContainer grid">
        <div className="leftContent">
          <div className="secHeading">
            <h3 data-aos='fade-up'>Why Should You Choose Us</h3>
            <p data-aos='fade-up'>we have extensive knowledge and experience in the travel industry.</p>
          </div>

          <div className="grid">
            <div className="singlePortifolio flex">
              <div className="iconDiv">
                <img src={icon1} alt="Icon image" />
              </div>

              <div className='info' data-aos='fade-up'>
                <h4 data-aos='fade-up'>Safety and support</h4>
                <p data-aos='fade-up'>Our top priority is the safety and well-being of out clients. We maintain hight safety standards anh have emergency support
                  avaiable during the trip.
                </p>
              </div>
            </div>

            <div className="singlePortifolio flex" data-aos='fade-up'>
              <div className="iconDiv">
                <img src={icon2} alt="Icon image" />
              </div>

              <div className='info'>
                <h4>Diverse Range of Destinations</h4>
                <p>whether it's a domestic tour or an international adventure, we cover a wide range of destinations to cater to
                  differents interests and preferences.
                </p>
              </div>
            </div>

            <div className="singlePortifolio flex" data-aos='fade-up'>
              <div className="iconDiv">
                <img src={icon3} alt="Icon image" />
              </div>

              <div className='info'>
                <h4>24/7 Customer Support</h4>
                <p>Our dedicated customer support team is available round the clock to address any queries or concerns before, during, and after the trip.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="rightContent" data-aos='fade-down'>
          <img src={image} alt="Image" />
        </div>
      </div>
    </div>
  )
}
