export class Logger {
    private tag: string;
  
    constructor(tag: string) {
      this.tag = tag;
    }
  
    private getTimestamp(): string {
      return new Date().toISOString().replace('T', ' ').split('.')[0];
    }
  
    v(message: string, ...args: any[]) {
      console.log(`%c[V] ${this.getTimestamp()} ${this.tag}: ${message}`, 'color: gray;', ...args);
    }
  
    d(message: string, ...args: any[]) {
      console.log(`%c[D] ${this.getTimestamp()} ${this.tag}: ${message}`, 'color: blue;', ...args);
    }
  
    i(message: string, ...args: any[]) {
      console.log(`%c[I] ${this.getTimestamp()} ${this.tag}: ${message}`, 'color: green;', ...args);
    }
  
    w(message: string, ...args: any[]) {
      console.warn(`%c[W] ${this.getTimestamp()} ${this.tag}: ${message}`, 'color: orange;', ...args);
    }
  
    e(message: string, ...args: any[]) {
      console.error(`%c[E] ${this.getTimestamp()} ${this.tag}: ${message}`, 'color: red;', ...args);
    }
  
    wtf(message: string, ...args: any[]) {
      console.error(`%c[WTF] ${this.getTimestamp()} ${this.tag}: ${message}`, 'background: black; color: white; font-weight: bold;', ...args);
    }
  }
  

  window.Log = new Logger("DEV");
  