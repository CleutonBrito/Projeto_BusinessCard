/* FUNÇÃO PARA TROCAR OS MODOS ( Dark / Light ) */

function toggleMode() {
  const html = document.documentElement
  /*if (html.classList.contains("light")) {
    html.classList.remove("light")
  } else {                                       --- USANDO CONDIÇÃO IF / ELSE
    html.classList.add("light") */

  html.classList.toggle("light")

  const img = document.querySelector("#profile img")
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/CleutonBrito.png")
  } else {
    img.setAttribute("src", "./assets/CleutonBrito_DarkMode.png")
  }
}
