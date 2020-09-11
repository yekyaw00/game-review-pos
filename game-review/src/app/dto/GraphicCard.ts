import { Purchase } from './Purchase';

export class GraphicCard{

    id: number;
    title: string;
    year: string;
    quarter: string;
    chipsetBrand: string;
    productBrand: string;
    ramType: string;
    fanType: string;
    image: string[];
    price: number;
    totalPorts: string;
    aboutItem: string;
    purchase: Purchase;
}
