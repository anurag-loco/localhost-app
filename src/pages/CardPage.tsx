import React from 'react';
import { Box } from "@mui/material";
import StayCard from '../components/StayCard';

const CardPage: React.FC = () => {
  // Sample data for different card variations
  const cardData = [
    {
      missisuagaAistream: "Brightwoods Cabins",
      missisaugaOntarioCanada: "Bridlewood, Ontario, Canada",
      stayPricePerNight: "$658",
      stayCardContainersBackgroundImage: "url('/public/listing01image@2x.png')"
    },
    {
      missisuagaAistream: "Mississauga Airstream",
      missisaugaOntarioCanada: "Mississauga, Ontario, Canada", 
      stayPricePerNight: "$502",
      stayCardContainersBackgroundImage: "url('/public/listing02image@2x.png')"
    },
    {
      missisuagaAistream: "Urban Loft Downtown",
      missisaugaOntarioCanada: "Urban Centres Bay, Ontario, Canada",
      stayPricePerNight: "$410",
      stayCardContainersBackgroundImage: "url('/public/listing03image@2x.png')"
    },
    {
      missisuagaAistream: "Forestville Cottages",
      missisaugaOntarioCanada: "Forestville, Ontario, Canada",
      stayPricePerNight: "$325",
      stayCardContainersBackgroundImage: "url('/public/listing04image@2x.png')"
    },
    {
      missisuagaAistream: "Unionville Lodge",
      missisaugaOntarioCanada: "Markham, Ontario, Canada",
      stayPricePerNight: "$485",
      stayCardContainersBackgroundImage: "url('/public/listing05image@2x.png')"
    },
    {
      missisuagaAistream: "Niagara Homes",
      missisaugaOntarioCanada: "Niagara, Ontario, Canada",
      stayPricePerNight: "$655",
      stayCardContainersBackgroundImage: "url('/public/listing06image@2x.png')"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Stay Cards Showcase</h1>
              <p className="mt-2 text-gray-600">Explore different property card layouts and designs</p>
            </div>
            <div className="flex items-center space-x-4">
              <a 
                href="/" 
                className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to Home
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Single Card Example */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Featured Stay Card</h2>
          <div className="flex justify-center">
            <div className="w-full max-w-2xl">
              <StayCard
                missisuagaAistream={cardData[0].missisuagaAistream}
                missisaugaOntarioCanada={cardData[0].missisaugaOntarioCanada}
                stayPricePerNight={cardData[0].stayPricePerNight}
                stayCardContainersBackgroundImage={cardData[0].stayCardContainersBackgroundImage}
              />
            </div>
          </div>
        </section>

        {/* Grid Layout */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Property Grid Layout</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {cardData.slice(1, 5).map((card, index) => (
              <StayCard
                key={index}
                missisuagaAistream={card.missisuagaAistream}
                missisaugaOntarioCanada={card.missisaugaOntarioCanada}
                stayPricePerNight={card.stayPricePerNight}
                stayCardContainersBackgroundImage={card.stayCardContainersBackgroundImage}
              />
            ))}
          </div>
        </section>

        {/* Horizontal Scroll Layout */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Horizontal Scroll Layout</h2>
          <div className="overflow-x-auto pb-4">
            <div className="flex space-x-6 w-max">
              {cardData.map((card, index) => (
                <div key={index} className="w-96 flex-shrink-0">
                  <StayCard
                    missisuagaAistream={card.missisuagaAistream}
                    missisaugaOntarioCanada={card.missisaugaOntarioCanada}
                    stayPricePerNight={card.stayPricePerNight}
                    stayCardContainersBackgroundImage={card.stayCardContainersBackgroundImage}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Card Variations */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Card Variations</h2>
          <div className="space-y-8">
            {/* Compact Version */}
            <div>
              <h3 className="text-lg font-medium text-gray-700 mb-4">Compact Layout</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                {cardData.slice(0, 3).map((card, index) => (
                  <StayCard
                    key={index}
                    className="transform scale-90"
                    missisuagaAistream={card.missisuagaAistream}
                    missisaugaOntarioCanada={card.missisaugaOntarioCanada}
                    stayPricePerNight={card.stayPricePerNight}
                    stayCardContainersBackgroundImage={card.stayCardContainersBackgroundImage}
                  />
                ))}
              </div>
            </div>

            {/* Large Version */}
            <div>
              <h3 className="text-lg font-medium text-gray-700 mb-4">Large Layout</h3>
              <div className="flex justify-center">
                <div className="w-full max-w-3xl">
                  <StayCard
                    className="transform scale-110"
                    missisuagaAistream={cardData[5].missisuagaAistream}
                    missisaugaOntarioCanada={cardData[5].missisaugaOntarioCanada}
                    stayPricePerNight={cardData[5].stayPricePerNight}
                    stayCardContainersBackgroundImage={cardData[5].stayCardContainersBackgroundImage}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Demo */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Interactive Demo</h2>
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <p className="text-gray-600 mb-4">
              These cards are fully interactive with hover effects and clickable elements. 
              Try hovering over the heart icon or clicking on different parts of the cards.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {cardData.slice(0, 2).map((card, index) => (
                <div key={index} className="transform transition-transform hover:scale-105">
                  <StayCard
                    missisuagaAistream={card.missisuagaAistream}
                    missisaugaOntarioCanada={card.missisaugaOntarioCanada}
                    stayPricePerNight={card.stayPricePerNight}
                    stayCardContainersBackgroundImage={card.stayCardContainersBackgroundImage}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <p className="text-gray-500">
              Card components showcase - Built with React, TypeScript, and Tailwind CSS
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CardPage;
