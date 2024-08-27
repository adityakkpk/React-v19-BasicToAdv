export const getMoviesData = async () => {
  try {
    const response = await fetch("https://api.github.com/users/adityakkpk");
    const data = response.json();
    console.log(data);
    
    return data;
  } catch (error) {
    console.log(error);
  }
};

