import React, {useState} from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from '@mui/icons-material/Edit';
function Note(props) {

  const [isEditing, setIsEditing] = useState(false);

  const [updatedContent, setUpdatedContent] = useState({
    title: props.title,
    content: props.content
  });

  function handleClick() {
    props.onDelete(props.id);
  }

  function handleEditChange(event){
    const {name, value} = event.target;
    setUpdatedContent(prevValue =>{
      return{
        ...prevValue,
        [name]: value
      }
    });
  }

  function handleEdit(){
    setIsEditing(true);
  }

  function handleSave(){
    props.onEdit(props.id, updatedContent);
    setIsEditing(false);
  }

  return (
    <div className="note" >
      {isEditing ? ( 
        <div> 
          <input
            name="title"
            placeholder="Title"
            onChange={handleEditChange}
            value={updatedContent.title}
          />
          <textarea
            name="content"
            placeholder="Take a note..."
            onChange={handleEditChange}
            value={updatedContent.content}
          />
          <button onClick={handleSave}>save</button>
        </div>
        ) : ( 
        <div> 
          <h1>{props.title}</h1>
          <p>{props.content}</p>
          <button onClick={handleEdit}> <EditIcon /></button>
          <button onClick={handleClick}> <DeleteIcon /></button> 
        </div>
      )}
    </div>
  );
}

export default Note;
