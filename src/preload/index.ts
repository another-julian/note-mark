import { contextBridge } from 'electron'
//import { electronAPI } from '@electron-toolkit/preload'

// Custom APIs for renderer
//const api = {}

// Use `contextBridge` APIs to expose Electron APIs to
// renderer only if context isolation is enabled, otherwise
// just add to the DOM global.
if (process.contextIsolated) {
  try {
    //contextBridge.exposeInMainWorld('electron', electronAPI)
    //contextBridge.exposeInMainWorld('api', api)
    contextBridge.exposeInMainWorld('context', {
      locale: navigator.language
    })
  } catch (error) {
    console.error(error)
  }
} else {
  // @ts-ignore (define in dts)
  //window.electron = electronAPI
  // @ts-ignore (define in dts)
  //window.api = api
  throw new Error('context isolation must be enable in the browser window')
}
