import { Component } from "../component.js";
import { OverrideMode } from "../components/documentOverrider.js";
import { FetchJsonComponent } from "../components/fetch.js";
import { FetchDocumentOverrideConfig } from "../components/fetchDocumentOverrideConfig.js";
import { FetchDocumentOverrider } from "../components/fetchDocumentOverrider.js";
import { SelectorComponent } from "../components/selector.js";
import { SkillsData } from "../data/types.js";
import { renderSkills } from "../templates/renderers.js";

export class SkillsComponent extends Component {
    init(): void {
        const fetcher = this.entity.add(new FetchJsonComponent("fetchSkills", this.entity));
        const selector = this.entity.add(new SelectorComponent("selectSkills", this.entity));
        this.entity.add(new FetchDocumentOverrider<SkillsData>(
            "overrideSkills",
            this.entity,
            fetcher,
            selector,
            new FetchDocumentOverrideConfig<SkillsData>(
                "data/skills.json",
                "#skills",
                renderSkills,
                OverrideMode.InnerHTML
            )
        ));
    }

    destroy(): void {
    }
}
