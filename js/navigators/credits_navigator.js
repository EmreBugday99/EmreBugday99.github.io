import { NavigationComponent } from "../components/navigationComponent.js";
import { CreditsComponent } from "../page_components/credits.js";
export class CreditsNavigator extends NavigationComponent {
    async onNavigate(navigationComponent) {
        await navigationComponent.entity.getScene().removeEntities(navigationComponent.entity.getScene().getLayerEntities("page"));
        const creditsEntity = this.entity.getScene().createEntity("Credits", "page");
        // Create and add Credits component (will wait for init to complete)
        const creditsComponent = new CreditsComponent("CreditsComponent", creditsEntity);
        await creditsEntity.add(creditsComponent);
    }
}
