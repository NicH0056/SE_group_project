import { Handle } from "react-flow-renderer"

const diamond = ({data}) => {
    return(
        <div className="diamond" contentEditable="true">
            <Handle
            type="target"
            position="left"
            style={{top: '0%'}}
            id="leftHandle"
            contentEditable="false"
            />
            <Handle
            type="source"
            position="right"
            style={{top: '100%'}}
            id="rightHandle"
            contentEditable="false"
            />
            <Handle
            type="source"
            position="top"
            style={{left: '100%'}}
            id="topHandle"
            contentEditable="false"
            />
            <Handle
            type="source"
            position="bottom"
            style={{left: '0%'}}
            id="bottomHandle"
            contentEditable="false"
            />
        </div>
    )
};

const rectangle = ({data}) => {
    return(
        <div className="rectangle" contentEditable="true">
            <Handle
            type="target"
            position="left"
            id="leftHandle"
            contentEditable="false"
            />
            <Handle
            type="source"
            position="right"
            id="rightHandle"
            contentEditable="false"
            />
        </div>
    )
};
const circle = ({data}) => {
    return(
        <div className="circle" contentEditable="true">
            <Handle
            type="target"
            position="left"
            id="leftHandle"
            contentEditable="false"
            />
            <Handle
            type="source"
            position="right"
            id="rightHandle"
            contentEditable="false"
            />
        </div>
    )
};

const nodeTypes ={
    diamond: diamond,
    rectangle: rectangle,
    circle: circle
};

export default nodeTypes;