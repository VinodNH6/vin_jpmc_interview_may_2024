import { assetProp } from "../types"

export interface stateInterface {
    assetsData: assetProp[]
}

export interface ActionInterface {
    type: string,
    payload: assetProp[]
}
