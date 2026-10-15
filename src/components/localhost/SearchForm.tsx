import { FunctionComponent, useState } from 'react';

export type SearchFormProps = {
  className?: string;
  onSearch?: (searchData: SearchData) => void;
};

export type SearchData = {
  accommodation: string;
  checkIn: string;
  checkOut: string;
  guests: string;
};

/**
 * Search form component for finding accommodations
 * Includes accommodation type, dates, and guest count selection
 */
const SearchForm: FunctionComponent<SearchFormProps> = ({ 
  className = "",
  onSearch 
}) => {
  const [searchData, setSearchData] = useState<SearchData>({
    accommodation: '',
    checkIn: '',
    checkOut: '',
    guests: ''
  });

  const handleInputChange = (field: keyof SearchData, value: string) => {
    setSearchData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSearch = () => {
    if (onSearch) {
      onSearch(searchData);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div 
      className={`
        bg-white w-full max-w-5xl flex items-start justify-center 
        pt-2 px-3 pb-2 gap-2 rounded-lg shadow-lg
        lg:flex-wrap ${className}
      `}
      role="search"
      aria-label="Search for accommodations"
    >
      {/* Accommodation Input */}
      <div className="flex-1 rounded bg-white border border-gray-300 overflow-hidden flex items-start justify-between py-3 px-3 gap-5 min-w-36 min-h-14">
        <input 
          className="w-full border-none outline-none font-roboto text-sm bg-transparent text-black p-0"
          placeholder="Accommodation"
          type="text"
          value={searchData.accommodation}
          onChange={(e) => handleInputChange('accommodation', e.target.value)}
          onKeyDown={handleKeyDown}
          aria-label="Enter accommodation type"
        />
        <img 
          className="h-6 w-6" 
          alt="accommodation icon" 
          src="/icon-home.svg" 
        />
      </div>

      {/* Check-in Input */}
      <div className="w-48 rounded bg-white border border-gray-300 flex items-start justify-between py-3 px-3 gap-5">
        <div className="flex flex-col items-start pt-px">
          <input
            className="border-none outline-none font-roboto text-sm bg-transparent text-gray-600 w-full"
            placeholder="Check-in"
            type="date"
            value={searchData.checkIn}
            onChange={(e) => handleInputChange('checkIn', e.target.value)}
            onKeyDown={handleKeyDown}
            aria-label="Select check-in date"
          />
        </div>
        <img 
          className="h-6 w-6" 
          alt="calendar icon" 
          src="/CalendarTodayFilled.svg" 
        />
      </div>

      {/* Check-out Input */}
      <div className="w-48 rounded bg-white border border-gray-300 flex items-start justify-between py-3 px-3 gap-5">
        <div className="flex flex-col items-start pt-px">
          <input
            className="border-none outline-none font-roboto text-sm bg-transparent text-gray-600 w-full"
            placeholder="Check-out"
            type="date"
            value={searchData.checkOut}
            onChange={(e) => handleInputChange('checkOut', e.target.value)}
            onKeyDown={handleKeyDown}
            aria-label="Select check-out date"
          />
        </div>
        <img 
          className="h-6 w-6" 
          alt="calendar icon" 
          src="/CalendarTodayFilled.svg" 
        />
      </div>

      {/* Guest Selection */}
      <div className="w-48 rounded bg-white border border-gray-300 overflow-hidden flex items-start justify-between py-3 px-3 gap-5">
        <div className="flex flex-col items-start pt-px flex-1">
          <select
            className="border-none outline-none font-roboto text-sm bg-transparent text-gray-600 w-full cursor-pointer"
            value={searchData.guests}
            onChange={(e) => handleInputChange('guests', e.target.value)}
            aria-label="Select number of guests"
          >
            <option value="">Guest</option>
            <option value="1">1 Guest</option>
            <option value="2">2 Guests</option>
            <option value="3">3 Guests</option>
            <option value="4">4 Guests</option>
            <option value="5+">5+ Guests</option>
          </select>
        </div>
        <img 
          className="h-6 w-6" 
          alt="guest icon" 
          src="/icon-user.svg" 
        />
      </div>

      {/* Search Button */}
      <button 
        className="cursor-pointer border-none py-4 px-7 bg-accent rounded overflow-hidden flex items-start gap-2 hover:bg-opacity-90 transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
        onClick={handleSearch}
        onKeyDown={handleKeyDown}
        aria-label="Search accommodations"
      >
        <div className="flex flex-col items-start pt-1">
          <img 
            className="w-5 h-5" 
            alt="search" 
            src="/icon-search.svg" 
          />
        </div>
        <div className="text-base tracking-wide leading-7 font-medium font-archivo text-white text-center">
          Search
        </div>
      </button>
    </div>
  );
};

export default SearchForm;
