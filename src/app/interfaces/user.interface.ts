export interface IUser{
    id:number,
    name:string,
    username:string,
    email:string,
    address:{
        street:string,
        suite:string|number
    }
}


export interface IUserPost{
    userId:number,
    id:number,
    title:string,
    body:string,
}

