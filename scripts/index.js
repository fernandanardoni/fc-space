document.addEventListener('DOMContentLoaded', function () {
    var registerTabs = document.querySelectorAll('.tabs');
    var instance = M.Tabs.init(registerTabs);
});

document.addEventListener('DOMContentLoaded', function () {
    var sideNav = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(sideNav);
});