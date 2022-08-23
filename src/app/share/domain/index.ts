export interface TabItem {
  title: string;
  icon: string;
  selectedIcon: string;
  link: string;
}

export interface Ad {
  imageUrl: string;
  link: string;
}

export interface Product {
  id: number,
  imageUrl: string,
  title: string;
  tags: string[];
  price: number;
  priceDesc: string;
  buyerAvatars: string[];
}