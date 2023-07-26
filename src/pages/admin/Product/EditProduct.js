import axios from "axios";
import FooterAdmin from "../../../components/FooterAdmin";
import HeaderAdmin from "../../../components/HeaderAdmin";
import { router, useEffect, useState } from "../../../utilities";
import { getAll } from "../../../api/cate";

const EditProduct = ({ id }) => {
  const [cates, setCate] = useState([]);
  const [product, setProduct] = useState({});

  useEffect(() => {
    getAll().then(({ data }) => setCate(data));

    axios.get(`http://localhost:3000/products/${id}`).then(({ data }) => {
      setProduct(data);
    });
  }, []);

  useEffect(() => {
    document.querySelector("#form").addEventListener("submit", (e) => {
      e.preventDefault();
      const productUpdate = {
        name: document.querySelector("#ten").value,
        image: document.querySelector("#anh").value,
        price: document.querySelector("#gia").value,
        quantity: document.querySelector("#soluong").value,
        description: document.querySelector("#mota").value,
        categoryId: document.querySelector("#category").value,
      };
      if (productUpdate.name == "") {
        alert("Moi nhap name");
      } else if (productUpdate.image == "") {
        productUpdate.image = product.image;
      } else if (productUpdate.price == "") {
        alert("Moi nhap price");
      } else if (productUpdate.price <= 0) {
        alert("Moi nhap price>0 ");
      } else if (productUpdate.quantity == "") {
        alert("Moi nhap quantity");
      } else if (productUpdate.quantity <= 0) {
        alert("Moi nhap quantity>0 ");
      } else if (productUpdate.description == "") {
        alert("Moi nhap description");
      } else if (productUpdate.categoryId == "") {
        alert("Moi nhap categoryId");
      } else {
        axios
          .put(`http://localhost:3000/products/${id}`, productUpdate)
          .then(() => {
            alert("thanh cong");
            router.navigate("/admin/product");
          });
      }
    });
  });
  return /*html*/ `
    ${HeaderAdmin()}
    <main class="mt-0 transition-all duration-200 ease-soft-in-out">
      <section class="min-h-screen mb-32">
        <div
          class="relative flex items-start pt-12 pb-56 m-4 overflow-hidden bg-center bg-cover min-h-50-screen rounded-xl"
          style="background-image: url('../assets/img/curved-images/curved14.jpg')">
          <span
            class="absolute top-0 left-0 w-full h-full bg-center bg-cover bg-gradient-to-tl from-gray-900 to-slate-800 opacity-60"></span>
          <div class="container z-10">
            <div class="flex flex-wrap justify-center -mx-3">
              <div class="w-full max-w-full px-3 mx-auto mt-0 text-center lg:flex-0 shrink-0 lg:w-5/12">
                <h1 class="mt-12 mb-2 text-white">Welcome!</h1>
                <p class="text-white">Use these awesome templates to update new products in your project for free.</p>
              </div>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="flex flex-wrap -mx-3 -mt-48 md:-mt-56 lg:-mt-48">
            <div class="w-full max-w-full px-3 mx-auto mt-0 md:flex-0 shrink-0 md:w-7/12 lg:w-5/12 xl:w-4/12">
              <div
                class="relative z-0 flex flex-col min-w-0 break-words bg-white border-0 shadow-soft-xl rounded-2xl bg-clip-border">
                <div class="p-6 mb-0 text-center bg-white border-b-0 rounded-t-2xl">
                  <h5>Update Product</h5>
                </div>

                <div class="flex-auto p-6">
                  <form role="form text-left" id="form">
                    <div class="mb-4">
                      <input type="text"
                        class="text-sm focus:shadow-soft-primary-outline leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow"
                        placeholder="name" aria-label="name" aria-describedby="name-addon" id="ten" value="${
                          product.name
                        }" />
                    </div>
                    <div class="mb-4">
                      <input type="text"
                        class="text-sm focus:shadow-soft-primary-outline leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow"
                        placeholder="ảnh" aria-label="ảnh" aria-describedby="anh-addon" id="anh" value="${
                          product.image
                        }" />
                    </div>
                    <div class="mb-4">
                      <input type="number"
                        class="text-sm focus:shadow-soft-primary-outline leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow"
                        placeholder="giá" aria-label="giá" aria-describedby="gia-addon" id="gia" value="${
                          product.price
                        }" />
                    </div>
                    <div class="mb-4">
                      <input type="number"
                        class="text-sm focus:shadow-soft-primary-outline leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow"
                        placeholder="số lượng" aria-label="số lượng" aria-describedby="soluong-addon" id="soluong"
                        value="${product.quantity}" />
                    </div>
                    <div class="mb-4">
                      <input type="text"
                        class="text-sm focus:shadow-soft-primary-outline leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow"
                        placeholder="mô tả" aria-label="mô tả" aria-describedby="mota-addon" id="mota" value="${
                          product.description
                        }" />
                    </div>
                    <div class="mb-4">
                      <select data-te-select-init data-te-select-filter="true"
                        class="text-sm focus:shadow-soft-primary-outline leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow"
                        id="category">
                        <option value="${product.categoryId}">
                        ${product.categoryId}
                        </option>
                        ${cates.map((cate) => {
                          return `
                        <option value="${cate.id}">${cate.name}</option>

                        `;
                        })}
                      </select>
                    </div>

                    <div class="text-center">
                      <button type="submit"
                        class="inline-block w-full px-6 py-3 mt-6 mb-2 font-bold text-center text-white uppercase align-middle transition-all bg-transparent border-0 rounded-lg cursor-pointer active:opacity-85 hover:scale-102 hover:shadow-soft-xs leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 bg-gradient-to-tl from-gray-900 to-slate-800 hover:border-slate-700 hover:bg-slate-700 hover:text-white">Submit</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
    ${FooterAdmin()}
    `;
};

export default EditProduct;
