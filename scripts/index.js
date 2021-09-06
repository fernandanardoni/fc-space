document.addEventListener('DOMContentLoaded', function () {
    var elem = document.querySelectorAll('.tabs');
    var instance = M.Tabs.init(elem);
});

document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
});