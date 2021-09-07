document.addEventListener('DOMContentLoaded', function () {
    var registerTabs = document.querySelectorAll('.tabs');
    var instance = M.Tabs.init(registerTabs);
});

document.addEventListener('DOMContentLoaded', function () {
    var sideNav = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(sideNav);
});

document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.tooltipped');
    var instances = M.Tooltip.init(elems);
});

const schedulesCollection = document.querySelector('#schedules');

const setSchedules = (data) => {
    let html = '';
    data.forEach(doc => {
        const scheduling = doc.data();
        const listItem = `
        <li>${scheduling.data}
        `;
        html += listItem;

        schedulesCollection.innerHTML = html;
    })
}