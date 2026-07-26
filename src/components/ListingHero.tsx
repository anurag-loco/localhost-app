import { FunctionComponent } from "react";
import { Box, Typography, Button } from "@mui/material";
import Icontrend from "./Icontrend";

export type ListingHeroType = {
  className?: string;
};

const ListingHero: FunctionComponent<ListingHeroType> = ({
  className = "",
}) => {
  return (
    <section
      className={`w-full flex flex-row items-start justify-start flex-wrap content-start gap-[1.75rem] max-w-[83.75rem] text-left text-[1.813rem] text-Dark font-archivo mq1350:max-w-full ${className}`}
    >
      <Box className="flex-1 flex flex-col items-start justify-start gap-[0.937rem] min-w-[31.25rem] mq800:min-w-full">
        <img
          className="self-stretch h-[27.375rem] rounded-lg max-w-full overflow-hidden shrink-0 object-cover min-h-[27.375rem]"
          loading="lazy"
          alt=""
          src="/frame-9@2x.png"
        />
        <Box className="self-stretch h-[5.375rem] rounded-lg overflow-x-auto shrink-0 flex flex-row items-start justify-start gap-[0.625rem]">
          <img
            className="h-[5.375rem] w-[10rem] shrink-0 object-cover"
            loading="lazy"
            alt=""
            src="/frame-46@2x.png"
          />
          <img
            className="h-[5.375rem] w-[10rem] shrink-0 object-cover"
            loading="lazy"
            alt=""
            src="/frame-47@2x.png"
          />
          <img
            className="h-[5.375rem] w-[10rem] shrink-0 object-cover"
            loading="lazy"
            alt=""
            src="/frame-48@2x.png"
          />
          <img
            className="h-[5.375rem] w-[10rem] shrink-0 object-cover"
            loading="lazy"
            alt=""
            src="/frame-49@2x.png"
          />
          <Box className="w-[10rem] relative h-[5.375rem] shrink-0">
            <Box className="absolute h-full top-[0rem] bottom-[0rem] left-[0rem] w-[9.275rem]">
              <img
                className="absolute top-[0rem] left-[0rem] rounded w-full h-full overflow-hidden object-cover"
                alt=""
                src="/frame-50@2x.png"
              />
              <img
                className="absolute top-[1.913rem] left-[4.025rem] w-[1.981rem] h-[1.538rem] z-[1]"
                loading="lazy"
                alt=""
                src="/vector.svg"
              />
            </Box>
          </Box>
        </Box>
      </Box>
      <Box className="flex-[0.888] rounded-6xs bg-White border-Light-grey-border border-solid border-[1px] box-border flex flex-col items-center justify-center !pt-[2.187rem] !pb-[2.187rem] !pl-[1.687rem] !pr-[1.687rem] gap-[1.75rem] min-w-[20.938rem] max-w-[31.25rem] mq450:flex-1 mq800:!pt-[1.438rem] mq800:!pb-[1.438rem] mq800:box-border mq800:max-w-full">
        <Box className="self-stretch flex flex-col items-start justify-start gap-[1.75rem]">
          <Box className="self-stretch flex flex-col items-start justify-start gap-[1.062rem]">
            <Box className="self-stretch flex flex-col items-start justify-start gap-[0.75rem]">
              <Box className="self-stretch flex flex-row items-center justify-start gap-[0.375rem] mq450:flex-wrap">
                <Box className="flex-1 flex flex-col items-start justify-start gap-[0.375rem] min-w-[16.313rem]">
                  <Typography
                    className="!m-0 self-stretch relative mq450:text-[1.438rem]"
                    variant="inherit"
                    component="h2"
                    sx={{ fontWeight: "600", letterSpacing: "0.02em" }}
                  >
                    Brightwoods Cabin
                  </Typography>
                  <Box className="relative text-[1rem] tracking-[0.02em]">
                    Bridlepath, Ontario, Canada
                  </Box>
                </Box>
                <img
                  className="h-[2.25rem] w-[2.25rem] relative"
                  loading="lazy"
                  alt=""
                  src="/hearticon.svg"
                />
              </Box>
              <Box className="flex flex-row items-center justify-start gap-[0.375rem] text-[1rem]">
                <Box className="flex flex-row items-center justify-start gap-[0.187rem]">
                  <Box className="relative tracking-[0.02em] font-semibold">
                    5.0
                  </Box>
                  <img
                    className="h-[1rem] w-[1rem] relative"
                    loading="lazy"
                    alt=""
                    src="/vector-1.svg"
                  />
                </Box>
                <Box className="border-Light-grey-border border-solid border-l-[1px] flex flex-row items-center justify-start !pt-[0rem] !pb-[0rem] !pl-[0.437rem] !pr-[0.437rem] text-Accent">
                  <Box className="relative [text-decoration:underline] tracking-[0.02em]">
                    200 Reviews
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box className="self-stretch relative text-[1rem] tracking-[0.02em] leading-[160%]">{`Welcome to our cozy cabin retreat nestled in the heart of Bridlepath, Ontario! Surrounded by lush landscapes and tranquil trails, this charming getaway offers the perfect blend of rustic elegance and modern comfort. `}</Box>
          </Box>
          <Box className="self-stretch flex flex-col items-start justify-start gap-[1.25rem] text-[2.25rem]">
            <Box className="self-stretch flex flex-row items-center justify-between gap-[0rem] mq450:flex-wrap">
              <Box className="h-[2.438rem] w-[8.625rem] flex flex-row items-start justify-start !pt-[0rem] !pb-[0.031rem] !pl-[0rem] !pr-[0rem] box-border gap-[0.187rem]">
                <Typography
                  className="w-[5.5rem] relative inline-block mq450:text-[1.375rem] mq800:text-[1.813rem]"
                  variant="inherit"
                  component="b"
                  sx={{ letterSpacing: "0.02em", fontWeight: "700" }}
                >
                  $658
                </Typography>
                <Box className="flex flex-col items-start justify-start !pt-[1.156rem] !pb-[0rem] !pl-[0rem] !pr-[0rem] text-[1.125rem]">
                  <Box className="w-[3rem] relative tracking-[0.02em] inline-block">
                    /night
                  </Box>
                </Box>
              </Box>
              <Box className="flex flex-row items-center justify-start gap-[0.375rem] text-[1rem] text-Accent">
                <Icontrend />
                <Box className="relative tracking-[0.02em]">
                  Best time to Book
                </Box>
              </Box>
            </Box>
            <Button
              className="self-stretch !pt-[1rem] !pb-[1rem] !pl-[1.187rem] !pr-[1.187rem]"
              disableElevation
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#fff",
                fontSize: "16",
                background: "#00c29f",
                borderRadius: "6px",
                "&:hover": { background: "#00c29f" },
              }}
            >
              Book this home
            </Button>
          </Box>
        </Box>
        <Box className="self-stretch flex flex-col items-start justify-start gap-[0.75rem] text-[1rem] text-Light-Text">
          <Box className="relative tracking-[0.02em]">Hosted by:</Box>
          <Box className="self-stretch border-Light-grey-border border-solid border-t-[0.7px] flex flex-row items-center justify-start !pt-[0.437rem] !pb-[0rem] !pl-[0rem] !pr-[0rem] gap-[0.625rem] text-Dark mq450:flex-wrap">
            <img
              className="h-[3.125rem] w-[3.125rem] relative rounded-[50%] object-cover"
              loading="lazy"
              alt=""
              src="/ellipse-2@2x.png"
            />
            <Box className="flex-1 flex flex-col items-start justify-start gap-[0.125rem] min-w-[10.563rem]">
              <Box className="relative tracking-[0.02em] leading-[150%] font-semibold">
                Michelle Ward
              </Box>
              <Box className="relative text-[0.875rem] tracking-[0.02em] text-gray-200">
                Joined in May 2021
              </Box>
            </Box>
            <Box className="rounded-mid bg-lightcyan flex flex-row items-center justify-start !pt-[0.5rem] !pb-[0.5rem] !pl-[0.687rem] !pr-[0.687rem] gap-[0.312rem] text-Accent">
              <img
                className="h-[1.15rem] w-[0.769rem] relative"
                loading="lazy"
                alt=""
                src="/vector-2.svg"
              />
              <Box className="relative tracking-[-0.01em] font-medium">
                Superhost
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </section>
  );
};

export default ListingHero;
