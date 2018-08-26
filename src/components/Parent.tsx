import * as React from "react";
import {Child} from "./Child";
const img = require('../../assets/imageFile.jpg');

export class Parent extends React.Component<{}, {}> {
    render() {
        var imageObj = new Image();
        imageObj.src = img;
        return (
            <div>
                <Child image={imageObj} blurred={false}/>
                <Child image={imageObj} blurred={true}/>
            </div>
        )
    }
}