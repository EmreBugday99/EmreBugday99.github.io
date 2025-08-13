import { Component } from "../component.js";
import type { Entity } from "../entity.js";

export class ScrollRevealComponent extends Component {
    private observer?: IntersectionObserver;

    constructor(id: string, owner: Entity, private selector: string, private threshold: number = 0.2) {
        super(id, owner);
    }

    init(): void {
        const el = document.querySelector(this.selector);
        if (!el) return;
        this.observer = new IntersectionObserver(
            (entries) => {
                for (const entry of entries) {
                    if (entry.isIntersecting) (entry.target as HTMLElement).classList.add("visible");
                }
            },
            { threshold: this.threshold }
        );
        this.observer.observe(el);
    }

    destroy(): void {
        this.observer?.disconnect();
        this.observer = undefined;
    }
}
