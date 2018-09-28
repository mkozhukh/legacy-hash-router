import { IJetRouter, IJetRouterCallback, IJetRouterOptions } from "webix-jet/dist/interfaces";
export declare class HashRouter implements IJetRouter {
    private config;
    private _lastUrl;
    private _prefix;
    constructor(cb: IJetRouterCallback, config: any);
    set(path: string, config?: IJetRouterOptions): void;
    get(): string;
}
