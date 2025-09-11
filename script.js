// Set med school start and end dates
const startDate = new Date("2025-08-04");  // change to her actual start date
const endDate = new Date("2029-05-17");    // change to her graduation date

function updateProgress() {
  const today = new Date();
  const totalTime = endDate - startDate;
  const timePassed = today - startDate;

  let percent = (timePassed / totalTime) * 100;
  percent = Math.min(Math.max(percent, 0), 100); // clamp between 0–100

  document.getElementById("progress-bar").style.width = percent + "%";
  document.getElementById("progress-bar").innerText = percent.toFixed(1) + "%";
  document.getElementById("progress-text").innerText =
    percent.toFixed(1) + "% of med school completed. Geaux Tigers!🐯";
}

updateProgress();
