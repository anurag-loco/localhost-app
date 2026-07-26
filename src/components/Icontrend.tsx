import { FunctionComponent } from "react";
import { Box } from "@mui/material";

export type IcontrendType = {
  className?: string;
};

const Icontrend: FunctionComponent<IcontrendType> = ({ className = "" }) => {
  return (
    <Box className={`w-[1.375rem] relative h-[1.375rem] ${className}`}>
      <Box className="absolute h-[81.82%] w-[93.64%] top-[9.09%] right-[3.18%] bottom-[9.09%] left-[3.18%]">
        <img
          className="absolute h-[43.33%] w-[63.11%] top-[28.89%] right-[18.45%] bottom-[27.78%] left-[18.45%] rounded-12xs-5 max-w-full overflow-hidden max-h-full"
          loading="lazy"
          alt=""
          src="/icon.svg"
        />
        <Box className="absolute h-full w-full top-[0%] right-[-7.28%] bottom-[-8.33%] left-[0%] rounded-9xs-5 border-Accent border-solid border-[1.5px] box-border z-[1]" />
      </Box>
    </Box>
  );
};

export default Icontrend;
