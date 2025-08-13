import { Entity } from './entity.js';

export class Scene {
    private entities: Entity[];
    private identifier: string;

    constructor(id: string) {
        this.entities = [];
        this.identifier = id;
    }

    getIdentifier(): string {
        return this.identifier;
    }

    createEntity(id: string): Entity {
        const entity = new Entity(id);
        this.entities.push(entity);
        return entity;
    }

    addEntity(entity: Entity): Entity {
        this.entities.push(entity);
        return entity;
    }

    removeEntity(entity: Entity): boolean {
        const index = this.entities.indexOf(entity);
        if (index === -1) {
            return false;
        }
        this.entities.splice(index, 1);
        return true;
    }

    getEntities(): readonly Entity[] {
        return this.entities;
    }

    clear(): void {
        this.entities.forEach(entity => entity.clear());
        this.entities = [];
    }
}