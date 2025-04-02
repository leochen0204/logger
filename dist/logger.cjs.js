'use strict';

class Logger {
    constructor(tag) {
        this.tag = tag;
    }
    getTimestamp() {
        const now = new Date();
        return now.toLocaleString("zh-TW", { timeZone: "Asia/Taipei" });
    }
    getCaller() {
        var _a, _b;
        const error = new Error();
        const stack = ((_a = error.stack) === null || _a === void 0 ? void 0 : _a.split("\n")) || [];
        const callerLine = (_b = stack[4]) === null || _b === void 0 ? void 0 : _b.trim();
        return callerLine || "Unknown caller";
    }
    log(levelKey, message, ...args) {
        const { level, color } = Logger.LEVELS[levelKey];
        if (typeof console[level] === "function") {
            const caller = this.getCaller();
            console[level](`%c[${levelKey.toUpperCase()}] ${this.getTimestamp()} ${this.tag}: ${message}`, `color: ${color};`, ...args, `${caller}`);
        }
        else {
            console.error(`Invalid log level: ${level}`);
        }
    }
    v(message, ...args) {
        this.log("v", message, ...args);
    }
    d(message, ...args) {
        this.log("d", message, ...args);
    }
    i(message, ...args) {
        this.log("i", message, ...args);
    }
    w(message, ...args) {
        this.log("w", message, ...args);
    }
    e(message, ...args) {
        this.log("e", message, ...args);
    }
    wtf(message, ...args) {
        this.log("wtf", message, ...args);
    }
}
Logger.LEVELS = {
    v: { level: "log", color: "gray" },
    d: { level: "log", color: "blue" },
    i: { level: "log", color: "green" },
    w: { level: "warn", color: "orange" },
    e: { level: "error", color: "red" },
    wtf: {
        level: "error",
        color: "black; background: white; font-weight: bold",
    },
};
const TAG = "DEV";
globalThis.Log = new Logger(TAG);

module.exports = Logger;
//# sourceMappingURL=logger.cjs.js.map
