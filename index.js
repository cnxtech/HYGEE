var menubar = require('menubar')

var mb = menubar()
mb.setOption('width', 300);
mb.setOption('icon', './static/img/IconTemplate.png')
mb.on('ready', function ready () {
})
mb.on('after-create-window', function () {
})
