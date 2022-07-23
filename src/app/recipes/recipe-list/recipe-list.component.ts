import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'First Recipe',
      'This is the first recipe in the list',
      'https://www.goya.com/media/4173/creole-spaghetti.jpg?quality=80'
    ),
  ];

  constructor() { }

  ngOnInit(): void { } 
}

