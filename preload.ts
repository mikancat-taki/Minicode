import { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld('api', {
  send: (channel: string, ...args: any[]) => {
    ipcRenderer.send(channel, ...args);
  },
  receive: (channel: string, callback: (...args: any[]) => void) => {
    ipcRenderer.on(channel, (_e, ...args) => callback(...args));
  }
});
