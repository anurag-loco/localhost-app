import { FunctionComponent } from "react";
import { Typography, Box } from "@mui/material";
import StayCard from "./StayCard";

export type SimilarStaysSectionType = {
  className?: string;
};

const SimilarStaysSection: FunctionComponent<SimilarStaysSectionType> = ({
  className = "",
}) => {
  return (
    <section
      className={`w-full flex flex-col items-start justify-start gap-[1.25rem] max-w-[83.75rem] text-left text-[1.5rem] text-Dark font-archivo mq1350:max-w-full ${className}`}
    >
      <Box className="self-stretch flex flex-row items-start justify-between gap-[0rem] mq450:flex-wrap">
        <Typography
          className="!m-0 relative mq450:text-[1.188rem]"
          variant="inherit"
          component="h3"
          sx={{ fontWeight: "600", letterSpacing: "0.02em" }}
        >
          Similar stays
        </Typography>
        <Box className="relative text-[1rem] tracking-[0.46px] leading-[1.625rem] font-semibold text-Accent text-center">
          View all
        </Box>
      </Box>
      <Box className="self-stretch overflow-x-auto flex flex-row items-start justify-start flex-wrap content-start gap-[1.25rem] text-[0.75rem] text-Accent">
        <StayCard
          missisuagaAistream="Missisuaga Aistream"
          missisaugaOntarioCanada="Missisauga, Ontario, Canada"
          stayPricePerNight="$502"
        />
        <StayCard
          stayCardContainersBackgroundImage="url('/frame-91@3x.png')"
          missisuagaAistream="Urban Loft"
          missisaugaOntarioCanada="Missisauga, Ontario, Canada"
          stayPricePerNight="$499"
        />
        <StayCard
          stayCardContainersBackgroundImage="url('/frame-92@3x.png')"
          missisuagaAistream="Forestville Cottages"
          missisaugaOntarioCanada="Simcoe, Ontario Canada"
          stayPricePerNight="$600"
        />
      </Box>
    </section>
  );
};

export default SimilarStaysSection;
