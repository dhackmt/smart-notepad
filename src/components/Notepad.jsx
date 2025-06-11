import React, {useState} from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "../editor.css"; 
import EditNoteIcon from '@mui/icons-material/EditNote';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
const Notepad=()=>{
    const [notes,setNotes]=useState("");

    const handleUserInput=()=>{
        console.log(notes);
    }
    return(
        <div className="h-screen flex flex-col">
            <h1 className="bg-blue-600 w-full h-auto p-4 font-Raleway text-2xl">
                Smart Notepad
                <span className="mr-4"><EditNoteIcon style={{marginLeft:10 , width:30 , height:40}}/></span>
            </h1>
            <div className="flex-1">
                        <ReactQuill value={notes} onChange={setNotes} theme="snow" className="h-full full-height-editor" />
                       
            </div>

{/*footer */}
            <div className="w-auto fixed bottom-10 right-4 bg-blue-600 cursor-pointer p-4 rounded-2xl text-white text-xl hover:scale-105 hover:bg-blue-700">
                    <button onClick={handleUserInput} >Enhance with AI</button>
            <span><AutoFixHighIcon style={{width:"24px", height:"24px", marginLeft:12}} /></span>
            </div>
           </div>
    )
}

export default Notepad;
