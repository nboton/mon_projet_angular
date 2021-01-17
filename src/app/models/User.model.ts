export class User {
    /**
     * Facon simple de declarer à la fois attribut et constructeur
     * @param firstName 
     * @param lastName 
     * @param email 
     * @param drinkPreference 
     * @param hobbies 
     */
    constructor(
      public firstName: string,
      public lastName: string,
      public email: string,
      public drinkPreference: string,
      public hobbies?: string[]
    ) {}
  }