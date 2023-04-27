export type BookType = {
    title:string,
    description:string,
    authors:string[],
    price:number,
    pageCount:number,
    imageLink:string,
    id:string,
}

export type CartItemType = {
    data : BookType,
    count : number
}