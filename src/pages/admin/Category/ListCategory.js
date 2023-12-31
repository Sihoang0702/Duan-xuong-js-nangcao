import HeaderAdmin from "../../../components/HeaderAdmin";
import { useEffect,useState } from "../../../utilities";
import {remove, getAll} from "../../../api/cate"
import FooterAdmin from "../../../components/FooterAdmin";
const ListCategory = () => {
  const [cates, setCate] = useState([])
  useEffect(() => {
      getAll().then(({data}) => setCate(data))
  }, [])
  useEffect(() => {
      const btnList = document.querySelectorAll(".btn-remove")
      for (let btn of btnList) {
          const id = btn.dataset.id
          btn.addEventListener('click', () => {
          remove(id).then(() => {
                  const newCateList = cates.filter((cate) => {
                      return cate.id != id
                  })
                  setCate(newCateList);
              })
          })
      }
  })
  return /*html*/ `
    ${HeaderAdmin()}
    <div class="w-full px-6 py-6 mx-auto">
    <div class="flex flex-wrap -mx-3">
    <div class="flex-none w-full max-w-full px-3">
    <div class="relative flex flex-col min-w-0 mb-6 break-words bg-white border-0 border-transparent border-solid shadow-soft-xl rounded-2xl bg-clip-border">
        <div class="p-6 pb-0 mb-0 bg-white border-b-0 border-b-solid rounded-t-2xl border-b-transparent">
        <h6>Authors table</h6>
        </div >
        <div class="flex-none w-96 max-w-full px-3 text-right">
        <a class="inline-block px-6 py-3 font-bold text-center text-white uppercase align-middle transition-all bg-transparent rounded-lg cursor-pointer leading-pro text-xs ease-soft-in shadow-soft-md bg-150 bg-gradient-to-tl from-gray-900 to-slate-800 hover:shadow-soft-xs active:opacity-85 hover:scale-102 tracking-tight-soft bg-x-25" href="#/admin/category/add"> Add New Card</a>
        </div>
    <div class="flex-auto px-0 pt-0 pb-2">
    <div class="p-0 overflow-x-auto">

    <table class="items-center w-full mb-0 align-top border-gray-200 text-slate-500">
    <thead class="align-bottom">
        <tr>
            <th class="px-6 py-3 pl-2 font-bold text-left uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">STT</th>
            <th class="px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">Employed</th>
            <th class="px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">Action</th>
            
            </tr>
        </tr>
    </thead>
    <tbody>
    ${cates.map((cate, index) => {
      return /*html*/`
    <tr>
        <td class="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
        <p class="mb-0 text-xs font-semibold leading-tight">${index + 1}</p>
        </td>
        <td class="p-2 text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
        <span class="text-xs font-semibold leading-tight text-slate-400">${cate.name}</span>
        </td>
        <td class="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
          <button class=" btn-remove relative z-10 inline-block px-4 py-3 mb-0 font-bold text-center text-transparent uppercase align-middle transition-all border-0 rounded-lg shadow-none cursor-pointer leading-pro text-xs ease-soft-in bg-150 bg-gradient-to-tl from-red-600 to-rose-400 hover:scale-102 active:opacity-85 bg-x-25 bg-clip-text"  data-id="${cate.id}" onclick="return confirm('bạn có muốn xóa cate không?')">
           Delete
          </button>
          <a href="#/admin/category/update/${cate.id}">
          <button class="inline-block px-4 py-3 mb-0 font-bold text-center uppercase align-middle transition-all bg-transparent border-0 rounded-lg shadow-none cursor-pointer leading-pro text-xs ease-soft-in bg-150 hover:scale-102 active:opacity-85 bg-x-25 text-slate-700"> Update</button>
          </a>
        </td>
        
    </tr>
    `
}).join("")}
   
    </tbody>
    </table>

    </div>
    </div>
    </div>
    </div>
    </div>
    </div>

${FooterAdmin()}
  `;
};

export default ListCategory;
