import DashboardPage from "./pages/admin/Dashboard";
import EditProduct from "./pages/admin/Product/EditProduct";
import ListProduct from "./pages/admin/Product/ListProduct";
import Signin from "./pages/auth/Signin";
import Signup from "./pages/auth/Signup";
import HomePage from "./pages/user/Home";
import News from "./pages/user/News";
import ShopPage from "./pages/user/Shop";
import { render, router } from "./utilities";

const app = document.querySelector("#app");

router.on("/", () => {
  return render(HomePage, app);
});

router.on("/shop", () => {
  return render(ShopPage, app);
});

router.on("/news", () => {
  return render(News, app);
});

router.on("/user/signin", () => {
  return render(Signin, app);
});

router.on("/user/signup", () => {
  return render(Signup, app);
});

// private router
// router.on("/admin/*", () => {}, {
//   before(next) {
//     const { user } = JSON.parse(localStorage.getItem("user")) || {};
//     if (!user) return (window.location.href = "/");
//     if (user && user.id != "1") return (window.location.href = "/signin");
//     next();
//   },
// });
router.on("/admin", () => {
  return render(DashboardPage, app);
});
//admin Product routes
router.on("/admin/product", () => {
  //http://localhost:5173/#/admin/product
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
