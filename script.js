window.onload = function() {
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    renderNumber(arr);

    var list = document.getElementById("shuffleAndSort"),
        button = document.getElementById("shuffle");

    function renderNumber(arr) {
        var cont = document.getElementById('container');
        cont.innerHTML = '';
        // create ul element and set the attributes.
        var ul = document.createElement('ul');
        ul.setAttribute('style', 'padding: 0; margin: 0;');
        ul.id = "shuffleAndSort";

        for (i = 0; i <= arr.length - 1; i++) {
            var li = document.createElement('li'); // create li element.

            li.innerHTML = arr[i]; // assigning text to li using array value.
            li.className = "li-" + (i + 1);

            ul.appendChild(li); // append li to ul.
        }

        cont.appendChild(ul);

    }

    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        renderNumber(array);
        arr = array;
    }

    function sort(arr) {
        arr = arr.sort(function(a, b) {
            return a - b
        });
        renderNumber(arr);
    }

    document.getElementById("shuffle").onclick = shuffle.bind(this, arr);
    document.getElementById("sort").onclick = sort.bind(this, arr);

}