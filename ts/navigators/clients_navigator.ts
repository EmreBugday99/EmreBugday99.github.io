import { NavigationComponent } from "../components/navigationComponent.js";
import { Entity } from "../entity.js";
import { ClientsComponent } from "../page_components/clients.js";
    
export class ClientsNavigator extends NavigationComponent {
    async onNavigate(navigationComponent: NavigationComponent): Promise<void> {
        await navigationComponent.entity.getScene().removeEntities(navigationComponent.entity.getScene().getLayerEntities("page"));

        const clientsEntity: Entity = this.entity.getScene().createEntity("Clients", "page");

        // Create and add Clients component (will wait for init to complete)
        const clientsComponent = new ClientsComponent("ClientsComponent", clientsEntity);
        await clientsEntity.add(clientsComponent);
    }
}