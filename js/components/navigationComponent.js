import { Component } from "../component.js";
export class NavigationComponent extends Component {
    constructor(navigationElement, id, owner) {
        super(id, owner);
        this.navigationElementId = navigationElement;
    }
    init() {
        const element = document.querySelector(this.navigationElementId);
        if (!element) {
            console.warn("NavigationComponent: No element found.");
            return Promise.resolve();
        }
        element.addEventListener("click", (event) => {
            event.preventDefault();
            this.onNavigate(this);
        });
        return Promise.resolve();
    }
    destroy() {
        return Promise.resolve();
    }
}
