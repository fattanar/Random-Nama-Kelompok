function generateGroups() {
    const numberOfGroups = document.getElementById('numberOfGroups').valueAsNumber;
    const maleNames = document.getElementById('maleNames').value.split(/[\n,]+/).map(name => name.trim());
    const femaleNames = document.getElementById('femaleNames').value.split(/[\n,]+/).map(name => name.trim());

    if (isNaN(numberOfGroups) || numberOfGroups <= 0) {
        alert('Masukkan jumlah kelompok yang valid.');
        return;
    }

    let availableMaleNames = [...maleNames];
    let availableFemaleNames = [...femaleNames];

    const resultContainer = document.getElementById('result');
    resultContainer.innerHTML = '';

    for (let group = 1; group <= numberOfGroups; group++) {
        const groupDiv = document.createElement('div');
        groupDiv.className = "result-item"
        groupDiv.innerHTML = `<h2>Kelompok ${group}:</h2>`;

        const maleInGroup = Math.ceil(availableMaleNames.length / (numberOfGroups - group + 1));
        const femaleInGroup = Math.ceil(availableFemaleNames.length / (numberOfGroups - group + 1));

        for (let i = 0; i < maleInGroup && availableMaleNames.length > 0; i++) {
            const randomIndex = Math.floor(Math.random() * availableMaleNames.length);
            const randomName = availableMaleNames[randomIndex];
            availableMaleNames.splice(randomIndex, 1);

            const nameParagraph = document.createElement('p');
            nameParagraph.textContent = randomName + ' (Laki-Laki)';
            groupDiv.appendChild(nameParagraph);
        }

        for (let i = 0; i < femaleInGroup && availableFemaleNames.length > 0; i++) {
            const randomIndex = Math.floor(Math.random() * availableFemaleNames.length);
            const randomName = availableFemaleNames[randomIndex];
            availableFemaleNames.splice(randomIndex, 1);

            const nameParagraph = document.createElement('p');
            nameParagraph.textContent = randomName + ' (Perempuan)';
            groupDiv.appendChild(nameParagraph);
        }

        resultContainer.appendChild(groupDiv);
    }
}

function showCurrentDateTime() {
    const currentDate = new Date();
    
    const options = { timeZone: 'Asia/Jakarta', weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
    
    const formatter = new Intl.DateTimeFormat('id-ID', options);
    
    const formattedDateTime = formatter.format(currentDate);

    document.getElementById('currentDateTime').textContent = formattedDateTime;
  }

  window.onload = showCurrentDateTime;