
export interface DropDownItem {
    data:string,
    id?:number
}
export interface IDropDownProps{
    label: string,
    options? : Array<DropDownItem> | []
}