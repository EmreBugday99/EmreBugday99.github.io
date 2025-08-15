import { Entity } from "./entity.js";

export abstract class Component {
    private identifier: string;
    public entity: Entity;

    constructor(id: string, owner: Entity) {
        this.identifier = id;
        this.entity = owner;
    }

    getIdentifier(): string {
        return this.identifier;
    }

    abstract init(): Promise<void>;
    abstract destroy(): Promise<void>;
}