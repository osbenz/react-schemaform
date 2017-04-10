"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var UpFormControl_1 = require("../UpForm/UpFormControl");
var up_react_controls_1 = require("@up-group/up-react-controls");
var UpTime = (function (_super) {
    __extends(UpTime, _super);
    function UpTime(p, c) {
        return _super.call(this, p, c) || this;
    }
    UpTime.prototype.setInput = function (data) {
    };
    UpTime.prototype._componentDidMount = function () {
    };
    UpTime.prototype.renderField = function () {
        return React.createElement(up_react_controls_1.UpTimePicker, { onChange: this.handleChangeEventGlobal, hasError: this.state.hasError });
    };
    UpTime.prototype.handleChangeJsEvent = function (args) {
        if (args != null && !args.target) {
            return args;
        }
        return args.target.value;
    };
    UpTime.prototype.isEmpty = function (value) {
        return value === null || value === undefined || value === "";
    };
    return UpTime;
}(UpFormControl_1.UpFormControl));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = UpTime;
//# sourceMappingURL=UpTime.js.map