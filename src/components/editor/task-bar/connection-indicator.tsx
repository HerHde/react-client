import React from "react";
import { Button } from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const ConnectionIndicator: React.FC = () => {
    const userOnline = 1;
    return (
      <Button size="sm" variant="primary" className="all-caps">
          <FontAwesomeIcon icon="users"/> {userOnline} Online
      </Button>
    );
}

export {ConnectionIndicator}
