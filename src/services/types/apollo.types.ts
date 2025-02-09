export declare type ProductTypes = {
  id: string;
  cid: string;
  name: string;
  description?: string;
  type: {
    id: string;
    cid: string;
    name: string;
  };
  prices: TPrice[];
  default_price: TPrice;
  image_url?: string;
};

type TPrice = {
  id: string;
  cid: string;
  value: number;
  currency: string;
};
