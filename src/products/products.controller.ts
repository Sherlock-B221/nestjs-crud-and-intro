import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { ProductsService } from "./products.service";

@Controller('products')
export class ProductsController {
    constructor(private readonly productService: ProductsService) { }; // readonly is to ensure that the value of productService doesn't change


    @Post()
    addProduct(@Body('title') prodTitle: string, @Body('description') prodDesc: string, @Body('price') prodPrice: number): any {
        const generatedId = this.productService.insertProduct(prodTitle, prodPrice, prodDesc);

        return { id: generatedId };

    }


    @Get()
    getAllProducts() {
        return this.productService.getProducts();
    }

    @Get(':id')
    getProduct(@Param('id') prodId : string ) {
        return this.productService.getSingleProduct(prodId);
    }
}