// Функция для получения случайного факта
const fetchFact = async (endpoint) => {
    const response = await fetch(`https://uselessfacts.jsph.pl/api/v2/facts/${endpoint}?language=en`);
    const data = await response.json();
    document.getElementById('fact').textContent = data.text;
  };
  
  // Привязываем события к кнопкам
  document.getElementById('random-fact-btn').addEventListener('click', () => fetchFact('random'));
  document.getElementById('fact-of-the-day-btn').addEventListener('click', () => fetchFact('today'));
  