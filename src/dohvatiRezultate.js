export default async (terminPretrage) => {
  let rezSaServera = await fetch(`https://api.nationalize.io?name=${terminPretrage}`);
  let rezJSON = await rezSaServera.json();
  // console.log(rezJSON)
  return rezJSON //vraćamo promise
}