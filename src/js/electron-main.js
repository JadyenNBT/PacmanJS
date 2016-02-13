/*
 * Entry point for desktop version.  This is built with electron:
 * http://electron.atom.io/
 */
(function () {
    'use strict';
    var electron = require('electron');
    // Module to control application life.
    var app = electron.app;
    // Keep a global reference of the window object, if you don't, the window will
    // be closed automatically when the JavaScript object is garbage collected.
    var mainWindow;
    function createWindow() {
        // Create the browser window.
        mainWindow = new electron.BrowserWindow({
            width: 224, height: 288,
            useContentSize: true,
            autoHideMenuBar: true
        });
        // and load the index.html of the app.
        mainWindow.loadURL('file://' + __dirname + '/../desktop-index.html');
        // Open the DevTools.
        //mainWindow.webContents.openDevTools();
        // Emitted when the window is closed.
        mainWindow.on('closed', function () {
            // Dereference the window object, usually you would store windows
            // in an array if your app supports multi windows, this is the time
            // when you should delete the corresponding element.
            mainWindow = null;
        });
    }
    // This method will be called when Electron has finished
    // initialization and is ready to create browser windows.
    app.on('ready', createWindow);
    // Quit when all windows are closed.
    app.on('window-all-closed', function () {
        // On OS X it is common for applications and their menu bar
        // to stay active until the user quits explicitly with Cmd + Q
        if (process.platform !== 'darwin') {
            app.quit();
        }
    });
    app.on('activate', function () {
        // On OS X it's common to re-create a window in the app when the
        // dock icon is clicked and there are no other windows open.
        if (mainWindow === null) {
            createWindow();
        }
    });
})();

//# sourceMappingURL=electron-main.js.map
