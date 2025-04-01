class Logger {
    constructor(tag) {
        this.tag = tag;
    }
    getTimestamp() {
        return new Date().toISOString().replace('T', ' ').split('.')[0];
    }
    v(message, ...args) {
        console.log(`%c[V] ${this.getTimestamp()} ${this.tag}: ${message}`, 'color: gray;', ...args);
    }
    d(message, ...args) {
        console.log(`%c[D] ${this.getTimestamp()} ${this.tag}: ${message}`, 'color: blue;', ...args);
    }
    i(message, ...args) {
        console.log(`%c[I] ${this.getTimestamp()} ${this.tag}: ${message}`, 'color: green;', ...args);
    }
    w(message, ...args) {
        console.warn(`%c[W] ${this.getTimestamp()} ${this.tag}: ${message}`, 'color: orange;', ...args);
    }
    e(message, ...args) {
        console.error(`%c[E] ${this.getTimestamp()} ${this.tag}: ${message}`, 'color: red;', ...args);
    }
    wtf(message, ...args) {
        console.error(`%c[WTF] ${this.getTimestamp()} ${this.tag}: ${message}`, 'background: black; color: white; font-weight: bold;', ...args);
    }
}
window.Log = new Logger("DEV");

export { Logger };
//# sourceMappingURL=logger.esm.js.map
