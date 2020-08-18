import React from "react";
import Chip from "@material-ui/core/Chip";
import { makeStyles } from "@material-ui/core/styles";


const Skill = ({label,backgroundColor,color}) => {

    return <Chip label={label} style={{backgroundColor:backgroundColor,color:color,borderRadius:0}}/>
};

export default Skill;
