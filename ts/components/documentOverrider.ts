import { Component } from "../component.js";
import type { Entity } from "../entity.js";

export enum OverrideMode {
    InnerHTML = "innerHTML",
    TextContent = "textContent",
}

export class DocumentOverrider extends Component {
    constructor(id: string, owner: Entity, private mode: OverrideMode) {
        super(id, owner);
    }

    protected overrideElement(el: Element, content: string): void {
        const target = el as HTMLElement;

        if (this.mode === OverrideMode.InnerHTML)
            target.innerHTML = content;
        else
            target.textContent = content;
    }

    init(): void { }
    destroy(): void { }
}
