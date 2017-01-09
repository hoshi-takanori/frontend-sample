function hello(name) {
  alert('Hello, ' + name + '!');
}

var button = document.getElementById('button');
button.addEventListener('click', function() {
  var name = document.getElementById('name');
  hello(name.value);
});
