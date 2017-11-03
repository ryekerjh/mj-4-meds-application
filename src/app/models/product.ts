import * as _ from 'lodash';

export class Product {
    constructor(data?: any){
        _.merge(this, data);
    };
    public name: string = null;
    public price: number = null;
    public dateAdded: Date = null;
    public details: string = null;
    public imageUrl: string = null;
    public featured: boolean = false;
};