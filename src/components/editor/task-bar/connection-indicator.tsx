import React from "react";
import {Dropdown} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {UserAvatar} from "../../landing/layout/user-avatar/user-avatar";

const ConnectionIndicator: React.FC = () => {
    const userOnline = 1;
    return (
        <Dropdown className="small">
            <Dropdown.Toggle id="connection-indicator" size="sm" variant="primary" className="all-caps">
                <FontAwesomeIcon icon="users"/> {userOnline} Online
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item>
                    <UserAvatar name="Philip Molares" photo="https://robohash.org/dermolly.png"/> <FontAwesomeIcon icon="circle"/>
                </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
}

export {ConnectionIndicator}
