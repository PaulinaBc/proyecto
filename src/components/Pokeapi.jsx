const apiUrl = "https://pokeapi.co/api/v2/";

const fetchApi = async (endpoint) => {
    const response = await fetch(`${apiUrl}${endpoint}`);
    const data = await response.json();
    return data;
};

export const getItemAttribute = async (idOrName) => {
    return fetchApi(`item-attribute/${idOrName}/`);
};

export const getBerry = async (idOrName) => {
    return fetchApi(`berry/${idOrName}/`);
};

export const getCharacteristic = async (id) => {
    return fetchApi(`characteristic/${id}/`);
};
