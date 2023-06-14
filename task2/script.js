document.getElementById('noti').style.display = "none"
const todo = document.querySelector('#item')
const list = document.querySelector('#list')
todo.addEventListener("keyup", (event) => {
  if (event.key == "Enter") {
    setTimeout(() => {
      document.getElementById('noti').style.display = "flex"
    }, 100);
    setTimeout(() => {
      document.getElementById('noti').style.display = "none"
    }, 2000);
    addtodo(todo.value);
    todo.value = ""
    // document.getElementById('noti').style.display = " block"
  };
})
let addtodo = (items) => {
  let listitem = document.createElement("li")
  listitem.innerHTML = `${items} <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"/></svg>`
  listitem.addEventListener('click', () => {
    listitem.classList.toggle("done")
  })
  listitem.querySelector('svg').addEventListener("click", () => {
    listitem.remove()
  })
  list.appendChild(listitem)
}