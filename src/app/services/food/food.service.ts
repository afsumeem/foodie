import { Injectable, OnInit } from '@angular/core';
import { Tag } from 'src/app/shared/Tag';
import { Foods } from 'src/app/shared/models/food';

@Injectable({
  providedIn: 'root'
})
export class FoodService implements OnInit {

  constructor() { }

  getFoodById(id: number): Foods {
    return this.getAll().find(food => food.id == id)!;
  }

  ngOnInit(): void { };

  getAllFoodByTag(tag: string): Foods[] {
    return tag == "All" ? this.getAll() : this.getAll().filter(food => food.tags?.includes(tag))
  };

  getAllTag(): Tag[] {
    return [
      { name: 'All', count: 29 },
      { name: 'FastFood', count: 10 },
      { name: 'Pizza', count: 2 },
      { name: 'Lunch', count: 9 },
      { name: 'Steak', count: 2 },
      { name: 'Bread', count: 3 },
      { name: 'Cake', count: 1 },
      { name: 'Salad', count: 1 },
      { name: 'Chicken', count: 1 }

    ]
  }

  getAll(): Foods[] {
    return [
      {
        id: 1,
        name: 'Pizza',
        cookTime: '20-30',
        price: 10,
        favorite: false,
        origins: ['Bangladesh'],
        stars: 4.5,
        imageUrl: '/assets/food-1.jpg',
        tags: ['FastFood', 'Pizza', 'Lunch']
      },
      {
        id: 2,
        name: 'Steak',
        cookTime: '25-35',
        price: 20,
        favorite: true,
        origins: ['Dhaka'],
        stars: 4.0,
        imageUrl: '/assets/food-2.jpg',
        tags: ['FastFood', 'Steak', 'Lunch']
      },
      {
        id: 3,
        name: 'Steak',
        cookTime: '25-35',
        price: 13,
        favorite: false,
        origins: ['Bangladesh'],
        stars: 3.5,
        imageUrl: '/assets/food-3.jpg',
        tags: ['FastFood', 'Steak', 'Lunch']
      },
      {
        id: 4,
        name: 'Paratha',
        cookTime: '10-15',
        price: 17,
        favorite: true,
        origins: ['Bangladesh'],
        stars: 2.5,
        imageUrl: '/assets/food-4.jpg',
        tags: ['FastFood', 'Bread', 'Lunch']
      },
      {
        id: 5,
        name: 'Cake',
        cookTime: '15-20',
        price: 35,
        favorite: false,
        origins: ['Bangladesh'],
        stars: 2.5,
        imageUrl: '/assets/food-5.jpg',
        tags: ['FastFood', 'Cake', 'Snacks']
      },
      {
        id: 6,
        name: 'Chicken',
        cookTime: '10-20',
        price: 19,
        favorite: true,
        origins: ['Bangladesh'],
        stars: 2.5,
        imageUrl: '/assets/food-6.jpg',
        tags: ['FastFood', 'Chicken', 'Lunch']
      },
      {
        id: 7,
        name: 'Pizza',
        cookTime: '20-30',
        price: 25,
        favorite: false,
        origins: ['Bangladesh'],
        stars: 4.0,
        imageUrl: '/assets/food-7.jpg',
        tags: ['FastFood', 'Pizza', 'Lunch']
      },
      {
        id: 8,
        name: 'Paratha Ruti',
        cookTime: '05-10',
        price: 10,
        favorite: true,
        origins: ['Bangladesh'],
        stars: 3.5,
        imageUrl: '/assets/food-8.jpg',
        tags: ['FastFood', 'Bread', 'Lunch']
      },
      {
        id: 9,
        name: 'Bread',
        cookTime: '10-20',
        price: 22,
        favorite: false,
        origins: ['Bangladesh'],
        stars: 3.0,
        imageUrl: '/assets/food-9.jpg',
        tags: ['FastFood', 'Bread', 'Lunch']
      },
      {
        id: 10,
        name: 'Vegetable Salad',
        cookTime: '03-15',
        price: 10,
        favorite: false,
        origins: ['Bangladesh'],
        stars: 4.0,
        imageUrl: '/assets/food-10.jpg',
        tags: ['FastFood', 'Salad', 'Lunch']
      },
    ];
  }
}


