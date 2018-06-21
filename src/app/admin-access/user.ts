export interface UserInfo {  
    id: string,
    name: string,
    email: string
}

export class AddUserDetails implements UserInfo {
    id: string;
    name: string;
    email: string;
}