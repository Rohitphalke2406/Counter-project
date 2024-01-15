let count = 0;
const countElement = document.getElementById('count');

function increaseCount() {
  count++;
  updateCount();
}

function decreaseCount() {
  count--;
  updateCount();
}

function resetCount() {
  count = 0;
  updateCount();
}

function updateCount() {
  countElement.textContent = count;
}
