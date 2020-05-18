import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import "./task-bar.scss"
import {Link} from "react-router-dom";
import {Button} from "react-bootstrap";
import {DarkModeButton} from "./dark-mode-button";
import {EditorViewMode} from "./editor-view-mode";
import {Trans, useTranslation} from "react-i18next";
import {EditorMenu} from "./editor-menu";

const TaskBar: React.FC = () => {
    useTranslation();
    return (
        <nav className="taskbar">
            <div className="brand pull-left">
                <Link to="/intro" className="text-secondary">
                    <FontAwesomeIcon icon="file-alt"/> CodiMD
                </Link>
            </div>
            <EditorViewMode/>
            <DarkModeButton/>
            <Button className="pull-left button-middle button-space-left button-link" size="sm" variant="outline-light">
                <FontAwesomeIcon icon="question-circle"/>
            </Button>
            <div className="pull-right button-middle button-link">
                <EditorMenu/>
            </div>
            <Button className="pull-right button-middle button-space-left button-link" size="sm" variant="outline-light">
                <FontAwesomeIcon icon="share-square"/> <Trans i18nKey="publish"/>
            </Button>
            <Button className="pull-right button-middle button-space-left button-link" size="sm" variant="outline-light">
                <FontAwesomeIcon icon="plus"/> <Trans i18nKey="new"/>
            </Button>
        </nav>
    );
}

export {TaskBar}
