import React from "react";
import { Inputs } from './style'
export const Input = (props) =>{

    return (
        
        
        <Inputs 
        type={props.type}
        value={props.value}
        onChange={props.onChange}
        />
        

    )


}