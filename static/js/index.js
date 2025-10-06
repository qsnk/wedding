document.addEventListener('DOMContentLoaded', () => {
    let timer = document.querySelector("#timer");
    let currentDate = new Date();
    let targetDate = new Date('2026-09-09');
    let remainingDays = Math.round((targetDate.getTime() - currentDate.getTime()) / (1000 * 60 * 60 * 24));
    timer.innerText = `Осталось ${remainingDays} дней`;

    console.log('<h1>Hello</h1>');
})
