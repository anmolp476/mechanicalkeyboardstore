import { ActionType, CartType } from "@/types/types";
import { create } from "zustand";
import { persist } from "zustand/middleware"

const initialStateOfProd = {
    products: [],
    totalItems: 0,
    totalPrice: 0,
}

export const useCartStore = create(persist<CartType & ActionType>((set, get) => ({
    products: initialStateOfProd.products,
    totalItems: initialStateOfProd.totalItems,
    totalPrice: initialStateOfProd.totalPrice,

    addToCart(item) {

        const theProducts = get().products
        const productExists = theProducts.find(product=>product.id===item.id)

        if(productExists){

            const updatedProd = theProducts.map((product) => product.id === productExists.id ? {
                ...item,
                quantity:item.quantity+product.quantity,
                price:item.price+product.price
            } : item)
            
            set((state)=>({
                products:updatedProd,
                totalItems: state.totalItems + item.quantity,
                totalPrice: state.totalPrice + item.price,
            }));
        }
        else{

            set((state)=>({
                products:[...state.products, item],
                totalItems:state.totalItems+item.quantity,
                totalPrice: state.totalPrice+item.price
                
            }))
        }
    },

    removeFromCart(item) {
        set((state)=>({
            products:state.products.filter(product=>product.id!==item.id),
            totalItems:state.totalItems-item.quantity,
            totalPrice: state.totalPrice-item.price
        }))
    },

}), {name:"cart", skipHydration:true}));




