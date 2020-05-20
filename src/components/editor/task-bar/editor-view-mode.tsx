import {ToggleButton, ToggleButtonGroup} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React from "react";
import {useSelector} from "react-redux";
import {ApplicationState} from "../../../redux";
import {EditorMode} from "../../../redux/editor/types";
import {setEditorModeConfig} from "../../../redux/editor/methods";

const EditorViewMode: React.FC = () => {
    const editorConfig = useSelector((state: ApplicationState) => state.editorConfig);
    return (
        <ToggleButtonGroup
            type="radio"
            name="options"
            defaultValue={editorConfig.editorMode}
            className="pull-left button-middle"
            onChange={(value: EditorMode) => {setEditorModeConfig(value)}}>
            <ToggleButton value={EditorMode.PREVIEW} variant="secondary" size="sm">
                <FontAwesomeIcon icon="eye"/>
            </ToggleButton>
            <ToggleButton value={EditorMode.BOTH} variant="secondary" size="sm">
                <FontAwesomeIcon icon="columns"/>
            </ToggleButton>
            <ToggleButton value={EditorMode.EDITOR} variant="secondary" size="sm">
                <FontAwesomeIcon icon="pencil-alt"/>
            </ToggleButton>
        </ToggleButtonGroup>
    );
}

export {EditorViewMode}
