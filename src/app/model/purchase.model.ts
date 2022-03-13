import { Product } from './product.model';
import { User } from './user.model';

export interface Purchase {
    tx:number;
    products:Product;
    user:User;
    total:number;
    purchasedate:Date;

}
