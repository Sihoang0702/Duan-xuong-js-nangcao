const app = document.querySelector("#app");
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";

import HomePage from "./pages/HomePage";
import AdminProjectsPage from "./pages/admin/Projects";

import { render, router } from "./utilities";
import AdminProjectAddPage from "./pages/admin/Projects-add";
import AdminProjectEditPage from "./pages/admin/Projects-edit";
import AboutmePage from "./pages/AboutmePage";
import ProjectsPage from "./pages/ProjectsPage";
import Contact from "./pages/Contact";
import ProjectDetail from "./pages/ProjectDetail";
import AdminAboutmeHomePage from "./pages/admin/AboutMeHomePage";
import AdminAboutMeEditHomePage from "./pages/admin/AboutMeHomePage-edit";
import AdminTechnologies from "./pages/admin/Technologies";
import AdminTechnologiAddPage from "./pages/admin/Technologies-add";
import AdminTechnologiesEditPage from "./pages/admin/Technologies-edit";

router.on("/", () => render(HomePage, app));
router.on("/projects", () => render(ProjectsPage, app));
router.on("/contact", () => render(Contact, app));
router.on("/aboutme", () => render(AboutmePage, app));
router.on("/projects/:id", ({ data }) =>
  render(() => ProjectDetail(data.id), app)
);

// admin 
// projects
router.on("/admin/projects", () => render(AdminProjectsPage, app));
router.on("/admin/projects/add", () => render(AdminProjectAddPage, app));
router.on("/admin/projects/:id/edit", ({ data }) =>
  render(() => AdminProjectEditPage(data), app)
);
// aboutmehomepage
router.on("/admin/aboutmehomepages", () => render(AdminAboutmeHomePage, app));
router.on("/admin/aboutmehomepages/:id/edit", ({ data }) =>
  render(() => AdminAboutMeEditHomePage(data), app)

);
// technologies
router.on("/admin/technologies", () => render(AdminTechnologies, app));
router.on("/admin/technologies/add", () => render(AdminTechnologiAddPage, app));
router.on("/admin/technologies/:id/edit", ({ data }) =>
  render(() => AdminTechnologiesEditPage(data), app)
);

router.resolve();
