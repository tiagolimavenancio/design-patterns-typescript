enum LogLevel {
  INFO,
  WARNING,
  ERROR,
}

class Logger {
  private static instance: Logger;
  private constructor() {}

  static getInstance(): Logger {
    if (!Logger.instance) {
      Logger.instance = new Logger();
    }

    return Logger.instance;
  }

  log(level: LogLevel, message: string) {
    console.log(`[${LogLevel[level]}] ${message}`);
  }
}

//Usage:
const logger1 = Logger.getInstance();
const logger2 = Logger.getInstance();

console.log(logger1 === logger2); // true
