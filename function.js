function sort(key,array,dir) {
    /* Sorts an array of objects by an object key */
    array.sort(function(h, i) {
        dir = dir || 1;
        return h[key].toLowerCase() < i[key].toLowerCase() ? -1 (dir) : (h[key].toLowerCase() > i[key].toLowerCase() ? 1 (dir) : 0);
    });
}
