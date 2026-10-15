import { FunctionComponent, useCallback, useState } from "react";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

export type ListingItemType = {
  className?: string;
  listing01Image?: string;
  showSuperhostTag?: boolean;
  listingTitle?: string;
  listingSubtitle?: string;
  rating?: string;
  price?: string;

  /** Action props */
  onListingItemContainerClick?: () => void;
};

const ListingItem: FunctionComponent<ListingItemType> = ({
  className = "",
  onListingItemContainerClick,
  listing01Image = "/listing01image@2x.png",
  showSuperhostTag = true,
  listingTitle = "Brightwoods Cabin",
  listingSubtitle = "Bridlepath, Ontario, Canada",
  rating = "5.0",
  price = "$658",
}) => {
  const navigate = useNavigate();
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = useCallback(() => {
    setIsClicked(true);
    
    // Add a small delay for the click animation
    setTimeout(() => {
      if (onListingItemContainerClick) {
        onListingItemContainerClick();
      } else {
        navigate("/property-details");
      }
    }, 150);
  }, [navigate, onListingItemContainerClick]);

  return (
    <Box
      className={`flex-1 rounded-3xs bg-White border-Light-grey-border border-solid border-[1px] box-border overflow-hidden flex flex-col items-start justify-start relative min-w-[19.188rem] cursor-pointer text-left text-[0.75rem] text-Accent font-archivo transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-gray-200 hover:-translate-y-1 hover:scale-[1.02] active:scale-[0.98] active:shadow-md ${isClicked ? 'scale-[0.95] shadow-sm' : ''} ${className}`}
      onClick={handleClick}
      sx={{
        '&:hover': {
          '& img:first-of-type': {
            transform: 'scale(1.05)',
          }
        },
        '& img:first-of-type': {
          transition: 'transform 0.3s ease-in-out',
        }
      }}
    >
      <img
        className="self-stretch h-[18.75rem] max-w-full overflow-hidden shrink-0 object-cover z-[0] transition-transform duration-300 ease-in-out"
        alt={listingTitle}
        src={listing01Image}
      />
      {!!showSuperhostTag && (
        <Box className="!!m-[0 important] absolute top-[0.625rem] left-[0.625rem] rounded-smi bg-White flex flex-row items-center justify-start !p-[0.375rem] gap-[0.125rem] z-[1] transition-all duration-200 ease-in-out hover:bg-gray-50">
          <img
            className="w-[0.419rem] relative h-[0.625rem]"
            alt=""
            src="/superhost-icon.svg"
          />
          <Box className="relative tracking-[-0.01em] font-medium">
            Superhost
          </Box>
        </Box>
      )}
      <Box className="w-[1.875rem] h-[1.875rem] absolute !!m-[0 important] top-[0.625rem] right-[0.625rem] flex items-center justify-center z-[2] transition-all duration-200 ease-in-out hover:scale-110">
        <img
          className="w-full h-full object-contain absolute left-[0rem] top-[0rem] [transform:scale(1.533)] transition-transform duration-200 ease-in-out"
          loading="lazy"
          alt=""
          src="/heart-icon@2x.png"
        />
      </Box>
      <Box className="self-stretch flex flex-col items-start justify-start !p-[1rem] gap-[0.875rem] z-[3] text-[1rem] text-Dark">
        <Box className="self-stretch flex flex-row items-center justify-start gap-[0.25rem] mq450:flex-wrap">
          <Box className="flex-1 flex flex-col items-start justify-start gap-[0.25rem] min-w-[9.938rem]">
            <Box className="self-stretch relative tracking-[0.02em] leading-[1rem] font-semibold overflow-hidden text-ellipsis whitespace-nowrap transition-colors duration-200 ease-in-out hover:text-[#00c29f]">
              {listingTitle}
            </Box>
            <Box className="self-stretch relative text-[0.875rem] tracking-[0.02em] leading-[0.875rem] text-Light-Text overflow-hidden text-ellipsis whitespace-nowrap">
              {listingSubtitle}
            </Box>
          </Box>
          <Box className="w-[2.625rem] flex flex-row items-center justify-start !pt-[0rem] !pb-[0rem] !pl-[0rem] !pr-[0.125rem] box-border gap-[0.312rem] text-[0.875rem]">
            <Box className="relative tracking-[0.02em] font-semibold">
              {rating}
            </Box>
            <img
              className="h-[0.813rem] w-[0.813rem] relative transition-transform duration-200 ease-in-out hover:scale-110"
              loading="lazy"
              alt=""
              src="/star-icon.svg"
            />
          </Box>
        </Box>
        <Box className="self-stretch h-[1.75rem] flex flex-row items-center justify-start text-[1.188rem] mq450:h-auto">
          <Box className="flex-1 flex flex-row items-center justify-start gap-[0.125rem] mq450:flex-wrap">
            <Box className="relative tracking-[0.02em] font-semibold transition-colors duration-200 ease-in-out hover:text-[#00c29f]">
              {price}
            </Box>
            <Box className="relative text-[0.875rem] tracking-[0.02em] text-Light-Text">
              /night
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ListingItem;
