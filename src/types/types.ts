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
  products: object[];
  status: string;
  createdAt: Date;
  intent_id?: String;
}





