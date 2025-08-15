import { Component } from "../component.js";
import { Entity } from "../entity.js";

export abstract class NavigationComponent extends Component {
    protected navigationElementId: string;

    constructor(navigationElement: string, id: string, owner: Entity) {
        super(id, owner);
        this.navigationElementId = navigationElement;
    }

    init(): Promise<void> {
        const element: HTMLElement | null = document.querySelector(this.navigationElementId);
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

    destroy(): Promise<void> {
        return Promise.resolve();
    }

    abstract onNavigate(navigationComponent: NavigationComponent): void | Promise<void>;
}