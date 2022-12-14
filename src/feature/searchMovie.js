export const searchCountryByName = (
    searchString,
    countries,
    setSearchResult
  ) => {

    if (searchString === "") {
        setSearchResult([]);
      }
    
      // discontinue if there is no search yet
      if (searchString === null || searchString === "" || countries === []) return;
    
      // empty the previous search array if any
      setSearchResult([]);
      let results = [];
    
      // create a regular expression pattern for the search string
      const pattern = new RegExp(searchString, "gi");
    
      // loop through all countries
      for (const country of countries) {
        const countryName = country.countryName;
    
        // check if the search word or character matches
        if (pattern.test(countryName)) {
          results.push(country);
        }
      }
    
      setSearchResult(results)
  
};

export const filterCountryByName = (
    searchString,
    countries,
    setSearchResult
  ) => {
  
};