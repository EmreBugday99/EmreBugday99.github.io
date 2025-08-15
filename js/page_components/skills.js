import { Component } from "../component.js";
export class SkillsComponent extends Component {
    init() {
        return fetch("pages/skills.html")
            .then(res => res.text())
            .then(html => {
            const tempDiv = document.createElement("div");
            tempDiv.innerHTML = html;
            const nodes = Array.from(tempDiv.childNodes);
            nodes.forEach(node => document.body.appendChild(node));
        });
    }
    destroy() {
        const element = document.querySelector("#skills");
        if (element)
            element.remove();
        return Promise.resolve();
    }
}
