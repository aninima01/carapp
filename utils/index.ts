export async function fetchCars() {
  const headers = {
    "X-RapidAPI-Key": "af732cb164msh6e4809f71b72b97p175793jsn2524170da94b",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };
  const response = await fetch(
    "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars",
    {
      headers: headers,
    }
  );

  const result = await response.json();

  return result;
}
