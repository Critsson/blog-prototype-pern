import React from "react";
import EditorJs from "@editorjs/editorjs";
import Header from "@editorjs/header";
import List from "@editorjs/list";
import Embed from "@editorjs/embed";


export default function Createmenu(props) {

    const editor = new EditorJs({
        tools: {
            header: {
                class: Header,
                inlineToolbar: ["link"]
            },
            list : {
                class: List,
                inlineToolbar: ["link", "bold"]
            },
            embed : {
                class: Embed,
                inlineToolbar: false,
                config: {
                    services: {
                        youtube: true,
                        coub: true
                    }
                }
            }

        }
    })

    return (
        <div className="create-menu-container">
            <h1>New Blog Post</h1>
            <div id="editorjs"></div>
            <button onClick={() => {
                editor.save().then((data) => {
                    console.log(data)
                })
            }}>Save</button>
        </div>
    );
}