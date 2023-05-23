import { Binary } from "@angular/compiler";

export interface UserModel{
    id:number;
    email:string;
    passwordHash:BinaryType;
    passwordSalt:Binary
    status:Boolean
    imagePath:string
}