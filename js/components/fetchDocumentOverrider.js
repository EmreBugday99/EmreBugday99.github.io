import { DocumentOverrider } from "./documentOverrider.js";
export class FetchDocumentOverrider extends DocumentOverrider {
    constructor(id, owner, fetcher, selector, cfg) {
        super(id, owner, cfg.mode);
        this.fetcher = fetcher;
        this.selector = selector;
        this.cfg = cfg;
    }
    init() {
        this.fetcher.fetch(this.cfg.url).then((data) => {
            const element = this.selector.find(this.cfg.target);
            if (!element)
                return;
            const html = this.cfg.template(data);
            this.overrideElement(element, html);
            element.classList.add("visible");
        });
    }
}
