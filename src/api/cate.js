import instance from "./instance";
const getAll = () =>{
    return instance.get('/categories')
}
const remove = (id) =>{
    return instance.delete(`/categories/${id}`)
}
const add = (cate) =>{
    return instance.post(`/categories`,cate)

}
const update = (cate) =>{
    return instance.put(`/categories/${cate.id}`,cate)

}
export {getAll, remove , add ,update}