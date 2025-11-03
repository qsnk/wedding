document.addEventListener('DOMContentLoaded', () => {
    let timer = document.querySelector("#timer");
    let currentDate = new Date();
    let targetDate = new Date('2026-09-09');
    let remainingDays = Math.round((targetDate.getTime() - currentDate.getTime()) / (1000 * 60 * 60 * 24));
    let day = getDaysWord(remainingDays);
    timer.innerHTML = `<span class="rampart-one-regular">${remainingDays}</span> <span class="text-4xl cormorant">${day}</span>`;
})

function getDaysWord(days) {
  let n = Math.abs(days) % 100;
  let n1 = n % 10;
  if (n > 10 && n < 20) {
      return 'дней';
  }
  if (n1 > 1 && n1 < 5) {
      return 'дня';
  }
  if (n1 === 1) {
      return 'день';
  }
  return 'дней';
}
