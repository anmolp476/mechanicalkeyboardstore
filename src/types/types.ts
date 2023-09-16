export type MenuType = {
  id: string;
  slug: string;
  title: string;
  desc?: string;
  image?: string;
  color: string;
}[];

export type ProdType = {
  id: string;
  title: string;
  desc?: string;
  image?: string;
  price: number;
  options?: { title: string; additionalPrice: number }[];
};

export type OrderType = {
  id: string;
  userEmail: string;
  price: number;
  products: CartItemType[];
  status: string;
  createdAt: Date;
  intent_id?: String;
};

export type CartItemType = {
  id: string;
  title: string;
  image?: string;
  price: number;
  optionTitle?: string;
  quantity: number;
};

export type CartType = {
  products: CartItemType[];
  totalItems: number;
  totalPrice: number;
}


export type ActionType = {
  addToCart:(item:CartItemType)=> void
  removeFromCart:(item:CartItemType)=> void
}





