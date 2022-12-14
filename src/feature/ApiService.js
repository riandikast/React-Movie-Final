export const getMovie = async () => {
      try {
          const response = await fetch(`https://627baa05a01c46a85322c5f7.mockapi.io/PopularMovie`);
          const json = await response.json();
   
          return json;
      } catch (error) {
          console.log(error)
      }
  }

  export const getBanner = async () => {
      try {
          const response = await fetch(`https://627baa05a01c46a85322c5f7.mockapi.io/NewMovieAndika`);
          const json = await response.json();
   
          return json;
      } catch (error) {
          console.log(error)
      }
  }