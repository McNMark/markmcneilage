function openTab(tabId) {
    // Hide all tab contents
    var tabContents = document.getElementsByClassName('tabContent');
    for (var i = 0; i < tabContents.length; i++) {
        tabContents[i].style.display = 'none';
    }

    // Remove 'active-tab' class from all tabs
    var tabs = document.getElementsByClassName('tab');
    for (var i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove('activeTab');
    }

    // Show the selected tab content and mark it as active
    document.getElementById(tabId).style.display = 'block';
    document.querySelector('[onclick="openTab(\'' + tabId + '\')"]').classList.add('activeTab');
}