import React from "react";
import { Dropdown } from "react-bootstrap";
import {Trans, useTranslation} from "react-i18next";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const EditorMenu: React.FC = () => {
    useTranslation();
    return (
        <Dropdown>
            <Dropdown.Toggle variant="light" size="sm" id="dropdown-basic" className="button-link">
                <Trans i18nKey="menu"/>
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Header>
                    <Trans i18nKey="extra"/>
                </Dropdown.Header>
                <Dropdown.Item>
                    <FontAwesomeIcon icon="history"/> <Trans i18nKey="revision"/>
                </Dropdown.Item>
                <Dropdown.Item>
                    <FontAwesomeIcon icon="tv"/> <Trans i18nKey="slideMode"/>
                </Dropdown.Item>

                <Dropdown.Divider/>

                <Dropdown.Header>
                    <Trans i18nKey="export"/>
                </Dropdown.Header>
                <Dropdown.Item>
                    <FontAwesomeIcon icon={["fab", "dropbox"]}/> Dropbox
                </Dropdown.Item>
                <Dropdown.Item>
                    <FontAwesomeIcon icon={["fab", "github"]}/> Gist
                </Dropdown.Item>

                <Dropdown.Divider/>

                <Dropdown.Header>
                    <Trans i18nKey="import"/>
                </Dropdown.Header>
                <Dropdown.Item>
                    <FontAwesomeIcon icon={["fab", "dropbox"]}/> Dropbox
                </Dropdown.Item>
                <Dropdown.Item>
                    <FontAwesomeIcon icon={["fab", "github"]}/> Gist
                </Dropdown.Item>
                <Dropdown.Item>
                    <FontAwesomeIcon icon="clipboard"/> <Trans i18nKey="clipboard"/>
                </Dropdown.Item>

                <Dropdown.Divider/>

                <Dropdown.Header>
                    <Trans i18nKey="download"/>
                </Dropdown.Header>
                <Dropdown.Item>
                    <FontAwesomeIcon icon="file-alt"/> Markdown
                </Dropdown.Item>
                <Dropdown.Item>
                    <FontAwesomeIcon icon="file-code"/> HTML
                </Dropdown.Item>
                <Dropdown.Item>
                    <FontAwesomeIcon icon="file-code"/> Raw HTML
                </Dropdown.Item>

                <Dropdown.Divider/>

                <Dropdown.Item>
                    <FontAwesomeIcon icon="question-circle"/> <Trans i18nKey="help"/>
                </Dropdown.Item>

            </Dropdown.Menu>
        </Dropdown>
    );
}

export {EditorMenu}
