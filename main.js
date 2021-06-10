// Electronの実行に必要なモジュールを取り込む
const electron = require('electron')
const path = require('path')
const url = require('url')
const React = require('react')
const app = electron.app
const BrowserWindow = electron.BrowserWindow

// Electronのライフサイクルを定義
let mainWindow // メインウィンドウを表す変数
app.on('ready', createWindow)
app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') app.quit()
})
app.on('activate', function () {
    if (mainWindow === null) createWindow()
})

// ウィンドウを作成してコンテンツを読み込む
function createWindow () {
    mainWindow = new BrowserWindow({width: 800, height: 600,webPreferences: { nodeIntegration: true,contextIsolation: false, }})
    mainWindow.loadURL(url.format({ 
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:',
        slashes: true
    }))
    mainWindow.webContents.openDevTools()
    // ウィンドウが閉じるときの処理
    mainWindow.on('closed', function () {
        mainWindow = null
    })
}