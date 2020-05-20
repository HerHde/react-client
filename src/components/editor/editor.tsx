import React, { Fragment } from "react";
import {TaskBar} from "./task-bar/task-bar";
import {useSelector} from "react-redux";
import {ApplicationState} from "../../redux";
import {EditorMode} from "../../redux/editor/types";
import {EditorWindow} from "./editor-window/editor-window";
import {MarkdownPreview} from "./markdown-preview/markdown-preview";
import SplitPane from "react-split-pane";

const Editor: React.FC = () => {
    const editorMode = useSelector((state: ApplicationState) => state.editorConfig.editorMode);
    let editor = null;
    if (editorMode === EditorMode.EDITOR) {
        editor = <EditorWindow/>;
    } else if (editorMode === EditorMode.PREVIEW) {
        editor = <MarkdownPreview/>;
    } else if (editorMode === EditorMode.BOTH) {
        editor = (
            <SplitPane split="vertical">
                <EditorWindow />
                <MarkdownPreview />
            </SplitPane>
        )
    }
    return (
        <Fragment>
            <TaskBar/>
            <div className="h-100">
                {editor}
            </div>
        </Fragment>
    )
}

export {Editor}
