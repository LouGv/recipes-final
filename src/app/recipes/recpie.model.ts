export class Recipe {
  public name: string;
  public description: string;
  public imgSrc: string;

  // Shortcut to create properties automatically named after parameters
  constructor(name: string, description: string, imgSrc: string) {
    this.name = name;
    this.description = description;
    this.imgSrc = imgSrc;
  }
}
