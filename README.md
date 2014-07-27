Sort-object-array-by-property
=============================

JavaScript Sort Function

### Example Usage

    function sort(key,array,dir) {
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
    
    sort('name', array);
    console.log(array);
    
    sort('name', array, -1);
    console.log(array);
