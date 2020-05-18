import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {ToggleButton, ToggleButtonGroup} from "react-bootstrap";

const DarkModeButton: React.FC = () => {
    return (
        <ToggleButtonGroup type="checkbox" defaultValue={[]} name="dark-mode" className="pull-left button-middle button-space-left">
            <ToggleButton size="sm" value={1} variant="light">
                <FontAwesomeIcon icon="moon"/>
            </ToggleButton>
        </ToggleButtonGroup>
    )
}

export {DarkModeButton}
