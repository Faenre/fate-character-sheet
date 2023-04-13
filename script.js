function addStressBox(id) {
  const container = document.getElementById(id);

  if (container.children.length < 10) {
    const input = document.createElement("input");
    const label = document.createElement("label");
    const uniqueId = `${id}_${container.children.length}`;

    input.type = "checkbox";
    input.id = uniqueId;
    label.htmlFor = uniqueId;
    label.className = "checkbox-number";
    label.textContent = "1";

    container.appendChild(input);
    container.appendChild(label);
  }
}

function removeStressBox(id) {
  const container = document.getElementById(id);

  if (container.children.length > 2) {
    container.removeChild(container.lastChild);
    container.removeChild(container.lastChild);
  }
}

// Initialize default stress boxes on page load
document.addEventListener("DOMContentLoaded", function() {
  addStressBox("physicalStress");
  addStressBox("mentalStress");

  // Add event listeners for skill input fields
  document.querySelectorAll('.skill-input').forEach(input => {
    input.addEventListener('input', () => {
      if (input.value.trim() !== '') {
        input.style.borderColor = '#000';
      } else {
        input.style.borderColor = '#ccc';
      }
    });
  });

  // URL embedder
  document.getElementById('image-url').addEventListener('input', (event) => {
    const imageUrl = event.target.value.trim();
    const portrait = document.getElementById('portrait');

    if (imageUrl) {
      portrait.src = imageUrl;
      portrait.style.display = 'block';
    } else {
      portrait.src = '';
      portrait.style.display = 'none';
    }
  });
});

