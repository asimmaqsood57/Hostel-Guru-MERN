import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import HostelOwnerHostelsCards from "./HostelOwnerHostelsCards";
import { useContext, useEffect } from "react";
import HostelContext from "../context/HostelContext";
const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function HostelOwnerHostels() {
  const context = useContext(HostelContext);

  const { getHostelsForSingleHostelOwner, singleHostelOwnerhostels } = context;

  useEffect(() => {
    getHostelsForSingleHostelOwner();

    // eslint-disable-next-line
  }, []);

  return (
    <Box sx={{ width: "100%" }}>
      <Grid container rowSpacing={5} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {singleHostelOwnerhostels.length === 0
          ? "You have not  registered hostel yet"
          : singleHostelOwnerhostels.map((item, index) => {
              return (
                <Grid item xs={6} key={index}>
                  <Item>
                    <HostelOwnerHostelsCards item={item} />
                  </Item>
                </Grid>
              );
            })}
      </Grid>
    </Box>
  );
}