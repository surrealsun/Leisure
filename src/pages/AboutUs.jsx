import '../styles/Aboutus.css'
import { motion } from 'framer-motion';
import React, { useState } from 'react';


const faqs = [
  {
    question: 'What kind of experiences does your travel agency offer?',
    answer: 'We curate unforgettable luxury journeys, from elegant train rides to secluded beach retreats, each crafted with precision and local authenticity.'
  },
  {
    question: 'Which destinations are available for booking?',
    answer: 'Our portfolio spans over 25 countries, offering iconic locations such as the Riviera Maya, Venice, Florence, Rio de Janeiro, and more.'
  },
  {
    question: 'Do you cater to private and custom experiences?',
    answer: 'Absolutely. We specialize in bespoke travel planning, tailoring every aspect of your journey to your desires.'
  },
  {
    question: 'Can I host private events or celebrations at your properties?',
    answer: 'Yes. From intimate weddings to exclusive corporate retreats, our venues provide an exquisite setting paired with world-class service.'
  },
  {
    question: 'Are culinary experiences included in the journey?',
    answer: 'Our journeys often feature gourmet dining curated by celebrated chefs, reflecting the rich culinary heritage of each destination.'
  },
  {
    question: 'Do you offer wellness and spa retreats?',
    answer: 'Yes, many of our properties offer holistic wellness programs, including spa treatments, yoga, meditation, and nature-inspired rituals.'
  },
  {
    question: 'Is there a concierge service for planning my itinerary?',
    answer: 'Our dedicated concierge team is available to craft your itinerary, ensuring every detail reflects your preferences and expectations.'
  },
  {
    question: 'Are the experiences suitable for families?',
    answer: 'We offer tailored experiences for families, including child-friendly activities, multi-generational accommodations, and enriching cultural excursions.'
  },
  {
    question: 'Can I book an entire property for private use?',
    answer: 'Yes. Select properties are available for exclusive hire, offering complete privacy and dedicated staff to serve your group.'
  },
  {
    question: 'Do you provide assistance with travel documents or visas?',
    answer: 'While we do not issue visas, we are happy to guide you on necessary documentation and connect you with premium travel assistance services.'
  }
];


const About = () => {

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <>
      <section className='img-section2'>
        <img src="/images/About/back-img.jpg" alt="Image" className='main-img' />
        <div className="img-content2">
          <motion.h1 id='h1-middle'
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
          >
            WE'VE EXPLORED THE WORLD FOR YOU,
          </motion.h1>
        </div>
      </section>
      <div className="about-container">
      <h1 className="about-title">OUR STORY</h1>
      <p className="about-text">
        Leisure was born from a passion for connecting discerning travellers with the world’s most remarkable properties, locations and journeys.
        From hotels and trains to river cruises and safari lodges, Leisure invites guests to discover a new pace of travel as they savour time,
        engage with local culture, and connect with nature and people around them through incomparable experiences and unforgettable stories.
      </p>
      <p className="about-text">
        With a legacy spanning over 45 years, since the acquisition of Hotel Cipriani in Venice in 1976, Leisure has grown into a global collection of 44 properties
        spread across 25 countries and territories. Exceptional destinations connected by legendary journeys are the very soul of Leisure, where the path
        that brings you to a place is as important as the destination itself.
      </p>
      <p className="about-text">
        As proud custodians of storied properties, Leisure is committed to building on the past to create a new legacy: the heritage of the future.
        Since 2019, Leisure has been part of the world’s leading luxury group, LVMH (Moët Hennessy Louis Vuitton).
      </p>

      <div className="faq-section">
        <h2 className="faq-title">FREQUENTLY ASKED QUESTIONS</h2>
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <div className="faq-question" onClick={() => toggleFAQ(index)}>
              {faq.question}
              <span className="faq-toggle">{openIndex === index ? '–' : '+'}</span>
            </div>
            {openIndex === index && (
              <div className="faq-answer">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default About;