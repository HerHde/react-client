import React from "react";
import {TaskBar} from "./task-bar/task-bar";
import { Container } from "react-bootstrap";

const Editor: React.FC = () => {
    return (
        <Container>
            <TaskBar/>
        </Container>
    )
}

export {Editor}
