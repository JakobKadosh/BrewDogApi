import { MashTemp } from "./MashTemp";
import { Fermentation } from "./Fermentation";

    export interface Method {
        mash_temp: MashTemp[];
        fermentation: Fermentation;
        twist?: any;
    }