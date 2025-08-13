import type { Entity } from "../entity.js";
import { DocumentOverrider} from "./documentOverrider.js";
import { FetchJsonComponent } from "./fetch.js";
import { SelectorComponent } from "./selector.js";
import { FetchDocumentOverrideConfig } from "./fetchDocumentOverrideConfig.js";

export class FetchDocumentOverrider<T> extends DocumentOverrider {
    private fetcher: FetchJsonComponent;
    private selector: SelectorComponent;
    private cfg: FetchDocumentOverrideConfig<T>;

    constructor(
        id: string,
        owner: Entity,
        fetcher: FetchJsonComponent,
        selector: SelectorComponent,
        cfg: FetchDocumentOverrideConfig<T>
    ) {
        super(id, owner, cfg.mode);
        this.fetcher = fetcher;
        this.selector = selector;
        this.cfg = cfg;
    }

    init(): void {
        this.fetcher.fetch<T>(this.cfg.url).then((data) => {
            const element = this.selector.find<HTMLElement>(this.cfg.target);
            if (!element)
                return;

            const html = this.cfg.template(data);
            this.overrideElement(element, html);
            element.classList.add("visible");
        });
    }

}
