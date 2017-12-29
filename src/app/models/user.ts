import * as _ from 'lodash';
import { Product } from './product';

export class User {
    constructor(data?: any){
        _.merge(this, data);
    };
    public id: string = null;
    public firstName: string = null;
    public lastName: string = null;
    public cart: Array<Product> = [];
    public favorites: Array<Product> = [];
    public email: string = null;
    public address: string = null;
    public role: string = null;
};