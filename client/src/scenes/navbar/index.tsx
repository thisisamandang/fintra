import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Box, Typography, useTheme } from "@mui/material";
import FlexBetween from "@/components/FlexBetween";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";

type Props = {};

const Navbar = (props: Props) => {
  const { palette } = useTheme();
  const [selected, setSelected] = useState("dashboard");
  return (
    <FlexBetween mb="0.2rem" p="0.5rem 0rem" color={palette.grey[300]}>
      {/* Left side */}
      <FlexBetween gap="0.65rem">
        <LocalAtmIcon sx={{ fontSize: "32px" }} />
        <Typography variant="h4" fontSize="16px">
          Finance
        </Typography>
      </FlexBetween>
      {/* Right side */}
      <FlexBetween gap="2rem">
        <Box sx={{ "&:hover": { color: palette.secondary[100] } }}>
          <Link
            to="/"
            onClick={() => setSelected("dashboard")}
            style={{
              color: selected === "dashboard" ? "inherit" : palette.grey[700],
              textDecoration: "inherit",
            }}
          >
            dashboard
          </Link>
        </Box>
        <Box sx={{ "&:hover": { color: palette.secondary[100] } }}>
          <Link
            to="/predictions"
            onClick={() => setSelected("predictions")}
            style={{
              color: selected === "predictions" ? "inherit" : palette.grey[700],
              textDecoration: "inherit",
            }}
          >
            predictions
          </Link>
        </Box>
      </FlexBetween>
    </FlexBetween>
  );
};

export default Navbar;
