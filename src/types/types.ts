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
