import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import PokemonDialog from "./PokemonDialog.jsx";
import Box from "@material-ui/core/Box";

export default function PokemonCard({ pokemon }) {
  const [openDialog, setOpenDialog] = useState(false);

  const handleClick = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const imageSrc =
    pokemon.sprites.front_default ||"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10206.png";


  return (
    <Card>
      <CardContent
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          height={200}
          sx={{ overflow: "hidden" }}
        >
          <img
            src={imageSrc}
            alt={pokemon.name}
            style={{
              height: "auto",
              maxWidth: "100%",
            }}
          />
        </Box>
        <Typography gutterBottom variant="h5" component="div">
          <strong>{pokemon.name}</strong>
        </Typography>
        <Button variant="contained" color="primary" onClick={handleClick}>
          More
        </Button>
      </CardContent>
      <PokemonDialog
        open={openDialog}
        onClose={handleCloseDialog}
        pokemon={pokemon}
      />
    </Card>
  );
}
