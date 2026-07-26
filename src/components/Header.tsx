import { FunctionComponent, useMemo, type CSSProperties } from "react";
import { Box } from "@mui/material";

export type HeaderType = {
  className?: string;
  logo?: string;

  /** Style props */
  headerPadding?: CSSProperties["padding"];
};

const Header: FunctionComponent<HeaderType> = ({
  className = "",
  headerPadding,
  logo,
}) => {
  const headerStyle: CSSProperties = useMemo(() => {
    return {
      padding: headerPadding,
    };
  }, [headerPadding]);

  return (
    <header
      className={`self-stretch bg-White border-Light-grey-border border-solid border-b-[1px] flex flex-col items-center justify-start !pt-[0.875rem] !pb-[0.75rem] !pl-[1.875rem] !pr-[1.875rem] top-[0] z-[99] sticky text-left text-[0.875rem] text-black font-archivo ${className}`}
      style={headerStyle}
    >
      <Box className="w-full flex flex-row items-center justify-between flex-wrap content-center !pt-[0rem] !pb-[0rem] !pl-[1.25rem] !pr-[1.25rem] box-border gap-x-[0rem] gap-y-[1.25rem] max-w-[86.25rem] mq1350:max-w-full">
        <img
          className="h-[2.531rem] w-[9.75rem] relative"
          loading="lazy"
          alt=""
          src={logo}
        />
        <Box className="flex flex-row items-start justify-end gap-[1.875rem] min-w-[14.375rem]">
          <Box className="relative">Home</Box>
          <Box className="relative">Stays</Box>
          <Box className="relative">Become a host</Box>
        </Box>
      </Box>
    </header>
  );
};

export default Header;
