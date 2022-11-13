interface parametersCard{
    title:string
    price:number
}

export interface Icatalog{
    name:string
    price:number
    Paragraphs:string
    timeSalle:number
    info:string[]
    img:string
    id:number
    parameters:{
        extr:parametersCard
        oldContent:parametersCard
        bos:parametersCard
        fast:{price:number}
    }
}