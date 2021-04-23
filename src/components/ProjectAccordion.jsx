import React from 'react';
import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link } from 'react-router-dom';

export const ProjDescription = ({ title, description, link }) => {
    return (
        <div>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography className="h2">{title}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Box display="flex" flexDirection="column" alignItems="flex-start" padding="10px">
                        <Typography>
                            {description}
                        </Typography>
                        <Link to={link}>
                                Check out this project:
                        </Link>
                    </Box>
                </AccordionDetails>
            </Accordion>
        </div>
    )
}
