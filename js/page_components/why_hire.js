import { Component } from "../component.js";
import { OverrideMode } from "../components/documentOverrider.js";
import { FetchJsonComponent } from "../components/fetch.js";
import { FetchDocumentOverrideConfig } from "../components/fetchDocumentOverrideConfig.js";
import { FetchDocumentOverrider } from "../components/fetchDocumentOverrider.js";
import { SelectorComponent } from "../components/selector.js";
import { renderWhyHire } from "../templates/renderers.js";
export class WhyHireComponent extends Component {
    init() {
        const fetcher = this.entity.add(new FetchJsonComponent("fetchWhyHire", this.entity));
        const selector = this.entity.add(new SelectorComponent("selectWhyHire", this.entity));
        this.entity.add(new FetchDocumentOverrider("overrideWhyHire", this.entity, fetcher, selector, new FetchDocumentOverrideConfig("data/why_hire.json", "#why-hire", renderWhyHire, OverrideMode.InnerHTML)));
    }
    destroy() {
    }
}
