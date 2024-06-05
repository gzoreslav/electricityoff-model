import { AddressInterface } from "./addressInterface";
import { ProviderAccountInterface } from "./providerAccountInterface";
export interface QueueInterface {
    queue: string;
    subQueue: string;
    description?: string;
}
export interface UserQueueInterface extends QueueInterface {
    address?: AddressInterface;
    providerAccount?: ProviderAccountInterface;
}
