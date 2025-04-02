export default class Logger {
  private tag: string;

  private static LEVELS: Record<
    "v" | "d" | "i" | "w" | "e" | "wtf",
    { level: "log" | "warn" | "error"; color: string }
  > = {
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

  constructor(tag: string) {
    this.tag = tag;
  }

  private getTimestamp(): string {
    const now = new Date();
    return now.toLocaleString("zh-TW", { timeZone: "Asia/Taipei" });
  }

  private getCaller(): string {
    const error = new Error();
    const stack = error.stack?.split("\n") || [];
    const callerLine = stack[4]?.trim();
    return callerLine || "Unknown caller";
  }

  private log(
    levelKey: keyof typeof Logger.LEVELS,
    message: string,
    ...args: any[]
  ) {
    const { level, color } = Logger.LEVELS[levelKey];

    if (typeof console[level] === "function") {
      const caller = this.getCaller();
      console[level](
        `%c[${levelKey.toUpperCase()}] ${this.getTimestamp()} ${
          this.tag
        }: ${message}`,
        `color: ${color};`,
        ...args,
        `${caller}`
      );
    } else {
      console.error(`Invalid log level: ${level}`);
    }
  }

  v(message: string, ...args: any[]) {
    this.log("v", message, ...args);
  }

  d(message: string, ...args: any[]) {
    this.log("d", message, ...args);
  }

  i(message: string, ...args: any[]) {
    this.log("i", message, ...args);
  }

  w(message: string, ...args: any[]) {
    this.log("w", message, ...args);
  }

  e(message: string, ...args: any[]) {
    this.log("e", message, ...args);
  }

  wtf(message: string, ...args: any[]) {
    this.log("wtf", message, ...args);
  }
}

const TAG = "DEV";

globalThis.Log = new Logger(TAG);
