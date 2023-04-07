import React from "react";
import Header from "./header-components/Header";
import Footer from "./footer-components/Footer";
import Note from "./note-components/Note";
import tasks from "../tasks";


function App(){
    return <div>
        <Header />
        {tasks.map(task => (
            <Note 
            key = {task.id} //This is always expected by React and must be unique across all the repeated components
            title = {task.title}
            content = {task.content}
            />
        ))}
        <Footer />
    </div>;
};

export default App;