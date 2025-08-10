import { Component } from "../component.js";
export class ScrollRevealComponent extends Component {
    constructor(id, owner, selector, threshold = 0.2) {
        super(id, owner);
        this.selector = selector;
        this.threshold = threshold;
    }
    init() {
        const el = document.querySelector(this.selector);
        if (!el)
            return;
        this.observer = new IntersectionObserver((entries) => {
            for (const entry of entries) {
                if (entry.isIntersecting)
                    entry.target.classList.add("visible");
            }
        }, { threshold: this.threshold });
        this.observer.observe(el);
    }
    destroy() {
        this.observer?.disconnect();
        this.observer = undefined;
    }
}
