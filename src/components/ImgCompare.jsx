import { Box, Button, Card, CardMedia, LinearProgress, makeStyles, Typography } from '@material-ui/core';

import React from 'react';
import picasso_style from "../img/picasso_style.jpg";
import pig_content from "../img/pig_content.jpg";
import pigcasso from "../img/pigcasso.png";


const useStyles = makeStyles({
    progress: {
        width: '200px',
    },
    img: {
        width: '256px',
        height: '256px',
        margin: '10px 5px 10px 5px',
    },
    card: {
        margin: '10px 5px 10px 5px',
    }
});

export const ImgCompare = ({ progress }) => {
    const classes = useStyles();
    const itemData = [
        {
            img: picasso_style,
            title: 'Style Image',
            bottom:
                (<Typography align="center" gutterBottom variant="h5" component="h2">
                    Picasso Style Image
                </Typography>),
        },
        {
            img: pig_content,
            title: 'Content Image',
            bottom: (<Button
                variant="contained"
                component="label"
            >
                Upload File
                <input
                    type="file"
                    hidden
                    id="image"
                />
            </Button>),
        },
        {
            img: pigcasso,
            title: 'Output',
            bottom: (
                <Box display="flex" alignItems="center" flexDirection="column">
                    <LinearProgress variant="determinate" value={progress} className={classes.progress} />
                    <Typography>{progress + "%"}</Typography>
                </Box>
            ),
        },
    ];

    return (
        <div >
            <Box p={1} bgcolor="grey.300" margin='10px' borderRadius="10px" display="flex" width="auto">
                {itemData.map((imgSrc) => {
                    console.log(imgSrc);
                    return (
                        <Card className={classes.card}>
                            <Box display="flex" flexDirection="column" alignItems="center">
                                <Typography align="center" gutterBottom variant="h5" component="h2">
                                    {imgSrc.title}
                                </Typography>
                                <CardMedia className={classes.img} image={imgSrc.img} />
                                {imgSrc.bottom}
                            </Box>
                        </Card>
                    )
                })}

            </Box>

        </div>
    )
}
