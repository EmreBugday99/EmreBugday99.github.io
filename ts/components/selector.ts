import { Component } from "../component.js";

export class SelectorComponent extends Component {
    find<T extends Element = HTMLElement>(selector: string, root: ParentNode = document): T | null {
        const element = root.querySelector(selector);
        if (element)
            return element as T;
        return null;
    }

    all<T extends Element = HTMLElement>(selector: string, root: ParentNode = document): T[] {
        return Array.from(root.querySelectorAll(selector)) as T[];
    }

    exists(selector: string, root: ParentNode = document): boolean {
        return root.querySelector(selector) !== null;
    }

    init(): void { }
    destroy(): void { }
}
