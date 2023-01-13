interface IProductCreate {
  name: string;
  category: string;
  quantity: number;
}

interface IProductUpdate {
  name?: string;
  category?: string;
  quantity?: number;
}

export { IProductCreate, IProductUpdate };
