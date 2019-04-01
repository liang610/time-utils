export default [{
  input: 'src/index.js',
  output: [{
    file: 'dist/index.cjs.js',
    format: 'cjs'
  }, {
    file: 'dist/index.es.js',
    format: 'es'
  }]
}, {
  input: 'src/index.js',
  output: {
    name: 'time-utils',
    file: 'dist/index.umd.js',
    format: 'umd'
  }
}];
