import { CarsProps } from "@/types";

export async function fetchCars() {
    const headers= {
		'X-RapidAPI-Key': '5f64db4894msh23f73367b11471fp19ef13jsne5bb3a91e846',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
	}
    const response= await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=carrera',{
        headers:headers,
    })
const result = await response.json();
return result;
}


export const calculateCarRent = (city_mpg: number, year: number) => {
    const basePricePerDay = 50; // Base rental price per day in dollars
    const mileageFactor = 0.1; // Additional rate per mile driven
    const ageFactor = 0.05; // Additional rate per year of vehicle age
  
    // Calculate additional rate based on mileage and age
    const mileageRate = city_mpg * mileageFactor;
    const ageRate = (new Date().getFullYear() - year) * ageFactor;
  
    // Calculate total rental rate per day
    const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;
  
    return rentalRatePerDay.toFixed(0);
  };
  
  export const generateCarImageUrl = (car: CarsProps, angle?: string) => {
    try {
      const baseUrl = "https://cdn.imagin.studio/getimage";
      const { make, model, year } = car;
  
      // Create a URL object with the base URL
      const url = new URL(baseUrl);
  
      // Append the search parameters
      url.searchParams.append('customer', process.env.NEXT_PUBLIC_IMAGIN_API_KEY || '');
      url.searchParams.append('make', make);
      url.searchParams.append('modelFamily', model.split(" ")[0]);
      url.searchParams.append('zoomType', 'fullscreen');
      url.searchParams.append('modelYear', `${year}`);
  
      // Optionally, append the 'angle' parameter if provided
      if (angle) {
        url.searchParams.append('angle', angle);
      }
  
      const imageUrl = url.toString(); // Convert the URL object back to a string
      console.log("Generated URL:", imageUrl);
      
      return imageUrl;
    } catch (error) {
      console.error("Error generating car image URL:", error);
      return ''; // Return an empty string or handle the error as needed
    }
  };
  