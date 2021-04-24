import { Box, Button, Card, CardMedia, LinearProgress, makeStyles, Typography } from '@material-ui/core';

import React, { useEffect, useState } from 'react';
import picasso_style from "../img/picasso_style.jpg";
import pig_content from "../img/pig_content.jpg";
import pigcasso from "../img/pigcasso.png";
import test from "../processing_data/test.png"
const axios = require('axios');



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
    },
    button: {
        width: "auto",
        margin: "5px"
    }
});

export const ImgCompare = ({ }) => {

    const [contentFile, setContentFile] = useState(pig_content);
    const [viewDisabled, setViewDisabled] = useState(true);
    const [outputImage, setOutputImage] = useState(pigcasso);
    const [progress, setProgress] = useState(0)
    const [updateOutput, setUpdateOutput] = useState(false)
    useEffect(() => {
        axios.get('http://127.0.0.1:5000/api/pct')
            .then((res) =>
                setProgress(res.data.iterations));
    }, [])

    useEffect(() => {
        if (updateOutput) {
            console.log("setting output")
            setOutputImage(test);
        }
    }, [contentFile])

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
            img: contentFile,
            title: 'Content Image',
            bottom: (
                <div>
                    <input
                        accept="image/*"
                        className={classes.button}
                        hidden
                        id="raised-button-file"
                        multiple
                        type="file"
                        onClick={() => setViewDisabled(false)}
                    />
                    <label htmlFor="raised-button-file">
                        <Button variant="contained" component="span" className={classes.button}>
                            Upload Image
                    </Button>
                    </label>
                    <Button
                        variant="contained"
                        component="span"
                        className={classes.button}
                        disabled={viewDisabled}
                        onClick={() => {
                            try {
                                setUpdateOutput(true);
                                setContentFile(URL.createObjectURL(document.getElementById("raised-button-file").files[0]));
                                axios.post("http://127.0.0.1:5000/api/processImage",
                                    { path: document.getElementById("raised-button-file").files[0].path }
                                )
                                    .then(function (response) {
                                        alert("Done!")
                                    })
                                    .catch(function (error) {
                                        alert(error)
                                        console.log(error);
                                    })
                                    .then(function () {
                                        // always executed
                                    });
                            }
                            catch (err) {
                                alert("No file Uploaded");
                                setViewDisabled(true);
                            }

                        }}
                    >
                        Display Image
                    </Button>
                </div>),

        },
        {
            img: outputImage,
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
