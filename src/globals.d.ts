import { Logger } from '@src/logger';

declare global {
  interface Window {
    Log: Logger;
  }
}
