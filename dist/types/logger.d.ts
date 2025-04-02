export default class Logger {
    private tag;
    private static LEVELS;
    constructor(tag: string);
    private getTimestamp;
    private getCaller;
    private log;
    v(message: string, ...args: any[]): void;
    d(message: string, ...args: any[]): void;
    i(message: string, ...args: any[]): void;
    w(message: string, ...args: any[]): void;
    e(message: string, ...args: any[]): void;
    wtf(message: string, ...args: any[]): void;
}
