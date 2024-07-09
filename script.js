// List of all Wesminster constituencies
const subConstituencies = [
    "Aberafan Maesteg", "Alyn and Deeside", "Bangor Aberconwy", "Blaenau Gwent and Rhymney", 
    "Brecon, Radnor and Cwm Tawe", "Bridgend", "Caerfyrddin", "Caerphilly", "Cardiff East", 
    "Cardiff North", "Cardiff South and Penarth", "Cardiff West", "Ceredigion Preseli", "Clwyd East", 
    "Clwyd North", "Dwyfor Meirionnydd", "Gower", "Llanelli", "Merthyr Tydfil and Aberdare", 
    "Mid and South Pembrokeshire", "Monmouthshire", "Montgomeryshire and Glyndwr", "Neath and Swansea East", 
    "Newport East", "Newport West and Islwyn", "Pontypridd", "Rhondda and Ogmore", "Swansea West", "Torfaen", 
    "Vale of Glamorgan", "Wrexham", "Ynys Môn"
];

// Default constituency pairings (just guessing here)
let constituencyPairings = [
    ["Alyn and Deeside", "Clwyd East"],
    ["Wrexham", "Montgomeryshire and Glyndwr"],
    ["Bangor Aberconwy", "Clwyd North"],
    ["Ynys Môn", "Dwyfor Meirionnydd"],
    ["Ceredigion Preseli", "Mid and South Pembrokeshire"],
    ["Caerfyrddin", "Llanelli"],
    ["Gower", "Swansea West"],
    ["Neath and Swansea East", "Aberafan Maesteg"],
    ["Bridgend", "Rhondda and Ogmore"],
    ["Merthyr Tydfil and Aberdare", "Pontypridd"],
    ["Cardiff West", "Vale of Glamorgan"],
    ["Cardiff South and Penarth", "Cardiff East"],
    ["Caerphilly", "Cardiff North"],
    ["Blaenau Gwent and Rhymney", "Torfaen"],
    ["Newport East", "Newport West and Islwyn"],
    ["Brecon, Radnor and Cwm Tawe", "Monmouthshire"]
];

// Baseline vote shares for each sub-constituency (estimates only to be improved later)
        const baselineVotes = {
        "Aberafan Maesteg": {"Labour": 46, "Conservatives": 14, "PlaidCymru": 23, "LibDems": 3, "Greens": 3, "Reform": 4, "Other": 7},
        "Alyn and Deeside": {"Labour": 41, "Conservatives": 32, "PlaidCymru": 9, "LibDems": 5, "Greens": 3, "Reform": 8, "Other": 2},
        "Bangor Aberconwy": {"Labour": 23, "Conservatives": 25, "PlaidCymru": 31, "LibDems": 4, "Greens": 4, "Reform": 10, "Other": 3},
        "Blaenau Gwent and Rhymney": {"Labour": 50, "Conservatives": 13, "PlaidCymru": 20, "LibDems": 4, "Greens": 2, "Reform": 9, "Other": 2},
        "Brecon, Radnor and Cwm Tawe": {"Labour": 23, "Conservatives": 32, "PlaidCymru": 12, "LibDems": 20, "Greens": 7, "Reform": 5, "Other": 1},
        "Bridgend": {"Labour": 41, "Conservatives": 25, "PlaidCymru": 15, "LibDems": 2, "Greens": 2, "Reform": 8, "Other": 7},
        "Caerfyrddin": {"Labour": 22, "Conservatives": 25, "PlaidCymru": 36, "LibDems": 4, "Greens": 5, "Reform": 5, "Other": 3},
        "Caerphilly": {"Labour": 40, "Conservatives": 15, "PlaidCymru": 26, "LibDems": 2, "Greens": 4, "Reform": 6, "Other": 7},
        "Cardiff East": {"Labour": 38, "Conservatives": 14, "PlaidCymru": 14, "LibDems": 22, "Greens": 8, "Reform": 3, "Other": 2},
        "Cardiff North": {"Labour": 36, "Conservatives": 29, "PlaidCymru": 14, "LibDems": 5, "Greens": 8, "Reform": 4, "Other": 4},
        "Cardiff South and Penarth": {"Labour": 42, "Conservatives": 20, "PlaidCymru": 15, "LibDems": 4, "Greens": 9, "Reform": 6, "Other": 4},
        "Cardiff West": {"Labour": 44, "Conservatives": 17, "PlaidCymru": 22, "LibDems": 3, "Greens": 7, "Reform": 1, "Other": 6},
        "Ceredigion Preseli": {"Labour": 17, "Conservatives": 20, "PlaidCymru": 50, "LibDems": 18, "Greens": 2, "Reform": 1, "Other": 2},
        "Clwyd East": {"Labour": 40, "Conservatives": 38, "PlaidCymru": 10, "LibDems": 4, "Greens": 2, "Reform": 1, "Other": 5},
        "Clwyd North": {"Labour": 39, "Conservatives": 39, "PlaidCymru": 12, "LibDems": 3, "Greens": 3, "Reform": 3, "Other": 2},
        "Dwyfor Meirionnydd": {"Labour": 18, "Conservatives": 17, "PlaidCymru": 47, "LibDems": 3, "Greens": 4, "Reform": 2, "Other": 9},
        "Gower": {"Labour": 42, "Conservatives": 25, "PlaidCymru": 16, "LibDems": 3, "Greens": 5, "Reform": 6, "Other": 3},
        "Llanelli": {"Labour": 40, "Conservatives": 14, "PlaidCymru": 33, "LibDems": 2, "Greens": 3, "Reform": 6, "Other": 2},
        "Merthyr Tydfil and Aberdare": {"Labour": 55, "Conservatives": 11, "PlaidCymru": 18, "LibDems": 2, "Greens": 3, "Reform": 8, "Other": 2},
        "Mid and South Pembrokeshire": {"Labour": 30, "Conservatives": 33, "PlaidCymru": 20, "LibDems": 3, "Greens": 3, "Reform": 7, "Other": 4},
        "Monmouthshire": {"Labour": 32, "Conservatives": 39, "PlaidCymru": 7, "LibDems": 6, "Greens": 9, "Reform": 6, "Other": 1},
        "Montgomeryshire and Glyndwr": {"Labour": 17, "Conservatives": 42, "PlaidCymru": 17, "LibDems": 11, "Greens": 3, "Reform": 8, "Other": 2},
        "Neath and Swansea East": {"Labour": 48, "Conservatives": 13, "PlaidCymru": 21, "LibDems": 3, "Greens": 3, "Reform": 7, "Other": 5},
        "Newport East": {"Labour": 44, "Conservatives": 30, "PlaidCymru": 8, "LibDems": 6, "Greens": 5, "Reform": 7, "Other": 0},
        "Newport West and Islwyn": {"Labour": 43, "Conservatives": 27, "PlaidCymru": 16, "LibDems": 3, "Greens": 5, "Reform": 5, "Other": 1},
        "Pontypridd": {"Labour": 39, "Conservatives": 20, "PlaidCymru": 22, "LibDems": 5 , "Greens": 4, "Reform": 6, "Other": 4},
        "Rhondda and Ogmore": {"Labour": 49, "Conservatives": 8, "PlaidCymru": 30, "LibDems": 1, "Greens": 3, "Reform": 6, "Other": 3},
        "Swansea West": {"Labour": 42, "Conservatives": 18, "PlaidCymru": 16, "LibDems": 7, "Greens": 6, "Reform": 6, "Other": 5},
        "Torfaen": {"Labour": 44, "Conservatives": 24, "PlaidCymru": 12, "LibDems": 3, "Greens": 3, "Reform": 8, "Other": 6},
        "Vale of Glamorgan": {"Labour": 39, "Conservatives": 35, "PlaidCymru": 12, "LibDems": 2, "Greens": 6, "Reform": 3, "Other": 1},
        "Wrexham": {"Labour": 28, "Conservatives": 27, "PlaidCymru": 22, "LibDems": 9, "Greens": 6, "Reform": 4, "Other": 4},
        "Ynys Môn": {"Labour": 24, "Conservatives": 22, "PlaidCymru": 43, "LibDems": 2, "Greens": 2, "Reform": 2, "Other": 5},
    };

// D'Hondt method implementation
function dHondt(votes, seats) {
    const parties = Object.keys(votes);
    const results = {};
    const allocationHistory = [];
    parties.forEach(party => results[party] = 0);

    for (let i = 0; i < seats; i++) {
        const quotients = parties.map(party => ({
            party,
            quotient: votes[party] / (results[party] + 1)
        }));
        quotients.sort((a, b) => b.quotient - a.quotient);
        const winner = quotients[0].party;
        results[winner]++;
        allocationHistory.push({
            round: i + 1,
            winner,
            quotients: quotients.map(q => ({ ...q, seats: results[q.party] }))
        });
    }

    return { results, allocationHistory };
}

// Update total percentage
function updateTotalPercentage() {
    const inputs = document.querySelectorAll('#partyInputs input');
    let total = 0;
    inputs.forEach(input => {
        total += parseFloat(input.value) || 0;
    });
    document.getElementById('totalPercentage').textContent = `Total: ${total.toFixed(1)}%`;
    return total;
}

// Add event listeners to update total on input
document.querySelectorAll('#partyInputs input').forEach(input => {
    input.addEventListener('input', updateTotalPercentage);
});

// Handle form submission
document.getElementById('voteForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const total = updateTotalPercentage();
    if (Math.abs(total - 100) > 0.1) {
        alert('The total percentage must equal 100%');
        return;
    }
    
    const nationalVotes = {};
    document.querySelectorAll('#partyInputs input').forEach(input => {
        nationalVotes[input.name] = parseFloat(input.value) || 0;
    });
    
    const allResults = calculateAllConstituencies(nationalVotes);
    displayResults(allResults);
});

// Calculate results for all constituencies
function calculateAllConstituencies(nationalVotes) {
    return constituencyPairings.map(pair => {
        const constituencyName = pair.join(' + ');
        const constituencyVotes = applyUniformSwing(
            combineConstituencyVotes(baselineVotes[pair[0]], baselineVotes[pair[1]]),
            nationalVotes
        );
        const { results, allocationHistory } = dHondt(constituencyVotes, 6);
        const lastAllocation = allocationHistory[allocationHistory.length - 1];
        const closestMargin = lastAllocation.quotients[0].quotient - lastAllocation.quotients[1].quotient;
        return { constituency: constituencyName, results, closestMargin, allocationHistory };
    });
}

// Combine votes from two sub-constituencies
function combineConstituencyVotes(votes1, votes2) {
    const combined = {};
    for (const party in votes1) {
        combined[party] = (votes1[party] + votes2[party]) / 2;
    }
    return combined;
}

// Apply uniform swing to a constituency
function applyUniformSwing(baselineVotes, nationalVotes) {
    const swingVotes = {};
    for (const party in baselineVotes) {
        const swing = nationalVotes[party] - baselineVotes[party];
        swingVotes[party] = Math.max(0, baselineVotes[party] + swing);
    }
    return swingVotes;
}

// Try to visualise it all here - might be mistakes
function createSeatVisualization(nationalTotals) {
    const visContainer = document.getElementById('seatVisualization');
    visContainer.innerHTML = '';
    const partyColors = {
        'Labour': '#DC241f',
        'Conservatives': '#0087DC',
        'PlaidCymru': '#005B54',
        'LibDems': '#FDBB30',
        'Greens': '#6AB023',
        'Reform': '#12B6CF',
        'Other': '#808080'
    };
    const gridContainer = document.createElement('div');
    gridContainer.className = 'seat-grid';

    let seatCount = 0;
    for (const party in nationalTotals) {
        const seats = nationalTotals[party];
        for (let i = 0; i < seats; i++) {
            const seat = document.createElement('div');
            seat.className = 'seat';
            if (seatCount === 48) { 
                seat.classList.add('majority-seat');
            }
            seat.style.backgroundColor = partyColors[party] || '#808080';
            seat.title = `${party}: Seat ${seatCount + 1}`;
            gridContainer.appendChild(seat);
            seatCount++;
        }
    }

    const majorityLabel = document.createElement('div');
    majorityLabel.className = 'majority-label';
    majorityLabel.textContent = 'Majority (49 seats)';
    gridContainer.appendChild(majorityLabel);

    visContainer.appendChild(gridContainer);

    
    const description = document.createElement('p');
    description.className = 'visually-hidden';
    
    let descriptionText = 'Seat distribution: ';
    for (const party in nationalTotals) {
        descriptionText += `${party} ${nationalTotals[party]} seats, `;
    }
    descriptionText += 'Majority at 49 seats.';
    description.textContent = descriptionText;
    
    visContainer.appendChild(description);
}

// Display results
function displayResults(allResults) {
    const resultsDiv = document.getElementById('results');
    let html = '';

    // National Totals
    const nationalTotals = allResults.reduce((acc, { results }) => {
        for (const party in results) {
            acc[party] = (acc[party] || 0) + results[party];
        }
        return acc;
    }, {});

    html += `
        <h2>National Totals</h2>
        <div id="seatVisualization"></div>
        <table>
            <tr>
                <th>Party</th>
                <th>Total Seats</th>
            </tr>
    `;

    for (const party in nationalTotals) {
        html += `
            <tr>
                <td>${party === "PlaidCymru" ? "Plaid Cymru" : party === "LibDems" ? "Liberal Democrats" : party}</td>
                <td>${nationalTotals[party]}</td>
            </tr>
        `;
    }

    html += '</table>';

  

    // Constituency Results
    html += `
        <h2>Results by Constituency</h2>
        <table>
            <tr>
                <th>Constituency</th>
                <th>Labour</th>
                <th>Conservatives</th>
                <th>Plaid Cymru</th>
                <th>Lib Dems</th>
                <th>Greens</th>
                <th>Reform</th>
                <th>Other</th>
                <th>Closest Margin</th>
            </tr>
    `;

    allResults.forEach(({ constituency, results, closestMargin }) => {
        html += `
            <tr>
                <td>${constituency}</td>
                <td>${results['Labour'] || 0}</td>
                <td>${results['Conservatives'] || 0}</td>
                <td>${results['PlaidCymru'] || 0}</td>
                <td>${results['LibDems'] || 0}</td>
                <td>${results['Greens'] || 0}</td>
                <td>${results['Reform'] || 0}</td>
                <td>${results['Other'] || 0}</td>
                <td>${closestMargin.toFixed(2)}</td>
            </tr>
        `;
    });

    html += '</table>';

    // Closest Calls section
    html += `
        <h2>Closest Calls</h2>
        <table>
            <tr>
                <th>Constituency</th>
                <th>Margin</th>
                <th>Winning Party</th>
                <th>Runner-up Party</th>
            </tr>
    `;

    const closestCalls = allResults
        .sort((a, b) => a.closestMargin - b.closestMargin)
        .slice(0, 5);

    closestCalls.forEach(({ constituency, closestMargin, allocationHistory }) => {
        const lastAllocation = allocationHistory[allocationHistory.length - 1];
        const winner = lastAllocation.winner;
        const runnerUp = lastAllocation.quotients[1].party;
        html += `
            <tr>
                <td>${constituency}</td>
                <td>${closestMargin.toFixed(2)}</td>
                <td>${winner}</td>
                <td>${runnerUp}</td>
            </tr>
        `;
    });

    html += '</table>';

    html += `
    <h2>Seat Allocation Process</h2>
    <select id="constituencySelector">
        ${allResults.map(result => `<option value="${result.constituency}">${result.constituency}</option>`).join('')}
    </select>
`;
    resultsDiv.innerHTML = html;

    html += '<p><strong>Majority = 49 seats</strong></p>';

      // Create seat visualization
createSeatVisualization(nationalTotals);

    // Add allocation process visualization
    addAllocationProcessVisualization(allResults[0]);
}

function addAllocationProcessVisualization(initialConstituencyResult) {
    const visualizationDiv = document.createElement('div');
    visualizationDiv.id = 'allocationVisualization';
    document.getElementById('results').appendChild(visualizationDiv);

    const slider = document.createElement('input');
    slider.type = 'range';
    slider.min = '0';
    slider.max = initialConstituencyResult.allocationHistory.length - 1;
    slider.value = '0';
    visualizationDiv.appendChild(slider);

    const allocationInfo = document.createElement('div');
    visualizationDiv.appendChild(allocationInfo);

    function updateVisualization(constituencyResult) {
        slider.max = constituencyResult.allocationHistory.length - 1;
        slider.value = '0';
        
        function updateAllocationInfo() {
            const round = slider.value;
            const allocation = constituencyResult.allocationHistory[round];
            let html = `<h3>Allocation Process for ${constituencyResult.constituency}: Round ${parseInt(round) + 1}</h3>`;
            html += `<p>Seat awarded to: ${allocation.winner}</p>`;
            html += '<table><tr><th>Party</th><th>Quotient</th><th>Seats</th></tr>';
            allocation.quotients.forEach(q => {
                html += `<tr>
                    <td>${q.party}</td>
                    <td>${q.quotient.toFixed(2)}</td>
                    <td>${q.seats}</td>
                </tr>`;
            });
            html += '</table>';
            allocationInfo.innerHTML = html;
        }

        slider.addEventListener('input', updateAllocationInfo);
        updateAllocationInfo();
    }

    updateVisualization(initialConstituencyResult);

    // Add event listener to the constituency selector
    document.getElementById('constituencySelector').addEventListener('change', function() {
        const selectedConstituency = this.value;
        const selectedResult = allResults.find(result => result.constituency === selectedConstituency);
        updateVisualization(selectedResult);
    });
}

document.getElementById('openPairingModal').addEventListener('click', openPairingModal);
document.getElementById('savePairings').addEventListener('click', savePairings);

function openPairingModal() {
    document.getElementById('pairingModal').style.display = 'block';
    populatePairingOptions();
}

function savePairings() {
    constituencyPairings = [];
    const pairingOptions = document.getElementById('pairingOptions').children;
    for (let i = 0; i < pairingOptions.length; i++) {
        const pair = [
            pairingOptions[i].querySelector(`#pair1-${i}`).value,
            pairingOptions[i].querySelector(`#pair2-${i}`).value
        ];
        constituencyPairings.push(pair);
    }
    document.getElementById('pairingModal').style.display = 'none';
}

function populatePairingOptions() {
    const pairingOptions = document.getElementById('pairingOptions');
    pairingOptions.innerHTML = '';
    constituencyPairings.forEach((pair, index) => {
        pairingOptions.innerHTML += `
            <div>
                <select id="pair1-${index}">
                    ${subConstituencies.map(c => `<option value="${c}" ${c === pair[0] ? 'selected' : ''}>${c}</option>`).join('')}
                </select>
                <select id="pair2-${index}">
                    ${subConstituencies.map(c => `<option value="${c}" ${c === pair[1] ? 'selected' : ''}>${c}</option>`).join('')}
                </select>
            </div>
        `;
    });
}

document.querySelector('.close').addEventListener('click', function() {
    document.getElementById('pairingModal').style.display = 'none';
});
