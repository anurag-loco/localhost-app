import { FunctionComponent, useMemo, type CSSProperties } from "react";
import { Box } from "@mui/material";

export type SocialMediaLoginType = {
  className?: string;
  label?: string;
  socialLoginImage?: string;
  socialLoginImage1?: string;
  socialLoginImage2?: string;

  /** Style props */
  socialLoginContainerPadding?: CSSProperties["padding"];
};

const SocialMediaLogin: FunctionComponent<SocialMediaLoginType> = ({
  className = "",
  label,
  socialLoginContainerPadding,
  socialLoginImage,
  socialLoginImage1,
  socialLoginImage2,
}) => {
  const socialLoginContainerStyle: CSSProperties = useMemo(() => {
    return {
      padding: socialLoginContainerPadding,
    };
  }, [socialLoginContainerPadding]);

  return (
    <Box
      className={`self-stretch flex flex-col items-start justify-start gap-[0.625rem] text-left text-[1rem] text-Dark font-archivo ${className}`}
    >
      <Box className="self-stretch relative tracking-[0.02em] leading-[160%]">
        {label}
      </Box>
      <Box
        className="self-stretch flex flex-row items-start justify-start flex-wrap content-start gap-[0.875rem] text-center text-Light-Text"
        style={socialLoginContainerStyle}
      >
        <Box className="flex-1 rounded-lg bg-whitesmoke-100 flex flex-col items-center justify-start !p-[1.562rem] box-border gap-[1.125rem] min-w-[7.813rem]">
          <img
            className="w-[2.5rem] h-[2.531rem] relative object-cover"
            loading="lazy"
            alt=""
            src={socialLoginImage}
          />
          <Box className="w-[8.05rem] relative tracking-[0.24px] flex items-center justify-center">
            Google
          </Box>
        </Box>
        <Box className="flex-1 rounded-lg bg-whitesmoke-100 flex flex-col items-center justify-start !p-[1.562rem] box-border gap-[1.125rem] min-w-[7.813rem]">
          <img
            className="w-[2.5rem] h-[2.531rem] relative object-cover"
            alt=""
            src={socialLoginImage1}
          />
          <Box className="relative tracking-[0.24px]">Facebook</Box>
        </Box>
        <Box className="flex-1 rounded-lg bg-whitesmoke-100 flex flex-col items-center justify-start !p-[1.562rem] box-border gap-[1.125rem] min-w-[7.813rem]">
          <img
            className="w-[2.5rem] h-[2.531rem] relative object-cover"
            alt=""
            src={socialLoginImage2}
          />
          <Box className="w-[8.05rem] relative tracking-[0.24px] flex items-center justify-center">
            Apple
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SocialMediaLogin;
