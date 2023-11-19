export class Product {
    // !: pour que evite error de constructeur 
    id!: number;
    title!: string;
    price!: number;
    like!: number;
    quantity!: number;
    /*constructor(id: number, title: string, price: number, like: number, quantity: number) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.like = like;
        this.quantity = quantity;
    }*/
}
