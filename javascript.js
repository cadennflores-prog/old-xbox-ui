const tabs = ['home', 'avatar', 'discover', 'friends'];
let activeTab = 0;

window.addEventListener('keydown', (e) => {
    if (e.key === 'rb' || e.key === 'ArrowRight') { // RB on controller
        switchTab(activeTab + 1);
    }
});

function switchTab(index) {
    // Hide current section, show new section
    // Update the UI to look like 1000016084.jpg
}
