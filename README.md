Sort object array by property
=============================

A JavaScript Sort Function implemented using Array.prototype.sort(). This allows one to quickly sort an array of JavaScript objects by a particular property. 

The function is called sortJSON(key, array, direction), with direction being optional. Setting direction to -1 reverses the sort.

In unicode, Uppercase letters occur before lowercase, therefore `Zulu` would come before `andrew`. Since this is not what most users would want, `.toLowerCase` has been appended to the function below.

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
