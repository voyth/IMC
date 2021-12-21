const MAX_UNDERWEIGHT = 18.5;
const MAX_NORMALWEIGHT = 24.9;
const MAX_OVERWEIGHT = 30;

function BMI() {
  const w = Number(weight.value);
  const h = Number(height.value);
  const bmi = w / (h * h);

  res.innerHTML = `BMI = ${bmi} Kg/m^2`;

  if (bmi < MAX_UNDERWEIGHT) {
    interpret.innerHTML = `You are in the underweight range.`;
  } else if (bmi <= MAX_NORMALWEIGHT) {
    interpret.innerHTML = `You are in the normal range.`;
  } else if (bmi <= MAX_OVERWEIGHT) {
    interpret.innerHTML = `You are in the overweight range.`;
  } else {
    interpret.innerHTML = `You are in the obesity range.`;
  }
}