import { Component } from "../component.js";
import { OverrideMode } from "../components/documentOverrider.js";
import { FetchJsonComponent } from "../components/fetch.js";
import { FetchDocumentOverrideConfig } from "../components/fetchDocumentOverrideConfig.js";
import { FetchDocumentOverrider } from "../components/fetchDocumentOverrider.js";
import { SelectorComponent } from "../components/selector.js";
import { renderClients } from "../templates/renderers.js";
export class ClientsComponent extends Component {
    init() {
        const fetcher = this.entity.add(new FetchJsonComponent("fetchClients", this.entity));
        const selector = this.entity.add(new SelectorComponent("selectClients", this.entity));
        this.entity.add(new FetchDocumentOverrider("overrideClients", this.entity, fetcher, selector, new FetchDocumentOverrideConfig("data/clients.json", "#clients", renderClients, OverrideMode.InnerHTML)));
    }
    destroy() { }
}
