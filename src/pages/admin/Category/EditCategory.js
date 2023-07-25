import { router,useEffect,useState } from "../../../utilities"
import { update } from "../../../api/cate";
import HeaderAdmin from "../../../components/HeaderAdmin";

const EditCategory = ({ id }) => {

  const [cate, setCate] = useState({}) 
  useEffect(() => {
      fetch(`http://localhost:3000/categories/${id}`)
          .then(res => res.json())
          .then(data => setCate(data))
  }, [])
  useEffect(() => {
      const updateForm = document.querySelector("#update-form")
      updateForm.addEventListener("submit", (event) => {
          event.preventDefault()
          const newCate = {
              "id":id,
              "name": document.querySelector("#name").value,
              
          }
          update(newCate).then(() => { router.navigate("/admin/category") })
      })
  })

  return /*html*/ `
  ${HeaderAdmin()}
  <div class="flex flex-wrap -mx-3 mt-12 ">
    <div class="flex-none w-full max-w-full px-3">
      <div class="relative flex flex-col min-w-0 mb-6 break-words bg-white border-0 border-transparent border-solid shadow-soft-xl rounded-2xl bg-clip-border">
        
      <div class="flex-auto pl-9 pb-2">
        <div class=" overflow-x-auto">
          <form id="update-form">
            <label class="mb-2 ml-1 font-bold text-lg text-slate-700 pl-12 ">Update loại hàng</label>
            <div class="mb-4 pl-12">
            <input type="text" id="name" class="focus:shadow-soft-primary-outline text-sm leading-5.6 ease-soft block w-2/5 appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:outline-none focus:transition-shadow   " placeholder="Loại" value="${cate.name}"  />
            </div>
            <div class="text-center">
            <button  class="inline-block px-6 py-3 mt-6 mb-0 font-bold text-center text-white uppercase align-middle transition-all bg-transparent border-0 rounded-lg cursor-pointer shadow-soft-md bg-x-25 bg-150 leading-pro text-xs ease-soft-in tracking-tight-soft bg-gradient-to-tl from-blue-600 to-cyan-400 hover:scale-102 hover:shadow-soft-xs active:opacity-85">Submit</button>
            </div>
          </form>
        </div>
    </div>
  </div>
  </div>
  
  `;
};

export default EditCategory;
