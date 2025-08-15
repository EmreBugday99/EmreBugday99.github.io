import { NavigationComponent } from "../components/navigationComponent.js";
import { Entity } from "../entity.js";
import { ClientsComponent } from "../page_components/clients.js";
import { ProjectsComponent } from "../page_components/projects.js";

export class ProjectsNavigator extends NavigationComponent {
    async onNavigate(navigationComponent: NavigationComponent): Promise<void> {
        await navigationComponent.entity.getScene().removeEntities(navigationComponent.entity.getScene().getLayerEntities("page"));

        const projectsEntity: Entity = this.entity.getScene().createEntity("Projects", "page");
        
        // Create and add Projects component (will wait for init to complete)
        const projectsComponent = new ProjectsComponent("ProjectsComponent", projectsEntity);
        await projectsEntity.add(projectsComponent);
    }
}