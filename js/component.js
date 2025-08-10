export class Component {
    constructor(id, owner) {
        this.identifier = id;
        this.entity = owner;
    }
    getIdentifier() {
        return this.identifier;
    }
}
