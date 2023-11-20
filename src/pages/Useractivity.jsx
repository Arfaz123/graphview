/* eslint-disable prettier/prettier */
import { useState, useCallback } from 'react';
import ReactFlow, {
    Controls,
    Background, addEdge, applyEdgeChanges, applyNodeChanges
} from 'reactflow';
import 'reactflow/dist/style.css';



import './text-updater-node.css';
import { TextUpdaterNode } from './TextUpdaterNode';

const rfStyle = {
    backgroundColor: '#B8CEFF',
};

const initialNodes = [
    { id: 'node-1', type: 'textUpdater', position: { x: 0, y: 0 }, data: { value: 123 } },
];

const nodeTypes = { textUpdater: TextUpdaterNode };


function Flow() {
    const [nodes, setNodes] = useState(initialNodes);
    const [edges, setEdges] = useState([]);

    const onNodesChange = useCallback(
        (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
        [setNodes]
    );
    const onEdgesChange = useCallback(
        (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
        [setEdges]
    );
    const onConnect = useCallback(
        (connection) => setEdges((eds) => addEdge(connection, eds)),
        [setEdges]
    );
    const addNode = () => {
        const newNode = {
            id: `node-${nodes.length + 1}`,
            type: 'textUpdater',
            position: { x: 0, y: 0 },
            data: { value: 123 }, 
        };
        setNodes((prevNodes) => [...prevNodes, newNode]);
    };
    console.log("dsfsdfdfd", nodes)
    return (
        <>
            <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}
                nodeTypes={nodeTypes}
                fitView
                style={rfStyle}
            >
                <Background />
                <Controls />

            </ReactFlow >
            <button onClick={addNode} style={{ color: "#000", border: "1px solid #ccc7c7 ", borderRadius: "10px" }} >Add Node</button>
        </>
    );
}

export default Flow;