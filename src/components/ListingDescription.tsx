import { FunctionComponent } from "react";
import { Typography, Box } from "@mui/material";

export type ListingDescriptionType = {
  className?: string;
};

const ListingDescription: FunctionComponent<ListingDescriptionType> = ({
  className = "",
}) => {
  return (
    <Box
      className={`self-stretch border-Light-grey-border border-solid border-b-[1px] flex flex-col items-start justify-start !pt-[0rem] !pb-[1.375rem] !pl-[0rem] !pr-[0rem] gap-[1.25rem] text-left text-[1.5rem] text-Dark font-archivo ${className}`}
    >
      <Typography
        className="!m-0 self-stretch relative mq450:text-[1.188rem]"
        variant="inherit"
        component="h3"
        sx={{ fontWeight: "600", letterSpacing: "0.02em" }}
      >
        About this home
      </Typography>
      <Box className="self-stretch flex flex-row items-start justify-start flex-wrap content-start gap-[2.5rem] text-[1rem] mq800:gap-[1.25rem]">
        <Box className="flex-1 flex flex-col items-start justify-start gap-[0.5rem] min-w-[31.25rem] mq800:min-w-full">
          <Box className="self-stretch relative leading-[160%] [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:6] [-webkit-box-orient:vertical]">
            <Typography
              className="[margin-block-start:0] [margin-block-end:17px]"
              variant="inherit"
            >
              Welcome to Brightwoods Cabin, your idyllic retreat nestled in the
              heart of Bridlepath, Ontario! Our cozy cabin, surrounded by the
              tranquility of nature's embrace, is designed to provide the
              ultimate relaxing getaway.
            </Typography>
            <Typography
              className="[margin-block-start:0] [margin-block-end:17px]"
              variant="inherit"
            >
              <Typography
                variant="inherit"
                component="b"
                sx={{ fontFamily: "Archivo" }}
              >{`Living Space: `}</Typography>
              <Typography variant="inherit" component="span">
                This charming cabin boasts a spacious living area adorned with
                rustic decor and modern amenities. Enjoy the warmth of the
                wood-burning fireplace, relax on the plush sofas, and make
                yourself at home with our entertainment center featuring a
                flat-screen TV, WiFi, and more.
              </Typography>
            </Typography>
            <Typography
              className="[margin-block-start:0] [margin-block-end:17px]"
              variant="inherit"
            >
              <Typography
                variant="inherit"
                component="b"
                sx={{ fontFamily: "Archivo" }}
              >
                Bedrooms:
              </Typography>
              <Typography variant="inherit" component="span">
                {" "}
                With 3 beautifully appointed bedrooms, our cabin comfortably
                accommodates up to [number of guests]. Each room is furnished
                with luxurious bedding and unique woodland-inspired touches to
                ensure a restful slumber.
              </Typography>
            </Typography>
            <Typography
              className="[margin-block-start:0] [margin-block-end:17px]"
              variant="inherit"
            >
              <Typography
                variant="inherit"
                component="b"
                sx={{ fontFamily: "Archivo" }}
              >{`Kitchen & Dining:`}</Typography>
              <Typography variant="inherit" component="span">
                {" "}
                Our fully-equipped kitchen offers everything you need to prepare
                delicious home-cooked meals. The open dining area provides a
                welcoming space to enjoy meals with friends and family.
              </Typography>
            </Typography>
            <Typography
              className="[margin-block-start:0] [margin-block-end:17px]"
              variant="inherit"
            >
              <Typography
                variant="inherit"
                component="b"
                sx={{ fontFamily: "Archivo" }}
              >
                Bathrooms:
              </Typography>
              <Typography variant="inherit" component="span">
                {" "}
                2 modern bathrooms stocked with fresh towels, toiletries, and
                all essential amenities add to your convenience.
              </Typography>
            </Typography>
            <Typography
              className="[margin-block-start:0] [margin-block-end:17px]"
              variant="inherit"
            >
              <Typography
                variant="inherit"
                component="b"
                sx={{ fontFamily: "Archivo" }}
              >
                Outdoor Space:
              </Typography>
              <Typography variant="inherit" component="span">
                {" "}
                Step outside to a serene outdoor setting. Whether it's a morning
                coffee on the porch, a BBQ in the yard, or a soothing evening by
                the fire pit, the beauty of Bridlepath is at your doorstep.
              </Typography>
            </Typography>
            <Typography
              className="[margin-block-start:0] [margin-block-end:17px]"
              variant="inherit"
            >
              <Typography
                variant="inherit"
                component="b"
                sx={{ fontFamily: "Archivo" }}
              >
                Location:
              </Typography>
              <Typography variant="inherit" component="span">
                {" "}
                Located just minutes from [local attractions, trails, dining,
                shopping], our cabin offers the perfect base to explore the best
                of the region or simply unwind in seclusion.
              </Typography>
            </Typography>
            <Typography
              className="[margin-block-start:0] [margin-block-end:17px]"
              variant="inherit"
            >
              <Typography
                variant="inherit"
                component="b"
                sx={{ fontFamily: "Archivo" }}
              >
                Hosted with Love:
              </Typography>
              <Typography variant="inherit" component="span">
                {" "}
                We take pride in hosting our guests and are committed to making
                your stay unforgettable. We're just a call or message away
                should you need anything during your stay.
              </Typography>
            </Typography>
            <Typography className="!m-0" variant="inherit">
              Come, be our guest at [Cabin Name], and experience a piece of
              woodland serenity right here in Bridlepath, Ontario. Book now and
              make yourself at home!
            </Typography>
          </Box>
          <Box className="relative tracking-[0.46px] leading-[1.625rem] font-semibold text-Accent text-center">
            Show more
          </Box>
        </Box>
        <Box className="w-[31.25rem] flex flex-col items-start justify-start gap-[1.5rem] text-[1.125rem]">
          <Box className="flex flex-row items-center justify-start gap-[1.25rem] mq450:flex-wrap">
            <img
              className="h-[3.75rem] w-[3.75rem] relative rounded-lg overflow-hidden shrink-0"
              loading="lazy"
              alt=""
              src="/frame-65.svg"
            />
            <Box className="flex flex-col items-start justify-start gap-[0.125rem]">
              <Box className="relative tracking-[0.02em] leading-[150%] font-semibold">
                Dedicated workspace
              </Box>
              <Box className="relative text-[1rem] tracking-[0.02em] text-gray-200">
                A private room equipped with WiFi
              </Box>
            </Box>
          </Box>
          <Box className="self-stretch flex flex-row items-center justify-start gap-[1.25rem] mq450:flex-wrap">
            <img
              className="h-[3.75rem] w-[3.75rem] relative rounded-lg overflow-hidden shrink-0"
              loading="lazy"
              alt=""
              src="/frame-65-1.svg"
            />
            <Box className="flex-1 flex flex-col items-start justify-start gap-[0.125rem] min-w-[17.063rem]">
              <Box className="self-stretch relative tracking-[0.02em] leading-[150%] font-semibold">
                Self check-in
              </Box>
              <Box className="self-stretch relative text-[1rem] tracking-[0.02em] text-gray-200">
                Check in with just your phone
              </Box>
            </Box>
          </Box>
          <Box className="self-stretch flex flex-row items-center justify-start gap-[1.25rem] mq450:flex-wrap">
            <img
              className="h-[3.75rem] w-[3.75rem] relative rounded-lg overflow-hidden shrink-0"
              loading="lazy"
              alt=""
              src="/frame-65-2.svg"
            />
            <Box className="flex-1 flex flex-col items-start justify-start gap-[0.125rem] min-w-[17.063rem]">
              <Box className="self-stretch relative tracking-[0.02em] leading-[150%] font-semibold">
                Free cancellation
              </Box>
              <Box className="self-stretch relative text-[1rem] tracking-[0.02em] text-gray-200">
                Cancel anytime
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ListingDescription;
