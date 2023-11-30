// Kelompok

function generateGroups() {
    const numberOfGroups = document.getElementById('numberOfGroups').valueAsNumber;
    const nameList = document.getElementById('nameList').value.split(/[\n,]+/).map(name => name.trim());

    if (isNaN(numberOfGroups) || numberOfGroups <= 0 || nameList.length === 0) {
        alert('Masukkan jumlah kelompok yang valid dan daftar nama tidak boleh kosong.');
        return;
    }

    const totalNames = nameList.length;
    const numberOfPeoplePerGroup = Math.floor(totalNames / numberOfGroups);
    let remainder = totalNames % numberOfGroups;

    if (totalNames < numberOfGroups) {
        alert('Jumlah nama terlalu sedikit untuk jumlah kelompok yang diminta.');
        return;
    }

    let availableNames = [...nameList];
    const resultContainer = document.getElementById('result');
    resultContainer.innerHTML = '';

    for (let group = 1; group <= numberOfGroups; group++) {
        const groupDiv = document.createElement('div');
        groupDiv.innerHTML = `<h2>Kelompok ${group}:</h2>`;

        // Tentukan jumlah orang dalam kelompok
        let peopleInGroup = numberOfPeoplePerGroup;

        // Jika masih ada sisa, tambahkan satu orang untuk beberapa kelompok
        if (remainder > 0) {
            peopleInGroup++;
            remainder--;
        }

        for (let i = 0; i < peopleInGroup; i++) {
            const randomIndex = Math.floor(Math.random() * availableNames.length);
            const randomFirstName = availableNames[randomIndex];
            availableNames.splice(randomIndex, 1);

            const nameParagraph = document.createElement('p');
            nameParagraph.textContent = randomFirstName;
            groupDiv.appendChild(nameParagraph);
        }

        resultContainer.appendChild(groupDiv);
    }
}

// Waktu

function showCurrentDateTime() {
    const currentDate = new Date();
    
    const options = { timeZone: 'Asia/Jakarta', weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
    
    const formatter = new Intl.DateTimeFormat('id-ID', options);
    
    const formattedDateTime = formatter.format(currentDate);

    document.getElementById('currentDateTime').textContent = formattedDateTime;
  }

  window.onload = showCurrentDateTime;