
const colorPicker = document.getElementById('colorPicker');
const colorPreview = document.getElementById('colorPreview');
const colorHistory = document.getElementById('colorHistory');
const clearHistoryButton = document.getElementById('clearHistoryButton');

// Marka uu adeegsaduhu doorbido midab cusub
colorPicker.addEventListener('input', (event) => {
    const selectedColor = event.target.value;

    
    colorPreview.style.backgroundColor = selectedColor;
    colorPreview.textContent = selectedColor;

    
    const listItem = document.createElement('li');
    
    
    listItem.innerHTML = `
        <span style="display: inline-block; width: 20px; height: 20px; background-color: ${selectedColor}; vertical-align: middle; margin-right: 8px; border: 1px solid #000;"></span>
        ${selectedColor}
    `;
    
    colorHistory.appendChild(listItem);
});

// Marka la dhaho "Clear History"
clearHistoryButton.addEventListener('click', () => {
    
    colorHistory.innerHTML = '';

    
    colorPreview.style.backgroundColor = '';
    colorPreview.textContent = 'Color Preview';
    
    
    colorPicker.value = '#000000';
});