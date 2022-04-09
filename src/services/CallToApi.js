const CallToApi = () => {
  return fetch(`https://jsonplaceholder.typicode.com/photos?_start=0&_limit=20`)
    .then((response) => response.json())
    .then((response) => {
      const results = response.map((item) => {
        return {
          id: item.id,
          title: item.title,
          largeImage: item.url,
          smallImage: item.thumnailUrl,
        };
      });
      return results;
    });
};

export default CallToApi;
