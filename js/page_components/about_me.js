import { Component } from "../component.js";
export class AboutMeComponent extends Component {
    init() {
        return fetch("pages/about-me.html")
            .then(res => res.text())
            .then(html => {
            const tempDiv = document.createElement("div");
            tempDiv.innerHTML = html;
            const nodes = Array.from(tempDiv.childNodes);
            nodes.forEach(node => document.body.appendChild(node));
        });
    }
    destroy() {
        const element = document.querySelector("#why-hire");
        if (element)
            element.remove();
        return Promise.resolve();
    }
}
