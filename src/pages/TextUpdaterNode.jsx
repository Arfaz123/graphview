/* eslint-disable prettier/prettier */
import { useCallback, useState, useEffect } from 'react'
import { Handle, Position } from 'reactflow'

const handleStyle = { left: 10 }

export function TextUpdaterNode({ data }) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [savedTitle, setSavedTitle] = useState('');
    const [savedDescription, setSavedDescription] = useState('');
    const [isSaved, setIsSaved] = useState(false);
    const [isEditing, setIsEditing] = useState(false);

    const onSave = () => {
        setSavedTitle(title);
        setSavedDescription(description);
        setIsSaved(true);
        setIsEditing(false);
    };

    const onDoubleClick = () => {
        setIsEditing(true);
    };

    return (
        <>
            <Handle type="target" position={Position.Top} />
            <div className='text-updater-node' style={{ display: "flex", justifyContent: "center", padding: "10px", flexFlow: "column", border: "1px solid #000", borderRadius: "10px" }}>
                <label htmlFor="text">Title:</label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className={`nodrag ${isEditing ? 'editing' : ''}`}
                    onDoubleClick={onDoubleClick}
                />
                <label htmlFor="text">Description:</label>
                <input
                    type="text"
                    id="description"
                    name="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className={`nodrag ${isEditing ? 'editing' : ''}`}
                    onDoubleClick={onDoubleClick}
                />
                {isEditing && (
                    <button onClick={onSave}>
                        Save
                    </button>
                )}
            </div>
            {/* <div style={{ display: showContent ? 'block' : 'none' }}>
                Display content here, you can customize this part based on your needs
                <p>Title: {title}</p>
                <p>Description: {description}</p>
            </div> */}
            <div>
            </div>
            <Handle type="source" position={Position.Bottom} id="a" />
            <Handle
                type="source"
                position={Position.Bottom}
                id="b"
                style={handleStyle}
            />
        </>
    )
}
