import type { Component } from "./component.js";
import { Scene } from "./scene.js";

export class Entity {
    private scene: Scene;
    private components: Component[];
    private identifier: string;

    constructor(public readonly id: string, scene: Scene) {
        this.components = [];
        this.identifier = id;
        this.scene = scene;
    }

    getIdentifier(): string {
        return this.identifier;
    }

    getScene(): Scene {
        return this.scene;
    }

    async add<T extends Component>(component: T): Promise<T> {
        if (this.components.some(c => c.getIdentifier() === component.getIdentifier())) {
            throw new Error(`Component with identifier ${component.getIdentifier()} already exists.`);
        }

        this.components.push(component);
        await component.init();
        return component;
    }

    async remove<T extends Component>(component: T): Promise<boolean> {
        const i = this.components.indexOf(component);
        if (i === -1) {
            return false;
        }

        await component.destroy();
        this.components.splice(i, 1);
        return true;
    }

    async clear(): Promise<void> {
        await Promise.all(this.components.map(component => component.destroy()));
        this.components = [];
    }

    hasComponent<T extends Component>(component: T): boolean {
        return this.components.includes(component);
    }

    hasComponentWithName(name: string): boolean {
        return this.components.some(component => component.getIdentifier() === name);
    }

    getComponent<T extends Component>(identifier: string): T | undefined {
        return this.components.find(component => component.getIdentifier() === identifier) as T | undefined;
    }

    getComponents(): readonly Component[] {
        return this.components;
    }
}