import { BUY_CAKE, MAKE_CAKE } from "./CakeType"

export const buyCake = ()=>{
    return {
        type: BUY_CAKE
    }
}
export const makeCake = ()=>{
    return {
        type: MAKE_CAKE
    }
}
