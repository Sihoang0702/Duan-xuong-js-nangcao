import HeaderAdmin from "./../../../components/HeaderAdmin";
import FooterAdmin from "./../../../components/FooterAdmin";
import { useEffect, useState } from "../../../utilities";
import axios from "axios";

const ListProduct = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:3000/products`).then(({ data }) => {
      setProducts(data);
    });
  }, []);
  useEffect(() => {
    const btnDelete = document.querySelectorAll("#btn-danger");
    for (const btn of btnDelete) {
      const id = btn.dataset.id;
      btn.addEventListener("click", () => {
        const tb = window.confirm("Are you sure you want to delete");
        if (tb) {
          axios.delete(`http://localhost:3000/products/${id}`).then(() => {
            alert("Thanh cong");
            setProducts(products.filter((pro) => pro.id != id));
          });
        }
      });
    }
  });
  return /*html*/ `
  ${HeaderAdmin()}
  <div class="w-full px-6 py-6 mx-auto">
        <!-- table 1 -->

        <div class="flex flex-wrap -mx-3">
          <div class="flex-none w-full max-w-full px-3">
            <div class="relative flex flex-col min-w-0 mb-6 break-words bg-white border-0 border-transparent border-solid shadow-soft-xl rounded-2xl bg-clip-border">
              <div class="p-6 pb-0 mb-0 bg-white border-b-0 border-b-solid rounded-t-2xl border-b-transparent">
                <h6 class="basis-1/2">List Products</h6>
                <a class="float-right ml-4" href="/#/admin/product/add"><button class="bg-gradient-to-tl from-blue-600 to-blue-600 px-2.5 text-xs rounded-1.8 py-1.4 inline-block whitespace-nowrap  font-bold uppercase leading-none text-white">AddPro</button></a>

              </div>
              <div class="flex-auto px-0 pt-0 pb-2">
                <div class="p-0 overflow-x-auto">
                  <table class="items-center w-full mb-0 align-top border-gray-200 text-slate-500">
                    <thead class="align-bottom">
                      <tr>
                        <th class="px-6 py-3 font-bold text-left uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">Product</th>
                        <th class="px-6 py-3 pl-2 font-bold text-left uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">Price</th>
                        <th class="px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">Quantity</th>
                        <th class="px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">Description</th>
                        <th class="px-6 py-3 font-semibold capitalize align-middle bg-transparent border-b border-gray-200 border-solid shadow-none tracking-none whitespace-nowrap text-slate-400 opacity-70">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      ${products.map((product) => {
                        return /*html*/ `
                        <tr>
                        <td class="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                          <div class="flex px-2 py-1">
                            <div>
                              <img src="${product.image}" class="inline-flex items-center justify-center mr-4 text-sm text-white transition-all duration-200 ease-soft-in-out h-9 w-9 rounded-xl" alt="user1" />
                            </div>
                            <div class="flex flex-col justify-center">
                              <h6 class="mb-0 text-sm leading-normal">${product.name}</h6>
                            </div>
                          </div>
                        </td>
                        <td class="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                          <p class="mb-0 text-xs font-semibold leading-tight text-red-500 font-bold">${product.price} VND </p>
                        </td>
                        <td class="p-2 text-sm leading-normal text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                          <span class="bg-gradient-to-tl from-green-600 to-lime-400 px-2.5 text-xs rounded-1.8 py-1.4 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white">${product.quantity}</span>
                        </td>
                        <td class="p-2 text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                          <span class="text-xs font-semibold leading-tight text-slate-400">${product.description}</span>
                        </td>
                        <td class="p-2 text-sm leading-normal text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                          <a href="/#/admin/product/${product.id}/edit"><button class="bg-gradient-to-tl from-blue-600 to-blue-600 px-2.5 text-xs rounded-1.8 py-1.4 inline-block whitespace-nowrap  font-bold uppercase leading-none text-white ">Edit</button></a>
                          <a href="javascript:;"><button class="bg-gradient-to-tl from-red-600 to-red-600 px-2.5 text-xs rounded-1.8 py-1.4 inline-block whitespace-nowrap  align-baseline font-bold uppercase leading-none text-white"id="btn-danger" data-id="${product.id}">Delete</button></a>
                        </td>
                      </tr>`;
                      })}

                    </tbody>
                  </table>

                </div>
              </div>
            </div>
          </div>
        </div>
        ${FooterAdmin()}
  `;
};

export default ListProduct;
