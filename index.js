var menubar = require('menubar')
require('path')
var mb = menubar({
    width: 300,
    icon: __dirname + '/static/img/IconTemplate.png'
})
mb.on('after-close', function () {
    mb.app.quit()
})
