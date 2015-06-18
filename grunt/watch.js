module.exports = {
  sprite: {
    // files: ['<%= source.images %>**/*.*'],
    files: ['<%= source.images %>flags/*.*', '<%= source.images %>icons/*.*', '<%= source.sass %>*.*'],
    tasks: ['spglue:icons', 'spglue:flags', 'sass']
  },
  spriteFlags: {
    files: ['<%= source.images %>flags/*.*'],
    tasks: ['spglue:flags']
  },
  spriteIcons: {
    files: ['<%= source.images %>icons/*.*'],
    tasks: ['spglue:icons']
  },
  css: {
    files: ['<%= source.sass %>*.*'],
    tasks: ['sass']
  }
}
