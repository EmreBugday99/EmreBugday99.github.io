import { Entity } from './entity.js';

export class Scene {
    private entities: Entity[];
    private entityLayers: Map<string, Entity[]>;
    private identifier: string;

    constructor(id: string) {
        this.entities = [];
        this.entityLayers = new Map<string, Entity[]>();
        this.identifier = id;
    }

    getIdentifier(): string {
        return this.identifier;
    }

    createEntity(id: string, layer: string = "default"): Entity {
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

    async removeEntity(entity: Entity): Promise<boolean> {
        const index = this.entities.indexOf(entity);
        if (index === -1) {
            return false;
        }

        await entity.clear();
        this.entities.splice(index, 1);

        return true;
    }

    async removeEntities(entities: readonly Entity[]): Promise<void> {
        await Promise.all(entities.map(entity => this.removeEntity(entity)));
    }

    getEntities(): readonly Entity[] {
        return this.entities;
    }

    getLayerOfEntity(entity: Entity): string {
        for (const [layer, entities] of this.entityLayers.entries()) {
            if (entities.includes(entity)) {
                return layer;
            }
        }
        return "default"; // Default layer if not found
    }

    getLayerEntities(layer: string): readonly Entity[] {
        const entities = this.entityLayers.get(layer);
        if (entities)
            return entities;
        else
            return [];
    }

    async clear(): Promise<void> {
        await Promise.all(this.entities.map(entity => entity.clear()));
        this.entities = [];
    }
}