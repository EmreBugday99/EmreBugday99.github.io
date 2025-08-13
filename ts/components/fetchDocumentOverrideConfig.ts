import type { OverrideMode } from "./documentOverrider.js";

// Configuration class for FetchDocumentOverrider
export class FetchDocumentOverrideConfig<T> {
    public url: string;
    public target: string;
    public template: (data: T) => string;
    public mode: OverrideMode;

    constructor(url: string, target: string, template: (data: T) => string, mode: OverrideMode) {
        this.url = url;
        this.target = target;
        this.template = template;
        this.mode = mode;
    }
}
