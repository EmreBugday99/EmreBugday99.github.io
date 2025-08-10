import { Component } from "../component.js";
import { FetchJsonComponent } from "../components/fetch.js";
import { FetchDocumentOverrideConfig } from "../components/fetchDocumentOverrideConfig.js";
import { FetchDocumentOverrider } from "../components/fetchDocumentOverrider.js";
import { SelectorComponent } from "../components/selector.js";
import { renderAbout } from "../templates/renderers.js";
import { OverrideMode } from "../components/documentOverrider.js";
export class AboutMeComponent extends Component {
    init() {
        const fetcher = this.entity.add(new FetchJsonComponent("fetchAboutMe", this.entity));
        const selector = this.entity.add(new SelectorComponent("selectAboutMe", this.entity));
        this.entity.add(new FetchDocumentOverrider("overrideAboutMe", this.entity, fetcher, selector, new FetchDocumentOverrideConfig("data/about.json", "#about", renderAbout, OverrideMode.InnerHTML)));
    }
    destroy() {
    }
}
