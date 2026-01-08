const nights = [
    {
        id: 1,
        title: "Night 1: The Binary Filter",
        scenario: "The Guardian <strong>LOCKS</strong> the door.",
        axiom_reminder: "Reminder: Guardian LOCKS with High Value (Diamond/Gold) or Bluffs (Rock). He NEVER acts aggressively with Medium Value (Silver).",
        options: ["Diamond", "Gold", "Silver", "Rock"],
        correct: ["Diamond", "Gold", "Rock"] // Silver is impossible
    },
    {
        id: 2,
        title: "Night 2: The Frequency Shift",
        scenario: "The Guardian <strong>ATTACKS</strong>.",
        extra_info: "Tonight's Intel: He bluffs with Rocks 25% of the time. Diamonds attack 100%. Gold/Silver attack 0%.",
        options: ["Diamond", "Gold", "Silver", "Rock"],
        correct: ["Diamond", "Rock"] // Only these can attack
    },
    {
        id: 3,
        title: "Night 3: The Intersecting Lines",
        scenario: "Event 1: It starts <strong>RAINING</strong> (Guardian stays OUT).<br>Event 2: A <strong>CLICKING</strong> sound is heard.",
        axiom_reminder: "Rain: Stays out ONLY with Waterproof (Diamond/Rock).<br>Click: Sound only with Metallic (Gold/Silver).<br>Find the single item that fits BOTH.",
        options: ["Diamond", "Gold", "Silver", "Rock"],
        correct: ["Gold"] // The only overlap? Wait... 
        // MD review: 
        // Rain = Diamond/Rock? (Manual says: "Guardian hates Rain (unless he has Waterproof items like Diamond/Rock)")
        // Click = Gold/Silver.
        // Intersection = Empty?
        // Wait, let's check the MD logic I wrote previously...
        // "Refined Rule for Game: Rain = Guardian stays out ONLY with Diamond or Gold. (Silver/Rock go in)."
        // "Logic: Rain (Diamond/Gold) + Click (Gold/Silver) = GOLD."
        // OK, I must use the "Refined Rule" from the MD in this script for it to work.
        // Let's ensure the Manual text in HTML matches this logic.
    }
];

// Correcting Night 3 Logic based on MD "Refined Rule":
nights[2].axiom_reminder = "Rain Rule: Stays out ONLY with Diamond or Gold.<br>Click Rule: Sound only with Metallic (Gold/Silver).";
nights[2].correct = ["Gold"];


let currentNightIndex = 0;
let userAnswers = [];
let score = 0;

function startGame() {
    document.getElementById('phase-manual').classList.remove('active');
    loadNight(0);
}

function loadNight(index) {
    if (index >= nights.length) {
        showResults();
        return;
    }
    
    currentNightIndex = index;
    const data = nights[index];
    
    // Hide all phases, show game phase
    document.querySelectorAll('.phase').forEach(p => p.classList.remove('active'));
    document.getElementById('phase-game').classList.add('active');
    
    // Render Content
    document.getElementById('night-title').innerText = data.title;
    document.getElementById('scenario-text').innerHTML = data.scenario;
    document.getElementById('extra-info').innerHTML = data.extra_info || data.axiom_reminder;
    
    // Render Options
    const list = document.getElementById('options-list');
    list.innerHTML = '';
    data.options.forEach(opt => {
        list.innerHTML += `
            <label class="checkbox-wrapper">
                <input type="checkbox" value="${opt}" id="cb-${opt}">
                ${opt}
            </label>
        `;
    });
}

function submitNight() {
    // Collect selected
    const selected = [];
    document.querySelectorAll('input[type="checkbox"]:checked').forEach(cb => {
        selected.push(cb.value);
    });

    // Grade immediately (internal)
    const currentCorrect = nights[currentNightIndex].correct;
    // Check if arrays match (order doesn't matter, but they are sorted strings usually)
    const isCorrect = selected.length === currentCorrect.length && 
                      selected.every(val => currentCorrect.includes(val));
    
    userAnswers.push({
        night: currentNightIndex + 1,
        selected: selected,
        correct: currentCorrect,
        passed: isCorrect
    });
    
    if (isCorrect) score++;

    // Next
    loadNight(currentNightIndex + 1);
}

function showResults() {
    document.querySelectorAll('.phase').forEach(p => p.classList.remove('active'));
    document.getElementById('phase-result').classList.add('active');
    
    const container = document.getElementById('result-details');
    container.innerHTML = `<h3>Score: ${score} / 3</h3>`;
    
    userAnswers.forEach(ans => {
        container.innerHTML += `
            <div class="card" style="margin-top:1rem; padding:1rem;">
                <div style="font-weight:bold; color: ${ans.passed ? '#238636' : '#da3633'}">
                    Night ${ans.night}: ${ans.passed ? "PASSED" : "FAILED"}
                </div>
                <div style="font-size:0.9rem; margin-top:0.5rem; color:#8b949e">
                    Correct Range: [${ans.correct.join(', ')}]<br>
                    You Picked: [${ans.selected.join(', ')}]
                </div>
            </div>
        `;
    });
}
