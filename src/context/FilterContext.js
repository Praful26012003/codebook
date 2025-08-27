import { useContext } from "react";
import {filterReducer} from "../reducers"
import { useReducer } from "react";
import { createContext } from "react";
const filterInitialState = {
    productList: [],
    inStock: false,
    bestSeller: false,
    sortBy: null,
    rating: null
}

const FilterContext = createContext(filterInitialState);

export const FilterContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(filterReducer, filterInitialState)

    function loadProducts(products) {
        dispatch({
            type: "LOAD_PRODUCTS",
            payload: {products: products}
        })
    }

    function sortByPrice(products) {
        if(state.sortBy === "LOW_TO_HIGH") {
            return products.sort((a, b) => Number(a.price) - Number(b.price));  
        }
        if(state.sortBy === "HIGH_TO_LOW") {
            return products.sort((a, b) => Number(b.price) - Number(a.price));  
        }
        return products;
    }

    function rating(products) {
        if(state.rating === "4_STARS_AND_ABOVE") {
            return products.filter(product => product.rating >= 4);
        }
        if(state.rating === "3_STARS_AND_ABOVE") {
            return products.filter(product => product.rating >= 3);
        }
        if(state.rating === "2_STARS_AND_ABOVE") {
            return products.filter(product => product.rating >= 2);
        }
        if(state.rating === "1_STARS_AND_ABOVE") {
            return products.filter(product => product.rating >= 1);
        }
        return products;
    }

    function inStockOnly(products) {
        if(state.inStock) {
            return products.filter(product => product.in_stock === true);
        }
        return products;
    }

    function bestSeller(products) {
        if(state.bestSeller) {
            return products.filter(product => product.best_seller === true);
        }
        return products;
    }

    const filterProductList = () => {
        let filteredProducts = state.productList;
        filteredProducts = bestSeller(filteredProducts);
        filteredProducts = sortByPrice(filteredProducts);
        filteredProducts = rating(filteredProducts);
        filteredProducts = inStockOnly(filteredProducts);
       
        return filteredProducts;
    }

    

    const value = {
        state,
        dispatch,
        products: filterProductList(),
        loadProducts
    }
    return <FilterContext.Provider value={value}>
        {children}
    </FilterContext.Provider>
}

export const useFilter = () => {
    return useContext(FilterContext)
}