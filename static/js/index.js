document.addEventListener('DOMContentLoaded', () => {
  let timer = document.querySelector("#timer");
  let currentDate = new Date();
  let targetDate = new Date('2026-09-09');
  let remainingDays = clamp(Math.round((targetDate.getTime() - currentDate.getTime()) / (1000 * 60 * 60 * 24)), 0, Number.MAX_SAFE_INTEGER);
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

function clamp(current, min, max) {
  if (current >= min && current <= max) return current;
  if (current < min) return min;
  if (current > max) return max;
  return current;
}