// src/components/store/types.ts
export type ProductCategory = 'kits' | 'aikit' | 'motors' | 'controllers' | 'end-effectors' | 'bearings';

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: ProductCategory;
  priceINR: number;
  shortDescription: string;
  description: string[];
  specs: Record<string, string | number>;
  images: string[];
  inStock: boolean;
  badges?: string[];
}
