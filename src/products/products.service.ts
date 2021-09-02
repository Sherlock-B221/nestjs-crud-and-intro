import { Injectable, NotFoundException } from "@nestjs/common";
import { NotFoundError } from "rxjs";
import { Product } from "./product.model";

@Injectable()
export class ProductsService {
    private products: Product[] = [];

    insertProduct(title: string, price: number, desc: string) : string {
        const prodId = Math.random().toString();
        
        const newProduct = new Product(prodId, title, desc, price);
        this.products.push(newProduct);

        return prodId;

    }

    getProducts() {
        return [...this.products];   // square brackets are used to ensure copy of products is passed and 
                                    // not a pointer to products property which then can be manipulated from outside
    }

    getSingleProduct(productId: string) {
        const product = this.products.find( (prod) => prod.id == productId );
        if ( !product ) {
            throw new NotFoundException('Could not find product');
        }
        return { ...product }
    }
}