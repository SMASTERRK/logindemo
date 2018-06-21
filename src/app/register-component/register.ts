export interface Registration {
    name: string,
    userId: string,
    module: string,
    score: string,
    status: string
}

export class registerFields implements Registration {
    name: string;
    userId: string;
    module: string;
    score: string;
    status: string;
}