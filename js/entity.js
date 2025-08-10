export class Entity {
    constructor(id) {
        this.id = id;
        this.components = [];
        this.identifier = id;
    }
    getIdentifier() {
        return this.identifier;
    }
    add(component) {
        if (this.components.some(c => c.getIdentifier() === component.getIdentifier())) {
            throw new Error(`Component with identifier ${component.getIdentifier()} already exists.`);
        }
        this.components.push(component);
        component.init();
        return component;
    }
    remove(component) {
        const i = this.components.indexOf(component);
        if (i === -1) {
            return false;
        }
        component.destroy();
        this.components.splice(i, 1);
        return true;
    }
    clear() {
        this.components.forEach(component => component.destroy());
        this.components = [];
    }
    has(component) {
        return this.components.includes(component);
    }
    getComponent(identifier) {
        return this.components.find(c => c.getIdentifier() === identifier);
    }
    getComponents() {
        return this.components;
    }
}
