export interface BtnData{
    ico: string,
    active?: boolean,
    action?: Action
  }
  interface Action{
    (): any
  }