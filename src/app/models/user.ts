import * as _ from 'lodash';

export class User {
    constructor(data?: any){
        _.merge(this, data);
    };
    public firstName: string = null;
    public lastName: string = null;
    public lastLogin: Date = null;
    public email: string = null;
    public mailStreet: string = null;   
    public mailApt: string = null;    
    public mailCity: string = null;    
    public mailState: string = null;    
    public mailZip: string = null;    
    public photo: string = null;
    public favorites: string = null;      
};