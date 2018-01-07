import * as _ from 'lodash';
import { Product } from './product';

export class User {
    constructor(data?: any){
        _.merge(this, data);
    };
    public firstName: string = null;
    public lastName: string = null;
    public lastLogin: Date = null;
    public email: string = null; 
    public photo: string = null;
    public favorites: Array<Product> = [];      
    public street: string = null;
    public apt: string = null;
    public city: string = null;
    public state: string = null;
    public zip: string = null;
    public role: string = null;
    public agree: boolean = false;
};