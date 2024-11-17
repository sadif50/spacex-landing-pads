export async function load({fetch}) {
	let res = await fetch("https://api.spacexdata.com/v3/landpads");
  return {landpads : await res.json()}
}