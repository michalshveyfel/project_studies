import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import PrizesSum from "./PrizesSum";
import BasicButtons from "./NavigateButton";
import SaleButtons from "./navigateSaleBotton";


export default function AppBarPage({ numOfSelectedPrizes, children }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ textAlign: "center" }}>
        <Toolbar>
          {numOfSelectedPrizes >= 0 && (
            <PrizesSum numOfSelectedPrizes={numOfSelectedPrizes} />
          )}
          {children}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            ברוכים הבאים למכירה הסינית
            <p style={{ margin: "0px" }}>מגשימים לכם חלומות</p>
          </Typography>
          <BasicButtons></BasicButtons>
          <SaleButtons></SaleButtons>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
