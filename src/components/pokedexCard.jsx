import React from 'react';
import { Card, CardContent, Typography, Button, Grid } from '@mui/material';

const PokedexCard = ({ pokemon, onPrevClick, onNextClick }) => {
    return (
        <Card>
            <CardContent>
                <Typography variant="h5" component="div">
                    {pokemon.name}
                </Typography>
                {/* Otras informaciones del Pokémon */}
            </CardContent>
            <Grid container justifyContent="space-between">
                <Button variant="contained" color="primary" onClick={onPrevClick}>
                    Anterior
                </Button>
                <Button variant="contained" color="primary" onClick={onNextClick}>
                    Siguiente
                </Button>
            </Grid>
        </Card>
    );
};

export default PokedexCard;
