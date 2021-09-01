
// TRIVIAL WAY
// export class Product {
//     id: string;
//     title: string;
//     description: string;
//     price: number;
//     constructor(id: string, title: string, description: string, price: number ) {
//         id = this.id;
//         title = this.title;
//         description = this.description;
//         price = this.price;
//     } ;
// }

// (EQUIVALENT) SHORTCUT WAY TO DO THE SAME IN TYPESCRIPT
export class Product {
    constructor(
        public id: string,
        public title: string,
        public description: string,
        public price: number
    ) { };
}