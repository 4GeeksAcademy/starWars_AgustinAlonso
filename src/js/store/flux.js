const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			fetchToGetAllItems: async (items) => {

				const store = getStore()

				let page = 1
				let thereIsMorePages = true
				let arrItems = []

				while (thereIsMorePages) {
					let url = `https://swapi.dev/api/${items}/?page=${page}`
					try {
						const res = await fetch(url)
						if (res.ok) {
							const data = await res.json()
							data.results.forEach(element => {
								arrItems = [...arrItems, element]
							});
							if (data.next) {
								page++
								console.log(url)
							}
							else {
								page = 1
								thereIsMorePages = !thereIsMorePages
							}

							switch (items) {
								case 'planets':

									break;
								case 'vehicles':
									break;
								case 'people':
									break;
								default:
									console.log('')
									break;
							}
						}

					} catch (error) {
						throw new Error(error);
					}
					console.log(arrItems)

				}

			},
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
