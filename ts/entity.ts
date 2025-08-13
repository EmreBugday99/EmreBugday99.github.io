import type { Component } from "./component.js";

export class Entity {
    private components: Component[];
    private identifier: string;

    constructor(public readonly id: string) {
        this.components = [];
        this.identifier = id;
    }

    getIdentifier(): string {
        return this.identifier;
    }

    add<T extends Component>(component: T): T {
        if (this.components.some(c => c.getIdentifier() === component.getIdentifier())) {
            throw new Error(`Component with identifier ${component.getIdentifier()} already exists.`);
        }

        this.components.push(component);
        component.init();
        return component;
    }

    remove<T extends Component>(component: T): boolean {
        const i = this.components.indexOf(component);
        if (i === -1) {
            return false;
        }

        component.destroy();
        this.components.splice(i, 1);
        return true;
    }

    clear(): void {
        this.components.forEach(component => component.destroy());
        this.components = [];
    }

    has<T extends Component>(component: T): boolean {
        return this.components.includes(component);
    }

    getComponent<T extends Component>(identifier: string): T | undefined {
        return this.components.find(c => c.getIdentifier() === identifier) as T | undefined;
    }

    getComponents(): readonly Component[] {
        return this.components;
    }
}