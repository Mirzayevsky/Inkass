import {ReactComponent as UsersCartSvg} from "../Assets/sidebar/users-svgrepo-com.svg";
import {ReactComponent as CashCartSvg} from "../Assets/sidebar/cash-svgrepo-com.svg";
import {ReactComponent as ProfitCartSvg} from "../Assets/sidebar/profit-svgrepo-com.svg";

export const SidebarItems  = [
    {
        id:1,
        name:`Users`,
        link:`/`,
        icon:<UsersCartSvg/>
    },
    {
        id:2,
        name:`Cash`,
        link:`/cash`,
        icon:<CashCartSvg/>
    },
    {
        id:3,
        name:`Incomes`,
        link:`/incomes`,
        icon:<ProfitCartSvg/>
    },

]