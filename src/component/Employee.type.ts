export interface IEmployee {
    id: string;
    name: string; 
    telephone: string;
    email: string;
    relatives: string;
}

export const dummyEmployeeList: IEmployee[] = [
    {
        id: new Date().toJSON().toString(), 
        name: 'Guilherme Bechelli Silva', 
        telephone: "34812880",
        email: 'guilherme.dev@gmail.com',
        relatives: 'Gustavo Silva',
    },



];


export enum PageEnum{
    list,
    add, 
    edit,


}