import React from "react";
import EditorJs from "@editorjs/editorjs";
import Paragraph from "@editorjs/paragraph"
import Header from "@editorjs/header";
import List from "@editorjs/list";
import Embed from "@editorjs/embed";
import Quote from "@editorjs/quote";
import Warning from "@editorjs/warning";
import Delimiter from "@editorjs/delimiter"
import Underline from '@editorjs/underline';
import AlignmentTuneTool from "editorjs-text-alignment-blocktune"
import DragDrop from "editorjs-drag-drop"


export default function Createmenu(props) {

    const editor = new EditorJs({
        onReady: () => {
            new DragDrop(editor);
          },
        tools: {
            header: {
                class: Header,
                inlineToolbar: true,
                tunes: ["blockAlignment"]
            },
            paragraph: {
                class: Paragraph,
                inlineToolbar: true,
                tunes: ["blockAlignment"]
            },
            list : {
                class: List,
                inlineToolbar: true,
                config: {
                    defaultStyle: "unordered"
                },
                tunes: ["blockAlignment"]
            },
            embed : {
                class: Embed,
                inlineToolbar: false,
                config: {
                    services: {
                        youtube: true,
                        coub: true
                    }
                },
                tunes: ["blockAlignment"]
            },
            quote: {
                class: Quote,
                inlineToolbar: true,
                config: {
                    quotePlaceholder: "Enter a quote",
                    captionPlaceholder: "Author"
                },
                tunes: ["blockAlignment"]
            },
            warning: {
                class: Warning,
                inlineToolbar: true,
                config: {
                    titlePlaceholder: "Warning Title",
                    messagePlaceholder: "Message"
                },
                tunes: ["blockAlignment"]
            },
            delimiter: {
                class: Delimiter
            },
            underline: Underline,
            blockAlignment: {
                class: AlignmentTuneTool,
                config: {
                    default: "left"
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
                    const info = {info: data}
                    console.log(JSON.stringify(info))
                })
            }}>Save</button>
        </div>
    );
}