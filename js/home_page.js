import { Scene } from "./scene.js";
import { AboutMeNavigator } from "./navigators/about_me_navigator.js";
import { ProjectsNavigator } from "./navigators/projects_navigator.js";
import { CreditsNavigator } from "./navigators/credits_navigator.js";
import { ClientsNavigator } from "./navigators/clients_navigator.js";
const home = new Scene("HomeScene");
const navigationEntity = home.createEntity("Navigation");
navigationEntity.add(new AboutMeNavigator("#about-me-btn", "AboutMeNavigator", navigationEntity)).then(aboutMeNavigatorComponent => {
    // Setting about me as default page
    aboutMeNavigatorComponent.onNavigate(aboutMeNavigatorComponent);
});
navigationEntity.add(new ProjectsNavigator("#projects-btn", "ProjectsNavigator", navigationEntity));
navigationEntity.add(new CreditsNavigator("#credits-btn", "CreditsNavigator", navigationEntity));
navigationEntity.add(new ClientsNavigator("#clients-btn", "ClientsNavigator", navigationEntity));
