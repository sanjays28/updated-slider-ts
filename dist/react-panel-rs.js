'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

require('rsuite/dist/styles/rsuite-default.css');
var React = _interopDefault(require('react'));
var Panel = _interopDefault(require('rsuite/lib/Panel'));
var PanelGroup = _interopDefault(require('rsuite/lib/PanelGroup'));

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

exports.PanelGroupV = PanelGroupV;
exports.PanelV = PanelV;
