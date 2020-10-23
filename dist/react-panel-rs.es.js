import 'rsuite/dist/styles/rsuite-default.css';
import React from 'react';
import Panel from 'rsuite/lib/Panel';
import PanelGroup from 'rsuite/lib/PanelGroup';

function deleteKeys(obj, keys) {
    if (obj && keys && Array.isArray(keys)) {
        keys.forEach((key) => {
            delete obj[key];
        });
    }
}
const delete_keys = [
    'children'
];
const PanelV = (props) => {
    let _panelProps = Object.assign({}, props);
    deleteKeys(_panelProps, delete_keys);
    return React.createElement(Panel, Object.assign({}, _panelProps), props.children);
};
const PanelGroupV = (props) => {
    let _panelGroupProps = Object.assign({}, props);
    deleteKeys(_panelGroupProps, delete_keys);
    return React.createElement(PanelGroup, Object.assign({}, _panelGroupProps), props.children);
};

export { PanelGroupV, PanelV };
