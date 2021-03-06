import { Category } from '../models/Category';

export interface ICreateCategoryDTO {
  name: string;
  description: string;
}

interface ICategoriesRepository {
  create({ name, description }: ICreateCategoryDTO): Category;
  findByName(name: string): Category | undefined;
  list(): Category[];
}

export { ICategoriesRepository };
