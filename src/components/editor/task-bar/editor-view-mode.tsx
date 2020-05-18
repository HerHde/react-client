import {ToggleButton, ToggleButtonGroup} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React from "react";

const EditorViewMode: React.FC = () => {
    return (
        <ToggleButtonGroup type="radio" name="options" defaultValue={1} className="pull-left button-middle">
            <ToggleButton value={1} variant="secondary" size="sm">
                <FontAwesomeIcon icon="eye"/>
            </ToggleButton>
            <ToggleButton value={2} variant="secondary" size="sm">
                <FontAwesomeIcon icon="columns"/>
            </ToggleButton>
            <ToggleButton value={3} variant="secondary" size="sm">
                <FontAwesomeIcon icon="pencil-alt"/>
            </ToggleButton>
        </ToggleButtonGroup>
    );
}

export {EditorViewMode}
