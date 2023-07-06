export interface IMenuItem{
    text: string,
    action: Action
}
interface Action{
    (): any
}