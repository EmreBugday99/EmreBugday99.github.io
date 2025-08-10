import { Entity } from './entity.js';
export class Scene {
    constructor(id) {
        this.entities = [];
        this.identifier = id;
    }
    getIdentifier() {
        return this.identifier;
    }
    createEntity(id) {
        const entity = new Entity(id);
        this.entities.push(entity);
        return entity;
    }
    addEntity(entity) {
        this.entities.push(entity);
        return entity;
    }
    removeEntity(entity) {
        const index = this.entities.indexOf(entity);
        if (index === -1) {
            return false;
        }
        this.entities.splice(index, 1);
        return true;
    }
    getEntities() {
        return this.entities;
    }
    clear() {
        this.entities.forEach(entity => entity.clear());
        this.entities = [];
    }
}
