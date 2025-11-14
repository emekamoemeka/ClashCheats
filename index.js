document.addEventListener('DOMContentLoaded', () => {
  const cells = Array.from(document.querySelectorAll('#ElixirBar ol li'));
  // mark cells for styling
  cells.forEach(c => c.classList.add('elixir-cell'));

  let i = 0;
  const fillInterval = 1000; // 1 second
  const timer = setInterval(() => {
    if (i >= cells.length) {
      // stop the interval so the fill stays at max (don't reset)
      clearInterval(timer);
      return;
    }
    const counter = document.getElementById('elixirCounter');
    cells[i].classList.add('filled');
    i++;
    counter.textContent = String(i);

  }, fillInterval);
});

(async function runRoboflow() {
  try {
    const response = await fetch('http://localhost:9001/emekas-workspace/workflows/detect-count-and-visualize-11', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        api_key: 'REPLACE_WITH_YOUR_KEY',
        inputs: { image: { type: 'url', value: 'IMAGE_URL' } }
      })
    });
    const result = await response.json();
    console.log('Roboflow result:', result);
  } catch (err) {
    console.error('Roboflow request failed:', err);
  }
});

(async function handTracker() {
  hand = ["cannon", "hog", "iceGolem", "log"]

  
})