import { FunctionComponent, useCallback } from "react";
import {
  Typography,
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Box,
  Button,
} from "@mui/material";
import Header from "../components/Header";
import SocialMediaLogin from "../components/SocialMediaLogin";
import { useNavigate } from "react-router-dom";

export type SignUpPageType = {
  onClose?: () => void;
};

const SignUpPage: FunctionComponent<SignUpPageType> = ({ onClose }) => {
  const navigate = useNavigate();

  const onIAlreadyHaveClick = useCallback(() => {
    navigate("/sign-in-page");
  }, [navigate]);

  return (
    <Box className="relative bg-gray-100 w-full overflow-hidden flex flex-col items-start justify-start leading-[normal] tracking-[normal] hover:[background:linear-gradient(#fff,_#fff),_#87550a]">
      <Header headerPadding="0.875rem 1.875rem" logo="/logo.svg" />
      <main className="w-[90rem] h-[64.75rem] flex flex-col items-center justify-center bg-[url('/public/login-sections1@3x.png')] bg-cover bg-no-repeat bg-[top] text-left text-[1.625rem] text-Dark font-archivo mq800:gap-[1.75rem]">
        <Box className="w-[37.5rem] rounded-lg overflow-hidden flex flex-row items-start justify-start max-w-full max-h-full">
          <Box className="flex-1 bg-White flex flex-col items-center justify-start !pt-[2.5rem] !pb-[2.5rem] !pl-[3rem] !pr-[3rem] gap-[1.5rem] mq800:!pt-[1.625rem] mq800:!pb-[1.625rem] mq800:!pl-[1.5rem] mq800:!pr-[1.5rem] mq800:box-border">
            <Typography
              className="!m-0 self-stretch relative mq450:text-[1.313rem]"
              variant="inherit"
              component="h2"
              sx={{ fontWeight: "700", letterSpacing: "0.02em" }}
            >
              Create Account
            </Typography>
            <Box className="self-stretch flex flex-col items-start justify-start gap-[2.356rem] text-center text-[1rem] mq800:gap-[1.188rem]">
              <form className="!m-0 self-stretch flex flex-col items-start justify-start gap-[1.668rem]">
                <Box className="self-stretch flex flex-col items-start justify-start gap-[0.981rem]">
                  <TextField
                    className="[border:none] bg-[transparent] self-stretch font-archivo text-[1rem] text-Light-Text"
                    placeholder="Email address"
                    variant="outlined"
                    InputProps={{
                      endAdornment: (
                        <img
                          width="20px"
                          height="20px"
                          src="/iconaccount1.svg"
                        />
                      ),
                    }}
                    sx={{
                      "& fieldset": { borderColor: "#d9d9d9" },
                      "& .MuiInputBase-root": {
                        height: "51px",
                        backgroundColor: "#fff",
                        paddingRight: "18.8px",
                      },
                      "& .MuiInputBase-input": { color: "#787878" },
                    }}
                  />
                  <TextField
                    className="[border:none] bg-[transparent] self-stretch font-archivo text-[1rem] text-Light-Text"
                    placeholder="Password"
                    variant="outlined"
                    InputProps={{
                      endAdornment: (
                        <img
                          width="20px"
                          height="20px"
                          src="/iconpassword1.svg"
                        />
                      ),
                    }}
                    sx={{
                      "& fieldset": { borderColor: "#d9d9d9" },
                      "& .MuiInputBase-root": {
                        height: "51px",
                        backgroundColor: "#fff",
                        paddingRight: "18.8px",
                      },
                      "& .MuiInputBase-input": { color: "#787878" },
                    }}
                  />
                  <TextField
                    className="[border:none] bg-[transparent] self-stretch font-archivo text-[1rem] text-Light-Text"
                    placeholder="Confirm password"
                    variant="outlined"
                    InputProps={{
                      endAdornment: (
                        <img
                          width="20px"
                          height="20px"
                          src="/iconpassword-1.svg"
                        />
                      ),
                    }}
                    sx={{
                      "& fieldset": { borderColor: "#d9d9d9" },
                      "& .MuiInputBase-root": {
                        height: "51px",
                        backgroundColor: "#fff",
                        paddingRight: "18.8px",
                      },
                      "& .MuiInputBase-input": { color: "#787878" },
                    }}
                  />
                </Box>
                <Button
                  className="w-[10rem] !pt-[0.812rem] !pb-[0.812rem] !pl-[1.25rem] !pr-[1.25rem] box-border hover:bg-saddlebrown"
                  disableElevation
                  variant="contained"
                  sx={{
                    textTransform: "none",
                    color: "#fff",
                    fontSize: "16",
                    background: "#00c29f",
                    borderRadius: "6px",
                    "&:hover": { background: "#00c29f" },
                    width: 160,
                  }}
                >
                  Sign up
                </Button>
              </form>
              <Box className="self-stretch relative border-whitesmoke-300 border-solid border-t-[1.6px] box-border h-[0.1rem]" />
              <SocialMediaLogin
                label="Or sign up with"
                socialLoginContainerPadding="0rem 0.125rem 0rem 0rem"
                socialLoginImage="/socialloginimage1@2x.png"
                socialLoginImage1="/socialloginimage-11@2x.png"
                socialLoginImage2="/socialloginimage-21@2x.png"
              />
              <Box
                className="self-stretch relative tracking-[0.02em] leading-[160%] cursor-pointer"
                onClick={onIAlreadyHaveClick}
              >
                <Typography
                  variant="inherit"
                  component="span"
                >{`I already have an account. `}</Typography>
                <Typography
                  className="text-Accent"
                  variant="inherit"
                  component="span"
                >
                  Login
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </main>
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

export default SignUpPage;
