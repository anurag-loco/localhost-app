import { FunctionComponent } from "react";
import { Box } from "@mui/material";
import Header from "../components/Header";
import ListingHero from "../components/ListingHero";
import ListingDescription from "../components/ListingDescription";
import LocationAmenities from "../components/LocationAmenities";
import SimilarStaysSection from "../components/SimilarStaysSection";

const PropertyDetails: FunctionComponent = () => {
  return (
    <Box className="w-full relative bg-gray-100 overflow-hidden flex flex-col items-center justify-start leading-[normal] tracking-[normal] text-left text-[1rem] text-Dark font-archivo">
      <Header headerPadding="0.875rem 1.875rem 0.75rem" logo="/logo.svg" />
      <main className="self-stretch bg-gray-100 flex flex-col items-center justify-center !pt-[1.25rem] !pb-[1.25rem] !pl-[3.125rem] !pr-[3.125rem] gap-[2.75rem] mq800:gap-[1.375rem] mq800:!pl-[1.563rem] mq800:!pr-[1.563rem] mq800:box-border">
        <ListingHero />
        <section className="w-full flex flex-col items-start justify-start gap-[1.875rem] max-w-[83.75rem] mq1350:max-w-full">
          <ListingDescription />
          <LocationAmenities />
        </section>
        <SimilarStaysSection />
      </main>
      <Box className="self-stretch bg-whitesmoke-200 flex flex-col items-center justify-start !pt-[1.25rem] !pb-[1.25rem] !pl-[1.875rem] !pr-[1.875rem]">
        <Box className="w-full flex flex-row items-start justify-start flex-wrap content-start gap-[0.625rem] max-w-[83.75rem] mq1350:max-w-full">
          <Box className="flex-1 flex flex-col items-start justify-start !pt-[1.25rem] !pb-[0rem] !pl-[0rem] !pr-[0rem] box-border gap-[1.25rem] min-w-[17.5rem]">
            <Box className="w-[26.25rem] relative text-[1.25rem] font-semibold inline-block mq450:text-[1rem]">
              Support
            </Box>
            <Box className="self-stretch relative">Help Centre</Box>
            <Box className="self-stretch relative">AirCover</Box>
            <Box className="self-stretch relative">
              Combating discrimination
            </Box>
            <Box className="self-stretch relative">
              Supporting people with disabilities
            </Box>
            <Box className="self-stretch relative">Cencellation options</Box>
          </Box>
          <Box className="flex-1 flex flex-col items-start justify-start !pt-[1.25rem] !pb-[0rem] !pl-[0rem] !pr-[0rem] box-border gap-[1.25rem] min-w-[17.5rem]">
            <Box className="w-[39.688rem] relative text-[1.25rem] font-semibold inline-block mq450:text-[1rem]">
              Hosting
            </Box>
            <Box className="self-stretch relative">Local home</Box>
            <Box className="self-stretch relative">Cover for hosts</Box>
            <Box className="self-stretch relative">Hosting resources</Box>
            <Box className="self-stretch relative">Community forum</Box>
            <Box className="self-stretch relative">Hosting responsibly</Box>
          </Box>
          <Box className="flex-1 flex flex-col items-start justify-start !pt-[1.25rem] !pb-[0rem] !pl-[0rem] !pr-[0rem] box-border gap-[1.25rem] min-w-[17.5rem]">
            <Box className="w-[80rem] relative text-[1.25rem] font-semibold inline-block mq450:text-[1rem]">
              Localhost
            </Box>
            <Box className="self-stretch relative">Newsroom</Box>
            <Box className="self-stretch relative">New Features</Box>
            <Box className="self-stretch relative">Careers</Box>
            <Box className="self-stretch relative">Investres</Box>
            <Box className="self-stretch relative">Gift cards</Box>
          </Box>
        </Box>
      </Box>
      <footer className="self-stretch border-Light-grey-border border-solid border-t-[1px] flex flex-col items-center justify-start !pt-[0.625rem] !pb-[0.75rem] !pl-[1.875rem] !pr-[1.875rem] text-left text-[0.875rem] text-black font-archivo">
        <Box className="w-full flex flex-row items-center justify-start flex-wrap content-center gap-x-[1.25rem] gap-y-[0.625rem] max-w-[83.75rem] mq1350:max-w-full">
          <Box className="flex-1 relative leading-[120%] font-light inline-block min-w-[17.5rem]">
            © 2023 Localhost, Inc. All Rights Reserved
          </Box>
          <Box className="w-[17.5rem] flex flex-row items-center justify-between flex-wrap content-center gap-x-[0rem] gap-y-[0.5rem] min-w-[17.5rem] max-w-[19.5rem] text-[0.75rem]">
            <Box className="relative leading-[120%] font-light">
              Privacy Policy
            </Box>
            <Box className="relative leading-[120%] font-light">{`Terms & Conditions`}</Box>
            <Box className="relative leading-[120%] font-light">Contact us</Box>
          </Box>
        </Box>
      </footer>
    </Box>
  );
};

export default PropertyDetails;
