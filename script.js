let currentType = null;

function showEarring() {
  document.getElementById('earring').setAttribute('visible', true);
  document.getElementById('necklace').setAttribute('visible', false);
  currentType = 'earring';
}

function showNecklace() {
  document.getElementById('earring').setAttribute('visible', false);
  document.getElementById('necklace').setAttribute('visible', true);
  currentType = 'necklace';
}

function changeEarring(url) {
  document.getElementById('earring').setAttribute('src', url);
  showEarring();
}

function changeNecklace(url) {
  document.getElementById('necklace').setAttribute('src', url);
  showNecklace();
}

async function loadJewelryImages(type, containerId, apiUrl) {
  const container = document.getElementById(containerId);
  container.innerHTML = '';

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    data.forEach(item => {
      const button = document.createElement('button');
      const img = document.createElement('img');
      img.src = item.url;
      img.alt = item.name;
      img.width = 60;
      img.height = 60;
      button.appendChild(img);
      button.onclick = () => {
        if (type === 'earring') changeEarring(item.url);
        else if (type === 'necklace') changeNecklace(item.url);
      };
      container.appendChild(button);
    });
  } catch (err) {
    console.error('Image load error:', err);
  }
}

// Replace these with your actual Google Apps Script endpoint URLs
loadJewelryImages('earring', 'earring-options', 'YOUR_EARRING_API_URL');
loadJewelryImages('necklace', 'necklace-options', 'YOUR_NECKLACE_API_URL');