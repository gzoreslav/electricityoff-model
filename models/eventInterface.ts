import {DateType} from "./types";
import {QueueInterface} from "./queueInterface";
import {OnOffEnum} from "./onOffEnum";

export interface GeneralEventInterface {
    startDateTime: DateType;
    endDateTime: DateType;
}

export interface OnOffEventInterface extends GeneralEventInterface {
    queue: QueueInterface;
    onOffType: OnOffEnum;
}

export type EventType = GeneralEventInterface | OnOffEventInterface;

export interface EventsInterface extends Array<EventType>{}
