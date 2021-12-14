import Layout from "../view/layout.js";
import dohvatiRezultate from "./dohvatiRezultate.js";
import RezultatiView from "../view/rezultati.js";

export default () => {
 document.getElementById("app").innerHTML = Layout();
 
 const search = document.getElementById("search");
 search.onchange = async () =>{
  document.getElementById("spinner").style.display = "block";
  let rezultati = await dohvatiRezultate(search.value) //ova func returna promise i zato ga awaitamo i naravno pospremamo u varijablu jer koristimo await
  console.log(rezultati)
  if(rezultati.country.length < 1){
    document.getElementById("rezultati").innerHTML = "Nema rezultata za vaš upit"
  }else {
    document.getElementById("rezultati").innerHTML = RezultatiView(rezultati)
  }
  
  document.getElementById("spinner").style.display = "none";
 }
};