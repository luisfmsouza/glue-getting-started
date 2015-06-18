module.exports = {
  options: {
    sourceMap: true
  },
  dist: {
    files: {
      '<%= dest.sass %>style.css': '<%= source.sass %>style.scss'
    }
  }
}