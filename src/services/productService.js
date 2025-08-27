export const getProductsList = async (searchTerm) => {
      const response = await fetch(`${process.env.REACT_APP_HOST}/444/products?name_like=${searchTerm ? searchTerm : ''}`);
      if(!response.ok) {
            throw { message : response.statusText, status : response.status} //eslint-disable-line
      }
      const json = await response.json();
      return json;
}

export const getFeaturedProductsList = async () => {
      const response = await fetch(`${process.env.REACT_APP_HOST}/444/featured_products`);
      if(!response.ok) {
            throw { message : response.statusText, status : response.status} //eslint-disable-line
      }
      const json = await response.json();
      return json;
}

export const getProduct = async (id) => {
      const response = await fetch(`${process.env.REACT_APP_HOST}/444/products/${id}`);
      if(!response.ok) {
            throw { message : response.statusText, status : response.status} //eslint-disable-line
      }
      const json = await response.json();
      return json;
}
