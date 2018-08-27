import * as React from "react";
import {Child} from "./Child";
const img = require('../../assets/imageFile.jpg');

let imageObj:HTMLImageElement;

export class Parent extends React.Component<{}, {}> {
    
    constructor(props:any){
        super(props)
        imageObj = new Image();
        imageObj.src = img;
    }



    render() {
        return (
            <div>
                <Child image={imageObj} blurred={false}/>
                <Child image={imageObj} blurred={true}/>
            </div>
        )
    }
}