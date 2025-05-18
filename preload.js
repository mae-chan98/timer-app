// preload.js
const { contextBridge } = require("electron");

contextBridge.exposeInMainWorld("electronAPI", {
  // Add any APIs you want to expose safely here later
});
