import { Entity } from "./entity.js";

export abstract class Component {
    private identifier: string;
    protected entity: Entity;

    constructor(id: string, owner: Entity) {
        this.identifier = id;
        this.entity = owner;
    }

    getIdentifier(): string {
        return this.identifier;
    }

    abstract init(): void;
    abstract destroy(): void;
}