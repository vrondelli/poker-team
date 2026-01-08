declare const require: any;
const fs = require('fs');

// --- Configuration Interfaces ---

interface StakeConfig {
    name: string;
    bbValue: number; // Value of 1 Big Blind in dollars (e.g., 0.20 for NL20)
    estRakePaidBb100: number; // Est. Rake contribution in bb/100
}

interface PlayerGroup {
    count: number;
    role: string;
    stakeId: string;
    volumePerMonth: number;
    tableWinrateBb100: number;
}

// --- Constants ---

const STAKES: Record<string, StakeConfig> = {
    'NL20': { name: 'NL20 ($0.10/$0.20)', bbValue: 0.20, estRakePaidBb100: 10.0 },
    'NL60': { name: 'NL60 ($0.30/$0.60)', bbValue: 0.60, estRakePaidBb100: 8.5 },
    'NL100': { name: 'NL100 ($0.50/$1.00)', bbValue: 1.00, estRakePaidBb100: 7.0 },
};

const RAKEBACK_DEAL = 0.70; // 70%
const TEAM_SHARE = 0.60;    // 60%
const PLAYER_SHARE = 0.40;  // 40%

// --- Markdown Builder ---

let markdownOutput = `# Poker Team Financial Projections (Simulation)
*Generated on: ${new Date().toLocaleString()}*

---
`;

function appendMd(content: string) {
    markdownOutput += content + '\n';
}

// --- Calculation Logic ---

function calculateScenario(name: string, groups: PlayerGroup[]): void {
    appendMd(`## Scenario: ${name}`);
    
    let totalGrossRevenue = 0;
    let totalTeamProfit = 0;
    let totalPlayerShare = 0;
    let totalVolume = 0;

    // Table Header
    appendMd(`| Group | Count | Stake | Vol/Player | Table WR | Net WR | Group Rev |`);
    appendMd(`| :--- | :---: | :---: | :---: | :---: | :---: | :---: |`);

    groups.forEach(group => {
        const stake = STAKES[group.stakeId];
        if (!stake) {
            console.error(`Invalid stake: ${group.stakeId}`);
            return;
        }

        const rakebackBb100 = stake.estRakePaidBb100 * RAKEBACK_DEAL;
        const netWinrateBb100 = group.tableWinrateBb100 + rakebackBb100;
        
        const totalHands = group.volumePerMonth * group.count;
        const totalNetBb = (netWinrateBb100 / 100) * totalHands;
        const totalRevenue = totalNetBb * stake.bbValue;

        const teamProfit = totalRevenue * TEAM_SHARE;
        const playerPayout = totalRevenue * PLAYER_SHARE;

        totalGrossRevenue += totalRevenue;
        totalTeamProfit += teamProfit;
        totalPlayerShare += playerPayout;
        totalVolume += totalHands;

        // Table Row
        appendMd(`| ${group.role} | ${group.count} | ${group.stakeId} | ${group.volumePerMonth.toLocaleString()} | ${group.tableWinrateBb100} bb | ${netWinrateBb100.toFixed(1)} bb | $${totalRevenue.toFixed(0)} |`);
    });

    appendMd(`\n**Monthly Totals:**`);
    appendMd(`*   **Total Hands:** ${totalVolume.toLocaleString()}`);
    appendMd(`*   **Total Net Revenue:** $${totalGrossRevenue.toFixed(2)}`);
    appendMd(`*   **TEAM PROFIT (60%):** **$${totalTeamProfit.toFixed(2)}**`);
    appendMd(`*   **PLAYERS PAID (40%):** $${totalPlayerShare.toFixed(2)}`);
    appendMd(`\n---\n`);
}

// --- Run Scenarios ---

// Scenario 1: Current Operational Plan
calculateScenario("Current Operational Plan (Improved)", [
    { count: 1, role: 'Anchor', stakeId: 'NL20', volumePerMonth: 12000, tableWinrateBb100: -5 },
    { count: 1, role: 'Avg',    stakeId: 'NL20', volumePerMonth: 12000, tableWinrateBb100: 0 },
    { count: 1, role: 'Crusher',stakeId: 'NL20', volumePerMonth: 12000, tableWinrateBb100: 5 },
]);

// Scenario 2: Future Scalability
calculateScenario("Future Expansion Scale-Up", [
    { count: 2, role: 'Junior',  stakeId: 'NL20',  volumePerMonth: 20000, tableWinrateBb100: 1 },
    { count: 3, role: 'Senior',  stakeId: 'NL60',  volumePerMonth: 15000, tableWinrateBb100: 2 },
    { count: 2, role: 'Captain', stakeId: 'NL100', volumePerMonth: 12000, tableWinrateBb100: 3 },
]);

// --- Write File ---
const OUTPUT_FILE = 'poker_simulation_results.md';
fs.writeFileSync(OUTPUT_FILE, markdownOutput);
console.log(`Successfully generated ${OUTPUT_FILE}`);
