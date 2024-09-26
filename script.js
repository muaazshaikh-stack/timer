// Variables to track the time and interval
let totalSeconds = 0;
let interval = null;

// Get the label element
const lblTime = document.getElementById('lbl-time');

// Function to format time as hh:mm:ss
function formatTime(seconds) {
    let hrs = Math.floor(seconds / 3600);
    let mins = Math.floor((seconds % 3600) / 60);
    let secs = seconds % 60;

    return `${String(hrs).padStart(2, '0')}:${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

// Function to update the label with the current time
function updateTime() {
    lblTime.textContent = formatTime(totalSeconds);
}

// Add event listeners for the buttons
document.getElementById('btn-add-sec').addEventListener('click', () => {
    totalSeconds += 1;
    updateTime();
});

document.getElementById('btn-add-5sec').addEventListener('click', () => {
    totalSeconds += 5;
    updateTime();
});

document.getElementById('btn-add-10sec').addEventListener('click', () => {
    totalSeconds += 10;
    updateTime();
});

document.getElementById('btn-add-min').addEventListener('click', () => {
    totalSeconds += 60;
    updateTime();
});

document.getElementById('btn-add-5min').addEventListener('click', () => {
    totalSeconds += 300; // 5 minutes = 300 seconds
    updateTime();
});

document.getElementById('btn-add-10min').addEventListener('click', () => {
    totalSeconds += 600; // 10 minutes = 600 seconds
    updateTime();
});

document.getElementById('btn-add-hr').addEventListener('click', () => {
    totalSeconds += 3600; // 1 hour = 3600 seconds
    updateTime();
});

// Start button functionality
document.getElementById('btn-start').addEventListener('click', () => {
    if (!interval) {
        interval = setInterval(() => {
            totalSeconds--;
            updateTime();

            if (totalSeconds <= 0) {
                clearInterval(interval);
                interval = null;
            }
        }, 1000);
    }
});

// Stop button functionality
document.getElementById('btn-stop').addEventListener('click', () => {
    if (interval) {
        clearInterval(interval);
        interval = null;
    }
});

// Reset button functionality
document.getElementById('btn-reset').addEventListener('click', () => {
    clearInterval(interval);
    interval = null;
    totalSeconds = 0;
    updateTime();
});
