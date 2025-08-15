import { NavigationComponent } from "../components/navigationComponent.js";
import { Entity } from "../entity.js";
import { SkillsComponent } from "../page_components/skills.js";
import { AboutMeComponent } from "../page_components/about_me.js";

export class AboutMeNavigator extends NavigationComponent {
    async onNavigate(navigationComponent: NavigationComponent): Promise<void> {
        await navigationComponent.entity.getScene().removeEntities(navigationComponent.entity.getScene().getLayerEntities("page"));

        const aboutMeEntity: Entity = this.entity.getScene().createEntity("AboutMe", "page");
        
        // Create and add AboutMe component (will wait for init to complete)
        const aboutMeComponent = new AboutMeComponent("WhyHireComponent", aboutMeEntity);
        await aboutMeEntity.add(aboutMeComponent);
        
        // Then create and add Skills component (will wait for init to complete)
        const skillsComponent = new SkillsComponent("SkillsComponent", aboutMeEntity);
        await aboutMeEntity.add(skillsComponent);
    }
}