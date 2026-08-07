// ======================================================
// 🌸 Weather Teller Studio
// Scheduler
// ======================================================

export function startScheduler(task, minutes = 10) {

    const interval = minutes * 60 * 1000;

    return setInterval(task, interval);

}

export function stopScheduler(id) {

    clearInterval(id);

}