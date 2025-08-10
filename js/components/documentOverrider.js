import { Component } from "../component.js";
export var OverrideMode;
(function (OverrideMode) {
    OverrideMode["InnerHTML"] = "innerHTML";
    OverrideMode["TextContent"] = "textContent";
})(OverrideMode || (OverrideMode = {}));
export class DocumentOverrider extends Component {
    constructor(id, owner, mode) {
        super(id, owner);
        this.mode = mode;
    }
    overrideElement(el, content) {
        const target = el;
        if (this.mode === OverrideMode.InnerHTML)
            target.innerHTML = content;
        else
            target.textContent = content;
    }
    init() { }
    destroy() { }
}
