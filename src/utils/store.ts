import { ActionType, CartType } from "@/types/types";
import { create } from "zustand";

const initialStateOfProd = {
    products: [],
    totalItems: 0,
    totalPrice: 0,
}

export const useCartStore = create<CartType & ActionType>((set, get) => ({
    products: initialStateOfProd.products,
    totalItems: initialStateOfProd.totalItems,
    totalPrice: initialStateOfProd.totalPrice,

    addToCart(item) {
        set((state)=>({
            products:[...state.products, item],
            totalItems:state.totalItems+item.quantity,
            totalPrice: state.totalPrice+item.price
            
        }))
    },

    removeFromCart(item) {
        set((state)=>({
            products:state.products.filter(product=>product.id!==item.id),
            totalItems:state.totalItems-item.quantity,
            totalPrice: state.totalPrice-item.price
        }))
    },

}));





