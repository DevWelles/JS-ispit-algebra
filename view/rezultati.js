export default (rezultati) => {
  return `
  <h2> Evo Rezultati za upit ${rezultati.name}:</h2>
  <ul>
    ${rezultati.country.map((el)=>{
      return `<li>${el.country_id} - ${el.probability}</li>`
    }).join('')}
  </ul>
  `;
};