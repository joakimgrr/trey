const menubar = require('menubar');
const os = require('os');
const {app} = require('electron');

const homedir = os.homedir();

let mb = menubar({
    'width': 300,
    'height': 400,
});

mb.on('ready', () => {
    const {screen: electronScreen} = require('electron');
    console.log('asfasdfasdf', electronScreen.getPrimaryDisplay().bounds)
    console.log(homedir)
    console.log(electronScreen.getAllDisplays())

});

// app.on('ready', () => {
//     const {screen: electronScreen} = require('electron');
//     console.log('asfasdfasdf', electronScreen.getPrimaryDisplay().workAreaSize)
// })



mb.once('show', function () {
    mb.window.openDevTools();
});
