import HomePage from "./pages/Home";
import ShopPage from "./pages/Shop";
import { render, router } from "./utilities";

const app = document.querySelector("#app");

router.on("/", () => {
  return render(HomePage, app);
});

router.on("/shop", () => {
  return render(ShopPage, app);
});

router.resolve();
