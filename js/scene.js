import { Entity } from './entity.js';
export class Scene {
    constructor(id) {
        this.entities = [];
        this.entityLayers = new Map();
        this.identifier = id;
    }
    getIdentifier() {
        return this.identifier;
    }
    createEntity(id, layer = "default") {
        const entity = new Entity(id, this);
        this.entities.push(entity);
        let layerArray = this.entityLayers.get(layer);
        if (!layerArray) {
            layerArray = [];
            this.entityLayers.set(layer, layerArray);
        }
        layerArray.push(entity);
        return entity;
    }
    async removeEntity(entity) {
        const index = this.entities.indexOf(entity);
        if (index === -1) {
            return false;
        }
        await entity.clear();
        this.entities.splice(index, 1);
        return true;
    }
    async removeEntities(entities) {
        await Promise.all(entities.map(entity => this.removeEntity(entity)));
    }
    getEntities() {
        return this.entities;
    }
    getLayerOfEntity(entity) {
        for (const [layer, entities] of this.entityLayers.entries()) {
            if (entities.includes(entity)) {
                return layer;
            }
        }
        return "default"; // Default layer if not found
    }
    getLayerEntities(layer) {
        const entities = this.entityLayers.get(layer);
        if (entities)
            return entities;
        else
            return [];
    }
    async clear() {
        await Promise.all(this.entities.map(entity => entity.clear()));
        this.entities = [];
    }
}
