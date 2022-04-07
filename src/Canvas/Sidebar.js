import React, { DragEvent } from 'react';
import nodeTypes from './Nodes.jsx';

const onDragStart = (event, nodeType) => {
  event.dataTransfer.setData('application/reactflow', nodeType);
  event.dataTransfer.effectAllowed = 'move';
  };
const dndOutput = () => {
      
};
const Sidebar = () => {
  return (
    <aside>
      <div className="description">You can drag these nodes to the pane on the right.</div>
      <div className="diamond" onDragStart={(event) => onDragStart(event, 'diamond')} draggable>
        Diamond Node
      </div>
      <div className="rectangle" onDragStart={(event) => onDragStart(event, 'rectangle')} draggable>
        Rectangle Node
      </div>
      <div className="circle" onDragStart={(event) => onDragStart(event, 'circle')} draggable>
        Circle Node
      </div>
    </aside>
  );
};

export default Sidebar;