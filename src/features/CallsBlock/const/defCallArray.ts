import type {CallBlockItem} from "features/CallsBlock/model/types";
import {E_CALL_TYPE} from "features/CallsBlock/model/types";

export const defCallArray:Array<CallBlockItem> = [
    {
        id: 1,
        name: 'Олег Юрьевич',
        date: '24.06.23 15:18',
        duration:"50",
        type:E_CALL_TYPE.incoming,
        document:"342543534543"
    },
    {
        id: 2,
        name: 'Олег Юрьевич2',
        date: '24.06.23 15:19',
        duration:"0",
        type:E_CALL_TYPE.canceled,
        document:"342543534543"
    },
]