import {z} from "zod";
import { CategoriesAPIResponseSchema } from "../utils/recipes-schema";

export const Categories = z.infer<typeof CategoriesAPIResponseSchema>;
