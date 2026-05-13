const startup = document.getElementById('startup');
const loading = document.getElementById('loading');
const dashboard = document.getElementById('dashboard');
const music = document.getElementById('bgMusic');

// Transition from Start to Loading
window.addEventListener('keydown', (e) => {
    if (startup.classList.contains('active')) {
        music.play();
        startup.classList.remove('active');
        loading.classList.add('active');

        // Stay on loading for 3 seconds, then show Dashboard
        setTimeout(() => {
            loading.classList.remove('active');
            dashboard.classList.add('active');
        }, 3000);
    }
});

// Launch Roblox Player
function launchGame(id) {
    // This uses the URI protocol to wake up the Windows Roblox App
    window.location.href = `roblox-player:1+launchmode:play+placeid:${id}`;
}
