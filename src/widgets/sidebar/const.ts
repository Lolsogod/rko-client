//@ts-ignore чото делать с этими импортами
import Home from '/home.svg'
//@ts-ignore
import User from '/user.svg'
//@ts-ignore
import Wallet from '/wallet.svg'
//@ts-ignore
import Settings from '/settings.svg'

//сюда ещё экшн добавить и интерфейс сделать 
export const links = {
    top: [
      {img: Wallet, active: true},
      {img: Home, active: false},
      {img: User, active: false}
    ],
    bot: [
      {img: Settings, active: false}
    ]
  }