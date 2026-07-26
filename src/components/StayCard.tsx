import { FunctionComponent, useMemo, type CSSProperties } from "react";
import { Box } from "@mui/material";

export type StayCardType = {
  className?: string;
  missisuagaAistream?: string;
  missisaugaOntarioCanada?: string;
  stayPricePerNight?: string;

  /** Style props */
  stayCardContainersBackgroundImage?: CSSProperties["backgroundImage"];
};

const StayCard: FunctionComponent<StayCardType> = ({
  className = "",
  stayCardContainersBackgroundImage,
  missisuagaAistream,
  missisaugaOntarioCanada,
  stayPricePerNight,
}) => {
  const stayCardContainersStyle: CSSProperties = useMemo(() => {
    return {
      backgroundImage: stayCardContainersBackgroundImage,
    };
  }, [stayCardContainersBackgroundImage]);

  return (
    <Box
      className={`flex-1 rounded-3xs bg-White border-Light-grey-border border-solid border-[1px] box-border overflow-hidden shrink-0 flex flex-row items-start justify-start min-w-[23.125rem] [row-gap:20px] text-left text-[0.75rem] text-Accent font-archivo mq450:flex-wrap ${className}`}
    >
      <Box
        className="self-stretch flex-1 flex flex-col items-start justify-start relative gap-[0.625rem] bg-[url('/public/stay-card-containers@3x.png')] bg-cover bg-no-repeat bg-[top] min-w-[9.375rem] max-w-[11.25rem]"
        style={stayCardContainersStyle}
      >
        <Box className="!!m-[0 important] absolute top-[0.625rem] left-[0.625rem] rounded-smi bg-White hidden flex-row items-center justify-start !pt-[0.375rem] !pb-[0.375rem] !pl-[0.437rem] !pr-[0.437rem] gap-[0.125rem] z-[0]">
          <img
            className="h-[0.625rem] w-[0.419rem] relative"
            alt=""
            src="/superhost-icon.svg"
          />
          <Box className="relative tracking-[-0.01em] font-medium">
            Superhost
          </Box>
        </Box>
        <Box className="w-[1.875rem] h-[1.875rem] absolute !!m-[0 important] top-[0.625rem] right-[0.625rem] flex items-center justify-center z-[1]">
          <img
            className="w-full h-full object-contain absolute left-[0rem] top-[0rem] [transform:scale(1.533)]"
            loading="lazy"
            alt=""
            src="/hearticon-1.svg"
          />
        </Box>
      </Box>
      <Box className="flex-[0.8737] flex flex-col items-start justify-start !p-[1rem] box-border gap-[1.25rem] min-w-[13.75rem] text-[1rem] text-Dark mq450:flex-1">
        <Box className="self-stretch flex flex-col items-start justify-start gap-[0.75rem]">
          <Box className="self-stretch flex flex-col items-start justify-start gap-[0.25rem]">
            <Box className="self-stretch relative tracking-[0.02em] font-semibold">
              {missisuagaAistream}
            </Box>
            <Box className="self-stretch relative text-[0.875rem] tracking-[0.02em] text-Light-Text">
              {missisaugaOntarioCanada}
            </Box>
          </Box>
          <Box className="flex flex-row items-center justify-start gap-[0.312rem] text-[0.875rem]">
            <Box className="relative tracking-[0.02em] font-semibold">4.8</Box>
            <img
              className="h-[0.813rem] w-[0.813rem] relative"
              loading="lazy"
              alt=""
              src="/star-icon.svg"
            />
          </Box>
        </Box>
        <Box className="self-stretch flex flex-row items-center justify-start gap-[0.125rem] text-Accent">
          <Box className="relative tracking-[0.02em] font-semibold">
            {stayPricePerNight}
          </Box>
          <Box className="flex-1 relative text-[0.875rem] tracking-[0.02em] text-Light-Text">
            /night
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default StayCard;
