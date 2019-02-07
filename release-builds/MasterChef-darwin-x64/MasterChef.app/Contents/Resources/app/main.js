const electron = require('electron');
const url = require('url');
const path = require('path');

const {app, BrowserWindow, Menu} = electron

var mainWindow;

app.on('ready', function(){
    const display = electron.screen.getPrimaryDisplay();
    const maxiSize = display.workAreaSize;
    mainWindow = new BrowserWindow({
        height: maxiSize.height,
        width: maxiSize.width,
        resizable: false,
        title: 'MasterChef',
        icon: path.join(__dirname, 'images/icons/64x64.png'),
        devTools: false,
        backgroundColor: '#222222'
    });
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, '/html/mainWindow.html'),
        protocol: 'file',
        slashes: true
    }));
    mainWindow.show();
    const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
    Menu.setApplicationMenu(mainMenu);
    mainWindow.on('closed', function() {
        mainWindow = null;
    });
});

const mainMenuTemplate = [
    {
        label: 'Options',
        submenu: [
            {
                label: 'Refresh',
                click() {
                    mainWindow.reload();
                }
            }
        ]
    },
    {
        label: 'About',
        submenu: [
            {
                label: 'Developers',
                click() {
                    var aboutDevelopers = new BrowserWindow({
                        title: 'About Developers',
                        height: 500,
                        width: 700,
                        resizable: false,
                        devTools: false,
                        alwaysOnTop: true,
                        autoHideMenuBar: true,
                        backgroundColor: '#222222'
                    });
                    aboutDevelopers.loadURL(url.format({
                        pathname: path.join(__dirname, '/html/aboutDev.html'),
                        protocol: 'file',
                        slashes: true
                    }));
                }
            },
            {
                label: 'About MasterChef',
                click() {
                    var aboutApp = new BrowserWindow({
                        title: 'About MasterChef',
                        height: 500,
                        width: 700,
                        resizable: false,
                        devTools: false,
                        alwaysOnTop: true,
                        autoHideMenuBar: true
                    });
                    aboutApp.loadURL(url.format({
                        pathname: path.join(__dirname, '/html/aboutApp.html'),
                        protocol: 'file',
                        slashes: true
                    }));
                }
            }
        ]
    },
    {
        label: 'Quit',
        submenu: [
            {
                label: 'Quit',
                click() {
                    app.quit();
                }
            }
        ]
    }
];