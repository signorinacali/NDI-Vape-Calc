document.addEventListener('DOMContentLoaded', function() {
    const calculateBtn = document.getElementById('calculateBtn');
    const pgVgRatio = document.getElementById('pgVgRatio');
    const pgValue = document.getElementById('pgValue');
    const vgValue = document.getElementById('vgValue');
    const toggleSwitch = document.getElementById('checkbox');
    const nicUnitsRadios = document.querySelectorAll('input[name="nicUnits"]');
    const nicBaseLabel = document.getElementById('nicBaseLabel');
    const desiredNicLabel = document.getElementById('desiredNicLabel');
    const nicBaseInput = document.getElementById('nicBase');
    const desiredNicInput = document.getElementById('desiredNic');
    const currentTheme = localStorage.getItem('theme');

    if (currentTheme) {
        document.body.classList.add(currentTheme);

        if (currentTheme === 'dark-mode') {
            toggleSwitch.checked = true;
        }
    }

    function switchTheme(e) {
        if (e.target.checked) {
            document.body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
            localStorage.setItem('theme', 'light-mode');
        }
    }

    toggleSwitch.addEventListener('change', switchTheme, false);
    
    // Function to update nicotine labels and placeholders based on unit selection
    function updateNicLabels() {
        const selectedUnit = document.querySelector('input[name="nicUnits"]:checked').value;
        if (selectedUnit === 'percent') {
            nicBaseLabel.textContent = 'Nicotine Base (%):';
            desiredNicLabel.textContent = 'Desired Nicotine (%):';
            nicBaseInput.placeholder = 'Enter nicotine base percentage';
            desiredNicInput.placeholder = 'Enter desired nicotine percentage';
        } else { // mgml
            nicBaseLabel.textContent = 'Nicotine Base (mg/ml):';
            desiredNicLabel.textContent = 'Desired Nicotine (mg/ml):';
            nicBaseInput.placeholder = 'Enter nicotine base (mg/ml)';
            desiredNicInput.placeholder = 'Enter desired nicotine (mg/ml)';
        }
    }

    // Initial label setup and listener for radio changes
    updateNicLabels();
    nicUnitsRadios.forEach(radio => {
        radio.addEventListener('change', updateNicLabels);
    });
    
    // Initialize result fields with just "ml"
    document.getElementById('nicBaseResult').textContent = ' ml';
    document.getElementById('totalAromaResult').textContent = ' ml';
    document.getElementById('pgVgResult').textContent = ' ml';
    document.getElementById('pgResult').textContent = ' ml';
    document.getElementById('vgResult').textContent = ' ml';
    document.getElementById('totalResult').textContent = ' ml';
    
    // Update ratio display when slider changes
    pgVgRatio.addEventListener('input', function() {
        const pg = this.value;
        const vg = 100 - pg;
        pgValue.textContent = pg + '% PG';
        vgValue.textContent = vg + '% VG';
    });
    
    calculateBtn.addEventListener('click', calculate);
});

function addFlavor() {
    const container = document.getElementById('flavors-container');
    const flavorItem = document.createElement('div');
    flavorItem.className = 'flavor-item';
    flavorItem.innerHTML = `
        <input type="text" class="flavor-name" placeholder="Flavor name (optional)">
        <input type="number" class="flavor-percent" min="0" max="100" step="0.1" placeholder="Enter flavor percentage">
        <button type="button" class="remove-flavor" onclick="removeFlavor(this)">-</button>
    `;
    container.appendChild(flavorItem);
}

function removeFlavor(button) {
    const container = document.getElementById('flavors-container');
    if (container.children.length > 1) {
        button.parentElement.remove();
    } else {
        alert('You need at least one flavor!');
    }
}

function calculate() {
    // Get input values
    const totalVolume = parseFloat(document.getElementById('totalVolume').value);
    const nicBase = parseFloat(document.getElementById('nicBase').value);
    const desiredNic = parseFloat(document.getElementById('desiredNic').value);
    const pgRatio = parseFloat(document.getElementById('pgVgRatio').value) / 100; // Convert to decimal
    
    // Get all flavor items
    const flavorItems = document.querySelectorAll('.flavor-item');
    let totalAroma = 0;
    
    // Validate inputs
    if (isNaN(totalVolume) || isNaN(nicBase) || isNaN(desiredNic)) {
        alert('Please fill in all required fields with valid numbers.');
        return;
    }
    
    if (desiredNic > nicBase) {
        alert('Desired nicotine cannot be higher than nicotine base.');
        return;
    }
    
    // Calculate total aroma percentage and collect individual flavors
    const individualFlavors = []; // To store {name, percent} for later display
    for (let i = 0; i < flavorItems.length; i++) {
        const item = flavorItems[i];
        const nameInput = item.querySelector('.flavor-name');
        const percentInput = item.querySelector('.flavor-percent');
        const name = nameInput.value.trim() || `Flavor ${i + 1}`;
        const flavorPercent = parseFloat(percentInput.value);
        
        if (!isNaN(flavorPercent) && flavorPercent > 0) {
            totalAroma += flavorPercent;
            individualFlavors.push({ name, percent: flavorPercent });
        }
    }
    
    if (totalAroma > 100) {
        alert('Total flavor percentage cannot exceed 100%.');
        return;
    }
    
    // Calculate nicotine base volume (ml) - same math for % or mg/ml
    const nicBaseVolume = (desiredNic / nicBase) * totalVolume;
    
    // Calculate total aroma volume (ml)
    const totalAromaVolume = (totalAroma / 100) * totalVolume;
    
    // Display total aroma result
    document.getElementById('totalAromaResult').textContent = totalAromaVolume.toFixed(2) + ' ml';
    
    // Clear and display individual flavor results
    const individualContainer = document.getElementById('individual-flavors-container');
    individualContainer.innerHTML = '';
    individualFlavors.forEach(flavor => {
        const individualVolume = (flavor.percent / 100) * totalVolume;
        const div = document.createElement('div');
        div.className = 'result-item';
        div.innerHTML = `
            <span class="result-label">${flavor.name}:</span>
            <span class="result-value">${individualVolume.toFixed(2)} ml</span>
        `;
        individualContainer.appendChild(div);
    });
    
    // Calculate base volume (ml) - what's left after nicotine and aroma
    const baseVolume = totalVolume - nicBaseVolume - totalAromaVolume;
    
    // Calculate PG/VG volumes
    const pgVolume = pgRatio * baseVolume;
    const vgVolume = baseVolume - pgVolume;
    
    // Display other results with "ml" units
    document.getElementById('nicBaseResult').textContent = nicBaseVolume.toFixed(2) + ' ml';
    document.getElementById('pgVgResult').textContent = baseVolume.toFixed(2) + ' ml';
    document.getElementById('pgResult').textContent = pgVolume.toFixed(2) + ' ml';
    document.getElementById('vgResult').textContent = vgVolume.toFixed(2) + ' ml';
    document.getElementById('totalResult').textContent = totalVolume.toFixed(2) + ' ml';
}
