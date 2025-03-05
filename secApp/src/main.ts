import { app, BrowserWindow, ipcMain, screen } from 'electron';
import path from 'node:path';
import started from 'electron-squirrel-startup';
import fs from "fs"
// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (started) {
  app.quit();
}

let mainWindow: BrowserWindow

const createWindow = () => {
  const configPath = path.resolve(__dirname, "..", "..", "..", "secConfig.json")
  let config: {
    height: number,
    width: number,
    resizable: boolean,
    fullscreen: boolean,
    title: string,
    x: number
    y: number,
    backgroundColor: string
  };
  try {
    const rawData = fs.readFileSync(configPath)
    config = JSON.parse(rawData)
  } catch (error) {
    console.log("🚀 ~ createWindow ~ error:", error)
  }
  const { height, width } = screen.getPrimaryDisplay().workAreaSize
  const secWinHight = Math.floor(height / 3)
  const mainWinHight = Math.floor(height / 3) * 2
  const xPos = 0
  const yPos = height - secWinHight
  const yPosMain = 0
  // Create the browser window.
  mainWindow = new BrowserWindow({
    height: config.height,
    x: config.x,
    title: config.title,
    y: config.y,
    width: config.width,
    resizable: config.resizable,
    fullscreen: config.fullscreen,
    backgroundColor: config.backgroundColor,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: true
    },

  });

  mainWindow.loadFile("./mainWindow.html")

  // and load the index.html of the app.
  if (MAIN_WINDOW_VITE_DEV_SERVER_URL) {
    mainWindow.loadURL(`${MAIN_WINDOW_VITE_DEV_SERVER_URL}/main`);
  } else {
    mainWindow.loadFile(path.join(__dirname, `../renderer/${MAIN_WINDOW_VITE_NAME}/index.html`));
  }

};;

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});


ipcMain.on("change-bgcolor-main", (_e, color) => {
  if (mainWindow) {
    mainWindow.setBackgroundColor(color)
  }
})

ipcMain.on("change-size-main", (_e, size) => {
  if (mainWindow) {
    mainWindow.setSize(mainWindow.getSize()[0],size)
  }
})
