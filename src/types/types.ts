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
  products: CartType[];
  status: string;
  createdAt: Date;
  intent_id?: String;
};

export type CartType = {
  id: string;
  title: string;
  price: number;
  optionTitle?: string;
  image?: string;
  quantity: string;
}





