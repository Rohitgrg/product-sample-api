// used while validating the update request body
export interface IUpdateProductRequest {
  id: string;
  name?: string;
  description?: string;
  price?: number;
}
