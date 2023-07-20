import HomePage from "./pages/Home";
import { render, router } from "./utilities";

const app = document.querySelector("#app");

router.on("/", () => {
  return render(HomePage, app);
});

router.resolve();
