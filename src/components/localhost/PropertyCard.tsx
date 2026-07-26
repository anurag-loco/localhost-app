import { FunctionComponent, useState } from 'react';

export type PropertyCardProps = {
  className?: string;
  title: string;
  location: string;
  rating: number;
  price: number;
  imageUrl: string;
  isSuperhost?: boolean;
  onFavoriteClick?: (isFavorited: boolean) => void;
  onCardClick?: () => void;
};

/**
 * Property card component displaying accommodation details
 * Includes image, title, location, rating, price, and favorite functionality
 */
const PropertyCard: FunctionComponent<PropertyCardProps> = ({
  className = "",
  title,
  location,
  rating,
  price,
  imageUrl,
  isSuperhost = false,
  onFavoriteClick,
  onCardClick
}) => {
  const [isFavorited, setIsFavorited] = useState(false);

  const handleFavoriteClick = (event: React.MouseEvent) => {
    event.stopPropagation(); // Prevent card click when clicking favorite
    const newFavoriteState = !isFavorited;
    setIsFavorited(newFavoriteState);
    if (onFavoriteClick) {
      onFavoriteClick(newFavoriteState);
    }
  };

  const handleCardClick = () => {
    if (onCardClick) {
      onCardClick();
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleCardClick();
    }
  };

  return (
    <article 
      className={`
        w-80 rounded-lg bg-white border border-light-grey-border 
        overflow-hidden flex flex-col items-start cursor-pointer
        hover:shadow-lg transition-shadow duration-300
        min-w-76 ${className}
      `}
      onClick={handleCardClick}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="button"
      aria-label={`View details for ${title}`}
    >
      {/* Image Container */}
      <div className="relative w-full h-75 overflow-hidden">
        <img 
          className="w-full h-full object-cover" 
          alt={title}
          src={imageUrl}
          loading="lazy"
        />
        
        {/* Superhost Badge */}
        {isSuperhost && (
          <div className="absolute top-3 left-3 rounded-xl bg-white flex items-center py-1.5 px-2 gap-0.5 shadow-sm">
            <img 
              className="h-2.5 w-2" 
              alt="superhost badge" 
              src="/superhost-icon1.svg" 
            />
            <span className="text-xs tracking-tight leading-2 font-medium text-accent">
              Superhost
            </span>
          </div>
        )}
        
        {/* Favorite Button */}
        <button
          className={`
            absolute top-3 right-3 h-8 w-8 flex items-center justify-center
            rounded-full transition-colors duration-200
            hover:bg-white hover:bg-opacity-20 focus:outline-none focus:ring-2 focus:ring-white
            ${isFavorited ? 'text-red-500' : 'text-white'}
          `}
          onClick={handleFavoriteClick}
          aria-label={isFavorited ? 'Remove from favorites' : 'Add to favorites'}
        >
          <img 
            className="w-6 h-6 transform scale-150" 
            alt={isFavorited ? 'favorited' : 'not favorited'}
            src="/heart-icon.svg" 
          />
        </button>
      </div>

      {/* Content */}
      <div className="w-full flex items-start py-0 px-4 pb-4 pt-4">
        <div className="flex-1 flex flex-col items-start gap-5">
          {/* Title and Rating */}
          <div className="w-full flex items-end gap-1">
            <div className="flex-1 flex flex-col items-start gap-1">
              <h3 className="w-full text-base tracking-wide leading-4 font-semibold text-dark overflow-hidden text-ellipsis whitespace-nowrap">
                {title}
              </h3>
              <p className="w-full text-sm tracking-wide leading-3.5 text-light-text overflow-hidden text-ellipsis whitespace-nowrap">
                {location}
              </p>
            </div>
            
            {/* Rating */}
            <div className="flex flex-col items-start justify-end pt-0 px-0 pb-1.5">
              <div className="flex items-center gap-1">
                <span className="text-sm tracking-wide font-semibold text-dark">
                  {rating.toFixed(1)}
                </span>
                <img 
                  className="w-3 h-3" 
                  alt="star rating" 
                  src="/star-icon.svg" 
                />
              </div>
            </div>
          </div>
          
          {/* Price */}
          <div className="text-lg tracking-wide text-dark">
            <span className="font-semibold">${price}</span>
            <span className="text-sm text-light-text">/night</span>
          </div>
        </div>
      </div>
    </article>
  );
};

export default PropertyCard;
