Sort object array by property
=============================

JavaScript Sort Function

### Example Usage

    function sortJSON(key,array,dir) {
        /* Sorts an array of objects by an object key */
        array.sort(function(h, i) {
            dir = dir || 1;
            return h[key].toLowerCase() < i[key].toLowerCase() ? -1 * dir : (h[key].toLowerCase() > i[key].toLowerCase() ? 1 * dir : 0);
        });
    }
    
    var array = [
      {name: 'Bob'},
      {name: 'John'},
      {name: 'Dan'},
      {name: 'Mary'},
      {name: 'Peaches'}
    ];
    
    /* Sorts array of JavaScript objects by the value of the `name` key */
    sortJSON('name', array);
    console.log(array);
    
    /* Sorts array of JavaScript objects by the value of the `name` key, in reverse order */
    sortJSON('name', array, -1);
    console.log(array);

### Demo

http://jsbin.com/wavuyi/2/edit?js,console
