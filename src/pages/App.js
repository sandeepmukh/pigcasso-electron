import React from "react";
import { Link } from "react-router-dom";
import { ProjDescription } from "../components/ProjectAccordion.jsx"
 
const description = "hi"
export default class App extends React.Component {

  render() {
    return (
      <div>
        <h1>Home page</h1>
        <Link to="/styletransfer">Go back to profile</Link>
        <ProjDescription title="Pigcassos" description={description} link="/StyleTransfer"/>
      </div>
    );
  }
}