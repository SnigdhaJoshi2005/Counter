const Decrease = document.getElementById("Decrease");
const Increase = document.getElementById("Increase");
const Reset = document.getElementById("Reset");
const Counter = document.getElementById("Counter");

let Count = 0;

Increase.onclick = function () {
  Count++;
  Counter.textContent = Count;
};

Decrease.onclick = function () {
  Count--;
  Counter.textContent = Count;
};

Reset.onclick = function () {
  Count = 0;
  Counter.textContent = Count;
};
