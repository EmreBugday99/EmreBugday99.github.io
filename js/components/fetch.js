import { Component } from "../component.js";
export class FetchJsonComponent extends Component {
    async fetch(url) {
        const res = await fetch(url);
        if (!res.ok)
            throw new Error(`Failed to fetch ${url}: ${res.status} ${res.statusText}`);
        const data = (await res.json());
        return data;
    }
    init() { }
    destroy() { }
}
