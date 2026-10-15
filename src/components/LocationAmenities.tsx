import { FunctionComponent } from "react";
import { Typography, Box, Button } from "@mui/material";
import ColumnOne from "./ColumnOne";

export type LocationAmenitiesType = {
  className?: string;
};

const LocationAmenities: FunctionComponent<LocationAmenitiesType> = ({
  className = "",
}) => {
  return (
    <Box
      className={`self-stretch flex flex-row items-start justify-start flex-wrap content-start gap-[1.187rem] text-left text-[1.5rem] text-Dark font-archivo ${className}`}
    >
      <Box className="flex-1 flex flex-col items-start justify-start gap-[1.25rem] min-w-[31.25rem] mq800:min-w-full">
        <Typography
          className="!m-0 w-[48.8rem] relative inline-block mq450:text-[1.188rem]"
          variant="inherit"
          component="h3"
          sx={{ fontWeight: "600", letterSpacing: "0.02em" }}
        >
          Amenities
        </Typography>
        <Box className="self-stretch flex flex-col items-start justify-start gap-[1.937rem] text-[1rem] mq450:gap-[0.938rem]">
          <Box className="w-full flex flex-row items-start justify-start flex-wrap content-start gap-[0.312rem] max-w-[80rem] mq1350:max-w-full">
            <ColumnOne
              amenities01Icon="/amenities01icon.svg"
              label="Lakeside"
              amenities02Icon="/amenities02icon.svg"
              label1="Kitchen"
              amenities03Icon="/amenities03icon.svg"
              label2="Security cameras on property"
              amenities04Icon="/amenities04icon.svg"
              label3="Wifi"
            />
            <ColumnOne
              amenities01Icon="/amenities05icon.svg"
              label="Free parking"
              amenities02Icon="/amenities06icon.svg"
              label1="Outdoor shower"
              amenities03Icon="/amenities07icon.svg"
              label2="Hot water"
              amenities04Icon="/amenities08icon.svg"
              label3="Shampoo"
            />
            <ColumnOne
              amenities01Icon="/amenities09icon.svg"
              label="Fire Extinguisher"
              amenities02Icon="/amenities10icon.svg"
              label1="Freezer"
              amenities03Icon="/amenities11icon.svg"
              label2="Coffee Maker"
              amenities04Icon="/amenities12icon.svg"
              label3="Glass stove"
            />
          </Box>
          <Button
            className="!pt-[0.687rem] !pb-[0.687rem] !pl-[1.187rem] !pr-[1.187rem] hover:bg-saddlebrown"
            disableElevation
            variant="outlined"
            sx={{
              textTransform: "none",
              color: "#171e1d",
              fontSize: "16",
              borderColor: "#171e1d",
              borderRadius: "6px",
              "&:hover": { borderColor: "#171e1d" },
            }}
          >
            Show all amenities
          </Button>
        </Box>
      </Box>
      <Box className="w-[31.25rem] flex flex-col items-start justify-start">
        <Box className="self-stretch flex flex-col items-start justify-start relative gap-[1.25rem]">
          <Box className="self-stretch flex flex-row items-center justify-between gap-[0rem] [row-gap:20px] z-[0] mq450:flex-wrap">
            <Box className="flex-1 flex flex-col items-start justify-start gap-[0.312rem] min-w-[14.063rem]">
              <Typography
                className="!m-0 relative mq450:text-[1.188rem]"
                variant="inherit"
                component="h3"
                sx={{ fontWeight: "600", letterSpacing: "0.02em" }}
              >
                Where you’ll be
              </Typography>
              <Box className="flex flex-row items-center justify-start gap-[0.375rem] text-[1rem]">
                <img
                  className="h-[0.688rem] w-[0.581rem] relative"
                  alt=""
                  src="/vector-3.svg"
                />
                <Box className="relative">The Bridle Path</Box>
              </Box>
            </Box>
            <Box className="w-[9.625rem] rounded-xl flex flex-row items-start justify-start !pt-[0.125rem] !pb-[0.125rem] !pl-[0rem] !pr-[0rem] box-border gap-[1.5rem] text-center text-[0.625rem]">
              <Box className="flex flex-row items-start justify-start gap-[0.625rem] text-left text-[1rem]">
                <img
                  className="h-[2.938rem] w-[2.938rem] relative"
                  loading="lazy"
                  alt=""
                  src="/suncloud.svg"
                />
                <Box className="flex-1 flex flex-col items-start justify-start gap-[0.125rem]">
                  <Box className="relative tracking-[0.02em] leading-[150%] font-semibold">
                    20°C
                  </Box>
                  <Box className="relative text-[0.875rem] tracking-[0.02em] text-gray-200">
                    Broken clouds
                  </Box>
                </Box>
              </Box>
              <Box className="hidden flex-col items-start justify-start gap-[0.5rem]">
                <Box className="flex flex-col items-start justify-start gap-[0.5rem]">
                  <img
                    className="w-[2.5rem] relative h-[2.5rem]"
                    alt=""
                    src="/sun.svg"
                  />
                  <Box className="flex flex-col items-center justify-start">
                    <Typography
                      className="w-[2.5rem] relative inline-block"
                      variant="inherit"
                      component="b"
                      sx={{ fontWeight: "700" }}
                    >
                      23°C
                    </Typography>
                  </Box>
                </Box>
                <Box className="flex flex-col items-center justify-start">
                  <Box className="w-[2.5rem] relative inline-block">Sun</Box>
                  <Box className="w-[2.5rem] relative inline-block">27 Aug</Box>
                </Box>
              </Box>
              <Box className="hidden flex-col items-start justify-start gap-[0.5rem]">
                <Box className="flex flex-col items-start justify-start gap-[0.5rem]">
                  <img
                    className="w-[2.5rem] h-[2.5rem] relative"
                    alt=""
                    src="/suncloud-1.svg"
                  />
                  <Box className="flex flex-col items-center justify-start">
                    <Typography
                      className="w-[2.5rem] relative inline-block"
                      variant="inherit"
                      component="b"
                      sx={{ fontWeight: "700" }}
                    >
                      22°C
                    </Typography>
                  </Box>
                </Box>
                <Box className="flex flex-col items-center justify-start">
                  <Box className="w-[2.5rem] relative inline-block">Mon</Box>
                  <Box className="w-[2.5rem] relative inline-block">28 Aug</Box>
                </Box>
              </Box>
              <Box className="hidden flex-col items-start justify-start gap-[0.5rem]">
                <Box className="flex flex-col items-start justify-start gap-[0.5rem]">
                  <img
                    className="w-[2.5rem] h-[2.5rem] relative"
                    alt=""
                    src="/sun.svg"
                  />
                  <Box className="flex flex-col items-center justify-start">
                    <Typography
                      className="w-[2.5rem] relative inline-block"
                      variant="inherit"
                      component="b"
                      sx={{ fontWeight: "700" }}
                    >
                      23°C
                    </Typography>
                  </Box>
                </Box>
                <Box className="flex flex-col items-center justify-start">
                  <Box className="w-[2.5rem] relative inline-block">Tue</Box>
                  <Box className="w-[2.5rem] relative inline-block">29 Aug</Box>
                </Box>
              </Box>
              <Box className="hidden flex-col items-start justify-start gap-[0.5rem]">
                <Box className="flex flex-col items-start justify-start gap-[0.5rem]">
                  <img
                    className="w-[2.5rem] h-[2.5rem] relative"
                    alt=""
                    src="/suncloud-1.svg"
                  />
                  <Box className="flex flex-col items-center justify-start">
                    <Typography
                      className="w-[2.5rem] relative inline-block"
                      variant="inherit"
                      component="b"
                      sx={{ fontWeight: "700" }}
                    >
                      20°C
                    </Typography>
                  </Box>
                </Box>
                <Box className="flex flex-col items-center justify-start">
                  <Box className="w-[2.5rem] relative inline-block">Wed</Box>
                  <Box className="w-[2.5rem] relative inline-block">30 Aug</Box>
                </Box>
              </Box>
              <Box className="hidden flex-col items-start justify-start gap-[0.5rem]">
                <Box className="flex flex-col items-start justify-start gap-[0.5rem]">
                  <img
                    className="w-[2.5rem] h-[2.5rem] relative"
                    alt=""
                    src="/suncloud-1.svg"
                  />
                  <Box className="flex flex-col items-center justify-start">
                    <Typography
                      className="w-[2.5rem] relative inline-block"
                      variant="inherit"
                      component="b"
                      sx={{ fontWeight: "700" }}
                    >
                      19°C
                    </Typography>
                  </Box>
                </Box>
                <Box className="flex flex-col items-center justify-start">
                  <Box className="w-[2.5rem] relative inline-block">Thu</Box>
                  <Box className="w-[2.5rem] relative inline-block">31 Aug</Box>
                </Box>
              </Box>
              <Box className="hidden flex-col items-start justify-start gap-[0.5rem]">
                <Box className="flex flex-col items-start justify-start gap-[0.5rem]">
                  <img
                    className="w-[2.5rem] h-[2.5rem] relative"
                    alt=""
                    src="/sun.svg"
                  />
                  <Box className="flex flex-col items-center justify-start">
                    <Typography
                      className="w-[2.5rem] relative inline-block"
                      variant="inherit"
                      component="b"
                      sx={{ fontWeight: "700" }}
                    >
                      24°C
                    </Typography>
                  </Box>
                </Box>
                <Box className="flex flex-col items-center justify-start">
                  <Box className="w-[2.5rem] relative inline-block">Fri</Box>
                  <Box className="w-[2.5rem] relative inline-block">1 Sep</Box>
                </Box>
              </Box>
            </Box>
          </Box>
          <img
            className="[border:none] self-stretch h-[15.5rem] relative rounded-lg max-w-full overflow-hidden shrink-0 object-cover z-[1]"
            alt=""
            src="/map1@2x.png"
          />
          <Box className="w-[2.313rem] !!m-[0 important] absolute right-[0.625rem] bottom-[0.625rem] rounded bg-White overflow-hidden flex flex-col items-end justify-start !pt-[0.556rem] !pb-[1.087rem] !pl-[0.687rem] !pr-[0.687rem] box-border gap-[0.881rem] z-[2]">
            <Box className="!mr-[-0.732rem] w-[2.406rem] h-[1.538rem] relative z-[2]">
              <img
                className="absolute top-[0rem] left-[0.738rem] w-[0.938rem] h-[0.938rem]"
                alt=""
                src="/group-3.svg"
              />
              <img
                className="absolute top-[1.475rem] left-[0rem] w-[2.406rem] h-[0.063rem]"
                alt=""
                src="/marker-pin.svg"
              />
            </Box>
            <img
              className="w-[0.938rem] relative h-[0rem] z-[1]"
              alt=""
              src="/group-4.svg"
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default LocationAmenities;
