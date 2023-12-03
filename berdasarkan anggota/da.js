function generateGroups() {
    const numberOfMembers = document.getElementById('numberOfMembers').valueAsNumber;
    const nameList = document.getElementById('nameList').value.split(/[\n,]+/).map(name => name.trim());

    if (isNaN(numberOfMembers) || numberOfMembers <= 0 || nameList.length === 0) {
        alert('Masukkan jumlah anggota per kelompok yang valid, dan daftar nama tidak boleh kosong.');
        return;
    }

    const totalNames = nameList.length;

    if (totalNames < numberOfMembers) {
        alert('Jumlah nama terlalu sedikit untuk anggota per kelompok yang diminta.');
        return;
    }

    let availableNames = [...nameList];
    const resultContainer = document.getElementById('result');
    resultContainer.innerHTML = '';

    let group = 1;

    while (availableNames.length >= numberOfMembers) {
        const groupDiv = document.createElement('div');
        groupDiv.className = 'result-item';
        groupDiv.innerHTML = `<h2>Kelompok ${group}:</h2>`;

        for (let i = 0; i < numberOfMembers; i++) {
            const randomIndex = Math.floor(Math.random() * availableNames.length);
            const randomFirstName = availableNames[randomIndex];
            availableNames.splice(randomIndex, 1);

            const nameParagraph = document.createElement('p');
            nameParagraph.textContent = randomFirstName;
            groupDiv.appendChild(nameParagraph);
        }

        resultContainer.appendChild(groupDiv);
        group++;
    }

    // Check if there are remaining names to create an additional group
    if (availableNames.length > 0) {
        const groupDiv = document.createElement('div');
        groupDiv.innerHTML = `<h2>Kelompok ${group}:</h2>`;

        for (const remainingName of availableNames) {
            const nameParagraph = document.createElement('p');
            nameParagraph.textContent = remainingName;
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
