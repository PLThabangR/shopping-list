
const enum Categories{
   fruti= "Fruit",
   vegetables="Vegetables",
   meat="Meat",
   dairy="Dairy",
   bakery="Bakery",
   spices="Spices",
   sweets="Sweets",
   drinks="Drinks",
  
}
export interface shoppingList{
name:string,
quantity:number,
notes?:string,
price:number,
category:Categories,
image:string

}