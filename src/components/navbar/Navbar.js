import { Button, Typography } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import React from "react";
import AppBar from "@mui/material/AppBar";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Box } from "@mui/system";

const Navbar = () => {
  return (
    <Box sx={{ flexgrow: 1 }}>
      <AppBar>
        <Toolbar>
          {<ShoppingCartIcon />}
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            upGrad E-shop
          </Typography>
          <Button color="inherit">Login</Button>
          <Button color="inherit">Sign up</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
