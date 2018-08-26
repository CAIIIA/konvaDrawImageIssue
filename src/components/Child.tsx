import * as React from "react";
import { Stage, Layer} from 'react-konva';
import * as Konva from 'konva';

interface IChildProps { 
    image: HTMLImageElement; 
    blurred: boolean; 
}

export class Child extends React.Component<IChildProps, {}> {
    private konvaStage: React.RefObject<Stage>;
    private konvaLayer: React.RefObject<any>;

    constructor(props: IChildProps) {
        super(props);
        this.konvaStage = React.createRef();
        this.konvaLayer = React.createRef();
        
    }
        
    componentDidMount() {
        var img = new Konva.Image({
          image: this.props.image,
          width: 300,
          height: 250
        });
        let st: Konva.Stage = this.konvaLayer.current.getStage();
        
        if (this.props.blurred) {
          img.filters([Konva.Filters.Blur]);
          img.blurRadius(30);
          img.cache({ width: this.konvaLayer.current.getWidth(), height: this.konvaLayer.current.getHeight() });
        }
        
        this.konvaLayer.current.add(img);
        st.draw();
        }

    render() {
        let stageWithImage =
            <Stage ref={this.konvaStage} width={300} height={250}>
                <Layer ref={this.konvaLayer}></Layer>
            </Stage>
        return (<div>{ stageWithImage }</div>)
    }
}