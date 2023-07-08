export const enum E_CALL_TYPE {
    incoming="incoming",
    outcoming="outcoming",
    canceled="cancelled"
}
export interface CallBlockItem{
    id: number,
    name: String
    date: Date|String,
    duration:String,
    type:E_CALL_TYPE,
    document:String
}