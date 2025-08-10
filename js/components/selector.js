import { Component } from "../component.js";
export class SelectorComponent extends Component {
    find(selector, root = document) {
        const element = root.querySelector(selector);
        if (element)
            return element;
        return null;
    }
    all(selector, root = document) {
        return Array.from(root.querySelectorAll(selector));
    }
    exists(selector, root = document) {
        return root.querySelector(selector) !== null;
    }
    init() { }
    destroy() { }
}
