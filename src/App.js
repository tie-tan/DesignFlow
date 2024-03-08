import React, { useState, useCallback } from 'react';
import ELK from 'elkjs/lib/elk.bundled.js';
import Slider from './slider';
//import Button from './Button';
import ReactFlow, {
  ReactFlowProvider,
  Panel,
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
 
const [initialNodes,initialEdges] = getLogic();
const elk = new ELK();
const nodeTypes = {
  Node:Node
}
const useLayoutedElements = () => {
  const { getNodes, setNodes, getEdges, fitView } = useReactFlow();
  const defaultOptions = {
    'elk.algorithm': 'layered',
    'elk.layered.spacing.nodeNodeBetweenLayers': 50,
    'elk.spacing.nodeNode': 50,
  };
  const getLayoutedElements = useCallback((options) => {
    const layoutOptions = { ...defaultOptions, ...options };
    const graph = {
      id: 'root',
      layoutOptions: layoutOptions,
      children: getNodes(),
      edges: getEdges(),
    };

    elk.layout(graph).then(({ children }) => {
      // By mutating the children in-place we saves ourselves from creating a
      // needless copy of the nodes array.
      children.forEach((node) => {
        node.position = { x: node.x, y: node.y };
      });

      setNodes(children);
      window.requestAnimationFrame(() => {
        fitView();
      });
    });
  }, []);
  return { getLayoutedElements };
};
function Flow() {
  const [nodes, , onNodesChange] = useNodesState(initialNodes);
  const [edges, , onEdgesChange] = useEdgesState(initialEdges);
  const [isSliderOpen, setSliderOpen] = useState(false);
  const { getLayoutedElements } = useLayoutedElements();
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

  // Function to handle node click
  // const handleNodeClick = (event, node) => {
  //   // Open slider when node is clicked
  //   toggleSlider();
  // };
  // const [nodes, setNodes] = useState(initialNodes);
  // const [edges, setEdges] = useState(initialEdges);
  // const onNodesChange = useCallback(
  //   (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
  //   [],
  // );
  // const onEdgesChange = useCallback(
  //   (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
  //   [],
  // );
 
  // const onConnect = useCallback(
  //   (params) => setEdges((eds) => addEdge(params, eds)),
  //   [],
  // );
 
  return (
    <div style={{ height: '100vw'}} >
      <ReactFlow  
        nodes={nodes}
        nodeTypes={nodeTypes}
        onNodeClick={handleNodeClick}
        onNodesChange={onNodesChange}
        edges={edges }
        onEdgesChange={onEdgesChange}
        //onConnect={onConnect}
        minZoom={0.2}
        fitView
      >
        <Panel position="top-right">
        <button
          onClick={() =>
            getLayoutedElements({ 'elk.algorithm': 'layered', 'elk.direction': 'DOWN' })
          }
        >
          vertical layout
        </button>
        <button
          onClick={() =>
            getLayoutedElements({ 'elk.algorithm': 'layered', 'elk.direction': 'RIGHT' })
          }
        >
          horizontal layout
        </button>
        {/* <button
          onClick={() =>
            getLayoutedElements({
              'elk.algorithm': 'org.eclipse.elk.radial',
            })
          }
        >
          radial layout
        </button> */}
        <button
          onClick={() =>
            getLayoutedElements({
              'elk.algorithm': 'org.eclipse.elk.force',
            })
          }
        >
          force layout
        </button>
      </Panel>
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