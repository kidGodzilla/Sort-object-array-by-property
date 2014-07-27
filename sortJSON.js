function sortJSON(key,array,dir) {
    /* Sorts an array of objects by an object key */
    dir = dir || 1;
    array.sort(function(h, i) {
        return h[key].toLowerCase() < i[key].toLowerCase() ? -1 * dir : (h[key].toLowerCase() > i[key].toLowerCase() ? 1 * dir : 0);
    });
}
