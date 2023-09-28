import { Injectable } from '@angular/core';
import { Cocktail } from './cocktail-list/cocktail.model';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {

  cocktails: Cocktail[] = [
    {
      nom: 'Mojito',
      prix: 10,
      image: "https://www.destinationcocktails.fr/wp-content/uploads/2019/11/Cocktail-mojito-1.jpg"
    },{
      nom: 'Gin tonic',
      prix: 12,
      image: 'https://www.hendricksgin.com/fr/assets/Uploads/37440e2d1c/gin-and-tonic-v2__FillWzQ4MCwxMDAwXQ.jpg'
    }
  ];

  getCocktails(): Cocktail[] {
    return this.cocktails
  }
}
