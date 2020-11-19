
import { HTMLAttributes } from "react";
import { Options } from "vis-network/dist/types/network/Network"
import INetworkData from "./INetworkData";

export default interface INetworkParams {
    network?: Options,
    container?: HTMLAttributes<HTMLDivElement>
    data?: INetworkData<any, any>
}
