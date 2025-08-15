import { Component } from "../component.js";
export class CreditsComponent extends Component {
    init() {
        return fetch("pages/credits.html")
            .then(res => res.text())
            .then(html => {
            const tempDiv = document.createElement("div");
            tempDiv.innerHTML = html;
            const nodes = Array.from(tempDiv.childNodes);
            nodes.forEach(node => document.body.appendChild(node));
        });
    }
    destroy() {
        const element = document.querySelector("#credits");
        if (element)
            element.remove();
        return Promise.resolve();
    }
}
