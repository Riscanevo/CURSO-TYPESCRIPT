interface Product{
    description:string ;
    price:number;
}
const iphone : Product = {
    description :'Iphone 14 pro max',
    price: 800
}

const tablet : Product = {
    description : 'Ipad Air M3',
    price: 1000
} 



interface TaxCalculationOptions {
    tax: number;
    products: Product[];
}



function taxCalculation (options: TaxCalculationOptions): number[] {
    let total = 0 

}

const shoppingCart = [iphone, tablet];
const tax = 0.15;



export {};
