import { FunctionComponent } from "react";
import { Box } from "@mui/material";

export type ColumnOneType = {
  className?: string;
  amenities01Icon?: string;
  label?: string;
  amenities02Icon?: string;
  label1?: string;
  amenities03Icon?: string;
  label2?: string;
  amenities04Icon?: string;
  label3?: string;
};

const ColumnOne: FunctionComponent<ColumnOneType> = ({
  className = "",
  amenities01Icon,
  label,
  amenities02Icon,
  label1,
  amenities03Icon,
  label2,
  amenities04Icon,
  label3,
}) => {
  return (
    <Box
      className={`flex-1 flex flex-col items-start justify-start gap-[0.875rem] min-w-[15.625rem] text-left text-[1rem] text-Dark font-archivo ${className}`}
    >
      <Box className="self-stretch flex flex-row items-center justify-start gap-[0.625rem]">
        <img
          className="h-[1.313rem] w-[1.25rem] relative overflow-hidden shrink-0"
          loading="lazy"
          alt=""
          src={amenities01Icon}
        />
        <Box className="flex-1 relative">{label}</Box>
      </Box>
      <Box className="self-stretch flex flex-row items-center justify-start gap-[0.625rem]">
        <img
          className="h-[1.25rem] w-[1.25rem] relative overflow-hidden shrink-0"
          loading="lazy"
          alt=""
          src={amenities02Icon}
        />
        <Box className="flex-1 relative">{label1}</Box>
      </Box>
      <Box className="self-stretch flex flex-row items-center justify-start gap-[0.625rem]">
        <img
          className="h-[1.25rem] w-[1.25rem] relative overflow-hidden shrink-0"
          loading="lazy"
          alt=""
          src={amenities03Icon}
        />
        <Box className="flex-1 relative">{label2}</Box>
      </Box>
      <Box className="self-stretch flex flex-row items-center justify-start gap-[0.625rem]">
        <img
          className="h-[1.25rem] w-[1.25rem] relative overflow-hidden shrink-0"
          loading="lazy"
          alt=""
          src={amenities04Icon}
        />
        <Box className="flex-1 relative">{label3}</Box>
      </Box>
    </Box>
  );
};

export default ColumnOne;
