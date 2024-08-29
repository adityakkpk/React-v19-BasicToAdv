export const getMovieDetails = async ({ params }) => {
  try {
    const response = await fetch(
      `http://www.omdbapi.com/?i=${params.ID}&apikey=${
        import.meta.env.VITE_API_KEY
      }`
    );
    const data = response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
