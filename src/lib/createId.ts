
let id:number = parseInt(window.localStorage.getItem('id_list')|| '0') || 0
function createId(){
    id++
    window.localStorage.setItem('id_list',id.toString())
    return id
}
export default createId;