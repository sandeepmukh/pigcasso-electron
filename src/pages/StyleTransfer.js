
import React from "react";
import { Link } from "react-router-dom";
import { ImgCompare } from "../components/ImgCompare.jsx"
import { Box } from "@material-ui/core"
 
export default class StyleTransfer extends React.Component {
  render() {
    return (
      <Box display="flex" flexDirection="column" alignItems="center">
        <h1>Pigcassos</h1>
        <ImgCompare />
        <Link to="/">Go back to home</Link>
      </Box>
    );
  }
}