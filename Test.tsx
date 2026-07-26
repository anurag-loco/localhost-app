import { FunctionComponent } from "react";
import { Typography, Box } from "@mui/material";

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
    const a = 'b'
  return (
    <Box
        sx={{
            backgroundColor: "red",
        }}

      className={`sdasdas flex-1 flex flex-col items-start justify-start gap-3.5 min-w-[250px] text-left text-base text-[#171e1d] font-[Archivo] ${className}`}
    >
      <Box className="self-stretch flex flex-row items-center justify-start gap-2.5">
        <img
        onClick={() => {
            console.log(a)
        }}
          className="adsd h-[21px] w-5 relative overflow-hidden shrink-0"
          loading="lazy"
          alt=""
          src={amenities01Icon}
        />
        <Typography
          className="flex-1 relative"
          variant="inherit"
          variantMapping={{ inherit: "div" }}
          sx={{ fontWeight: "400" }}
        >
          {label}
        </Typography>
      </Box>
      <Box className="self-stretch flex flex-row items-center justify-start gap-2.5">
        <img
          className="h-5 w-5 relative overflow-hidden shrink-0"
          loading="lazy"
          alt=""
          src={amenities02Icon}
        />
        <Typography
          className="flex-1 relative"
          variant="inherit"
          variantMapping={{ inherit: "div" }}
          sx={{ fontWeight: "400" }}
        >
          {label1}
        </Typography>
      </Box>
      <Box className="self-stretch flex flex-row items-center justify-start gap-2.5">
        <img
          className="h-5 w-5 relative overflow-hidden shrink-0"
          loading="lazy"
          alt=""
          src={amenities03Icon}
        />
        <Typography
          className="flex-1 relative"
          variant="inherit"
          variantMapping={{ inherit: "div" }}
          sx={{ fontWeight: "400" }}
        >
          {label2}
        </Typography>
      </Box>
      <Box className="self-stretch flex flex-row items-center justify-start gap-2.5">
        <img
          className="h-5 w-5 relative overflow-hidden shrink-0"
          loading="lazy"
          alt=""
          src={amenities04Icon}
        />
        <Typography
          className="flex-1 relative"
          variant="inherit"
          variantMapping={{ inherit: "div" }}
          sx={{ fontWeight: "400" }}
        >
          {label3}
        </Typography>
      </Box>
    </Box>
  );
};

export default ColumnOne;

