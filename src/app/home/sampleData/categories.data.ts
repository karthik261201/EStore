import { Category } from "../types/category.type";

export const categories: Category[] = [
    {
        id: 1,
        categroy: 'Men'
    },
    {
        id: 2,
        categroy: 'Women'
    },
    {
        id: 3,
        categroy: 'Kids'
    },
    {
        id: 4,
        categroy: 'Formal Wear',
        parent_category_id: 1
    },
    {
        id: 5,
        categroy: 'Party Wear',
        parent_category_id: 2
    },
    {
        id: 6,
        categroy: 'Casual Wear',
        parent_category_id: 2
    },
    {
        id: 7,
        categroy: 'Accessories',
        parent_category_id: 3
    }
]