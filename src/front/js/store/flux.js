const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      message: null,
      people: [],
      planets: [],
      starships: [],
      favorites: []
    },
    actions: {
      // Use getActions to call a function within a fuction

      getMessage: async () => {
        try {
          // fetching data from the backend
          const resp = await fetch(process.env.BACKEND_URL + "/api/hello");
          const data = await resp.json();
          setStore({ message: data.message });
          // don't forget to return something, that is how the async resolves
          return data;
        } catch (error) {
          console.log("Error loading message from backend", error);
        }
      },

      getPeople: () => {
        fetch("https://swapi.dev/api/people", {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        })
          .then((res) => res.json())
          .then((data) => setStore({ people: data }))
          .catch((err) => console.error(err));
      },

      getPlanets: () => {
        fetch("https://swapi.dev/api/planets", {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        })
          .then((res) => res.json())
          .then((data) => setStore({ planets: data }))
          .catch((err) => console.error(err));
      },
      getStarships: () => {
        fetch("https://swapi.dev/api/starships", {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        })
          .then((res) => res.json())
          .then((data) => setStore({ starships: data }))
          .catch((err) => console.error(err));
      },

      setFavorite: (favoritesitem) => {
      const store = getStore()
      const favorites = store.favorites
      setStore({favorites:[...favorites, favoritesitem]})
      },

      deleteFavorite: (favoritesitem) => {
        const store = getStore()
        const favorites = store.favorites.filter(item=>item!=favoritesitem)
        setStore({favorites:[...favorites]})
        },
      
      changeColor: (index, color) => {
        //get the store
        const store = getStore();
      },
    },
  };
};

export default getState;
