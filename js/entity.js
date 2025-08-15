export class Entity {
    constructor(id, scene) {
        this.id = id;
        this.components = [];
        this.identifier = id;
        this.scene = scene;
    }
    getIdentifier() {
        return this.identifier;
    }
    getScene() {
        return this.scene;
    }
    async add(component) {
        if (this.components.some(c => c.getIdentifier() === component.getIdentifier())) {
            throw new Error(`Component with identifier ${component.getIdentifier()} already exists.`);
        }
        this.components.push(component);
        await component.init();
        return component;
    }
    async remove(component) {
        const i = this.components.indexOf(component);
        if (i === -1) {
            return false;
        }
        await component.destroy();
        this.components.splice(i, 1);
        return true;
    }
    async clear() {
        await Promise.all(this.components.map(component => component.destroy()));
        this.components = [];
    }
    hasComponent(component) {
        return this.components.includes(component);
    }
    hasComponentWithName(name) {
        return this.components.some(component => component.getIdentifier() === name);
    }
    getComponent(identifier) {
        return this.components.find(component => component.getIdentifier() === identifier);
    }
    getComponents() {
        return this.components;
    }
}
