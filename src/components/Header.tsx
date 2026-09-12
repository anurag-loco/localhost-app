import { FunctionComponent, type CSSProperties } from "react";
import { Box } from "@mui/material";

export type HeaderType = {
  className?: string;
  logo?: string;

  /** Style props */
  headerPadding?: CSSProperties["padding"];
};

const colors = {
  background: "#ffffff",
  foreground: "#111111",
  muted: "#7c7c7c",
  border: "#acacac",
  accent: "#111111",
};

const Header: FunctionComponent<HeaderType> = ({
  className = "",
  headerPadding,
  logo,
}) => {
  const focusStyles = {
    outline: `2px solid ${colors.accent}`,
    outlineOffset: 2,
  };

  return (
    <header
      className={className}
      style={{
        padding: headerPadding,
        position: "sticky",
        top: 0,
        zIndex: 99,
        fontFamily: "sans-serif",
        background: colors.background,
        color: colors.foreground,
        borderBottom: `1px solid ${colors.border}`,
      }}
    >
      <div>Changed</div>
      <Box
        sx={{
          maxWidth: 1380,
          minHeight: 72,
          mx: "auto",
          px: { xs: 2, sm: 4 },
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 2,
        }}
      >
        <img
          src={logo}
          alt=""
          loading="lazy"
          style={{
            width: 148,
            height: 38,
            objectFit: "contain",
            objectPosition: "left center",
          }}
        />
        <Box
          component="nav"
          aria-label="Primary navigation"
          sx={{ display: "flex", alignItems: "center", gap: 1.5 }}
        >
          <Box
            role="group"
            aria-label="Primary pages"
            sx={{
              p: 0.5,
              bgcolor: "rgba(17, 17, 17, 0.04)",
              borderRadius: 2.5,
              display: { xs: "none", sm: "inline-flex" },
              alignItems: "center",
            }}
          >
            <Box
              component="a"
              href="#"
              aria-current="page"
              sx={{
                px: 2,
                py: 0.75,
                borderRadius: "7px",
                border: `1px solid ${colors.border}`,
                bgcolor: colors.background,
                color: colors.foreground,
                textDecoration: "none",
                fontSize: 14,
                fontWeight: 600,
                lineHeight: 1.75,
                "&:focus-visible": focusStyles,
              }}
            >
              Home
            </Box>
            <Box
              component="a"
              href="#"
              sx={{
                px: 2,
                py: 0.75,
                borderRadius: "7px",
                color: colors.muted,
                textDecoration: "none",
                fontSize: 14,
                fontWeight: 600,
                lineHeight: 1.75,
                "&:hover": {
                  color: colors.foreground,
                  bgcolor: "rgba(17, 17, 17, 0.04)",
                },
                "&:focus-visible": focusStyles,
              }}
            >
              Stays
            </Box>
          </Box>
          <Box
            component="a"
            href="#"
            sx={{
              px: 2.25,
              py: 1,
              borderRadius: 2,
              bgcolor: colors.accent,
              color: colors.background,
              textDecoration: "none",
              fontSize: 14,
              fontWeight: 600,
              lineHeight: 1.75,
              whiteSpace: "nowrap",
              transition: "opacity 180ms ease",
              "&:hover": { opacity: 0.88 },
              "&:focus-visible": {
                outline: `2px solid ${colors.accent}`,
                outlineOffset: 3,
              },
            }}
          >
            Become a host
          </Box>
        </Box>
      </Box>
    </header>
  );
};

export default Header;
