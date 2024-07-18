import React, { useState, useEffect } from 'react'
import './Question.css'
import { Accordion } from './Accordion'

//Import animation
import Aos from 'aos'
import 'aos/dist/aos.css'

export const Question = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])
  const [active, setActive] = useState('How do I choose the right travel destination for me?')
  return (
    <div className='questions section container'>
      <div className="secHeading">
        <h3>Frequently Asked Questions</h3>
      </div>
      <div className="secContainer grid">
        {/* Import a component from a different file */}
        <div className="accordion grid">
          <Accordion
            title='How do I choose the right travel destination for me?'
            desc='
          Consider your interests, budget, desired experiences, and the type of
          environment to enjoy. Research destination that align with your
          preferences and offer attractions or acyivities you find appealing.'
            active={active} setActive={setActive}
          />

          <Accordion
            title='What are the best times to visit specific destination?'
            desc="Research the climate, weather patterns, and peak tourist seasons of the
            destination you're interested in. Opt for the shoulder seasons when the 
            weather is pleasant, and crowds are fewer, if possible."
            active={active} setActive={setActive}
          />

          <Accordion
            title='How can I find budget-friendly travels options and details?'
            desc="Look for travel deals, discounts on flights and accommodations, and
            consider using travel apps or websites that offer competitive prices. Being
            flexible with your travel dates can also help you find better deals."
            active={active} setActive={setActive}
          />

          <Accordion
            title='What essential items should I pack for my adventure?'
            desc="Pack appropriate clothing, toiletries, travel documents (passport, visa,
            etc,...), essential medications, and any specific gear needed for your adventure 
            (e.g., hiking boots, snorkeling gear)."
            active={active} setActive={setActive}
          />
        </div>

        <div className="form">
          <div className="secHeading">
            <h4 data-aos='fade-up'>Do you have any specific question?</h4>
            <p data-aos='fade-up'>
              Please fill the form below and our dedicated team will get intouch with you as soon as possible.
            </p>
          </div>

          <div className="formContent grid">
            <input type="email" placeholder='Enter email address' data-aos='fade-up' />
            <textarea placeholder='Enter your Question here' data-aos='fade-up'></textarea>
            <button className='btn' data-aos='fade-up'> Submit Inquiry</button>
          </div>
        </div>
      </div>
    </div>
  )
}
