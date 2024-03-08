import React, { useState, useCallback } from 'react';
import ELK from 'elkjs/lib/elk.bundled.js';
import Slider from './slider';
//import Button from './Button';
import ReactFlow, {
  ReactFlowProvider,
  Controls,
  Background,
  applyNodeChanges,
  applyEdgeChanges,
  addEdge,
  useNodesState,
  useEdgesState,
  useReactFlow,
} from 'reactflow';
import 'reactflow/dist/style.css';
import { getLogic } from './getSolutionLogic';
import {Node} from './node_data';
import { createGlobalState } from 'react-hooks-global-state';

const [initialNodes,initialEdges] = getLogic();
const initialState = {nodes:initialNodes};
export const {useGlobalState,getGlobalState,setGlobalState} = createGlobalState(initialState);

const elk = new ELK();
const nodeTypes = {
  Node:Node
}

export function Flow() {
  const [nodes,,onNodesChange] = useGlobalState('nodes');
  const [edges, , onEdgesChange] = useEdgesState(initialEdges);
  const [isSliderOpen, setSliderOpen] = useState(false);
  const toggleSlider = () => {
    const timeout = setTimeout(()=>{setSliderOpen(isSliderOpen=>!isSliderOpen);})
  };

  const handleCloseSlider = () => {
    setSliderOpen(false);
  };

  const handleNodeClick = () => {
    toggleSlider();
  };

  const handleClickOutsideSlider = () => {
    if (isSliderOpen) {
      handleCloseSlider();
    }
  };

  React.useEffect(() => {
    document.addEventListener('click', handleClickOutsideSlider);

    return () => {
      document.removeEventListener('click', handleClickOutsideSlider);
    };
  }, [isSliderOpen]);

  return (
    <div style={{ height: '100vw'}} >
      <ReactFlow  
        nodes={nodes}
        nodeTypes={nodeTypes}
        onNodeClick={handleNodeClick}
        onNodesChange={onNodesChange}
        edges={edges }
        onEdgesChange={onEdgesChange}
        // onConnect={onConnect}
        minZoom={0.2}
        fitView
      >
        <Background />
        <Controls position=''/>
      </ReactFlow>
      {isSliderOpen && <Slider />}
    </div>
  );
};
 
export default function () {
  return (
    <ReactFlowProvider>
      <Flow />
    </ReactFlowProvider>
  );
}