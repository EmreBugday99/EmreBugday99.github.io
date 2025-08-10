import { Component } from "../component.js";
import { OverrideMode } from "../components/documentOverrider.js";
import { FetchJsonComponent } from "../components/fetch.js";
import { FetchDocumentOverrideConfig } from "../components/fetchDocumentOverrideConfig.js";
import { FetchDocumentOverrider } from "../components/fetchDocumentOverrider.js";
import { SelectorComponent } from "../components/selector.js";
import { renderProjects } from "../templates/renderers.js";
export class ProjectsComponent extends Component {
    init() {
        const fetcher = this.entity.add(new FetchJsonComponent("fetchProjects", this.entity));
        const selector = this.entity.add(new SelectorComponent("selectProjects", this.entity));
        this.entity.add(new FetchDocumentOverrider("overrideProjects", this.entity, fetcher, selector, new FetchDocumentOverrideConfig("data/projects.json", "#projects", renderProjects, OverrideMode.InnerHTML)));
    }
    destroy() {
    }
}
