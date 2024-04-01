const Benchmark = require('benchmark');

const suite = new Benchmark.Suite;

const array = Array.from({ length: 10000 }, (_, i) => i);

suite
  .add('forEach', function() {
    array.forEach(item => {
      // Your code here
    });
  })
  .add('filter', function() {
    array.filter(item => {
      // Your code here
      return true; // Replace this with your filtering condition
    });
  })
  .on('cycle', function(event) {
    console.log(String(event.target));
  })
  .on('complete', function() {
    console.log('Fastest is ' + this.filter('fastest').map('name'));
  })
  .run({ 'async': true });
