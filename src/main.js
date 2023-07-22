import EditProduct from "./pages/admin/Product/EditProduct";
import ListProduct from "./pages/admin/Product/ListProduct";
import HomePage from "./pages/user/Home";
import ShopPage from "./pages/user/Shop";
import { render, router } from "./utilities";

const app = document.querySelector("#app");

router.on("/", () => {
  return render(HomePage, app);
});

router.on("/shop", () => {
  return render(ShopPage, app);
});

// private router
router.on("/admin/*", () => {}, {
  before(next) {
    const { user } = JSON.parse(localStorage.getItem("user")) || {};
    if (!user) return (window.location.href = "/");
    if (user && user.id != "1") return (window.location.href = "/signin");
    next();
  },
});
//admin Product routes
router.on("/admin/product", () => {
  return render(ListProduct, app);
});
router.on("/admin/product/add", () => {
  return render(ListProduct, app);
});
router.on("/admin/product/:id/edit", ({ data }) => {
  return render(EditProduct(data), app);
});
//admin Category routes
router.on("/admin/category", () => {
  return render(ListProduct, app);
});
router.on("/admin/category/add", () => {
  return render(ListProduct, app);
});
router.on("/admin/category/:id/edit", ({ data }) => {
  return render(EditProduct(data), app);
});
router.resolve();
