import { Component } from "../component.js";

export class ProjectsComponent extends Component {
    init(): Promise<void> {
        return fetch("pages/projects.html")
            .then(res => res.text())
            .then(html => {
                const tempDiv = document.createElement("div");
                tempDiv.innerHTML = html;
                const nodes = Array.from(tempDiv.childNodes);
                nodes.forEach(node => document.body.appendChild(node));
            });
    }

    destroy(): Promise<void> {
        const element = document.querySelector("#projects");
        if (element)
            element.remove();
        return Promise.resolve();
    }
}
