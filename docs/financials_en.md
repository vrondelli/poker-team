# Financial Strategy & Risk Analysis

## 1. Executive Summary
This document outlines the operational and financial blueprint for a 3-player Poker Team competing at NL20 ($0.10/$0.20). The strategy leverages a high-rakeback environment (70%) to ensure profitability even for break-even or slightly losing players at the tables.

**Key Targets:**
*   **Game:** NL20 ($0.10/$0.20)
*   **Volume Target:** 36,000 hands/month (Team Total)
*   **Est. Team Monthly Profit:** **$453 - $554** (Total Generated)
*   **Deal Structure:** 60% Team / 40% Player (Staked Model)
*   **Primary Profit Driver:** Rakeback (Gross Rake * 70%)

---

## 2. Team Composition & Performance Scenarios
We model the team based on three distinct player profiles to estimate range-bound performance.

**Assumptions on Rake:**
*   **Base Scenario:** 9 bb/100 (Standard TAG)
*   **High Volume/Loose:** 11 bb/100 (More active play)

### Scenario A: Standard Rake (9 bb/100 paid)
*   **Rakeback (70%):** +6.3 bb/100

| Player Role | Table Winrate | Rakeback | **Net Winrate** |
| :--- | :---: | :---: | :---: |
| **Player A (-5)** | -5.0 | +6.3 | **+1.3** |
| **Player B (0)** | 0.0 | +6.3 | **+6.3** |
| **Player C (+5)** | +5.0 | +6.3 | **+11.3** |

### Scenario B: High Rake Environment (11 bb/100 paid)
*   **Rakeback (70%):** +7.7 bb/100
*   *Note: Higher rake paid usually correlates with slightly lower table winrates due to friction, but we will hold table winrates constant for this projection to show pure RB upside.*

| Player Role | Table Winrate | Rakeback | **Net Winrate** |
| :--- | :---: | :---: | :---: |
| **Player A (-5)** | -5.0 | +7.7 | **+2.7** |
| **Player B (0)** | 0.0 | +7.7 | **+7.7** |
| **Player C (+5)** | +5.0 | +7.7 | **+12.7** |

---

## 3. Financial Projections (Monthly)

### Deal Structure: Staked Model
*   **Bankroll:** Provided 100% by the Poker Team (Investors).
*   **Profit Split:** 60% Team / 40% Player.
*   **Make-up:** Standard make-up applies (losses must be recovered before future splits).

### Individual Performance (12k hands)
*Values in Bracket are (Player Share / Team Share)*

*   **Player A (-5bb Table):** Total +$31 -> **Player: $12** | **Team: $19**
*   **Player B (0bb Table):** Total +$151 -> **Player: $60** | **Team: $91**
*   **Player C (+5bb Table):** Total +$271 -> **Player: $108** | **Team: $163**

### Team Totals (Scenario A: Standard Rake)
*   **Total Monthly Net Revenue:** **$453.60**
*   **Team Net Profit (60%):** **~$272.00**
*   **Players Total Payout (40%):** **~$181.00**

### Team Totals (Scenario B: High Rake Environment)
*   **Total Monthly Net Revenue:** **$554.40**
*   **Team Net Profit (60%):** **~$333.00**
*   **Players Total Payout (40%):** **~$222.00**

---

## 4. Risk Analysis & Bankroll Management

### Volatility Parameters
*   **Standard Deviation (SD):** 100 bb/100
*   **Stop Loss:** -4 Buy-ins (400bb) per day per player to prevent tilt/catastrophic sessions.

### Bankroll Requirements (<1% Risk of Ruin)
Calculated using the Kelly criterion approximation for Risk of Ruin:
`B = -(σ² / 2μ) * ln(R)`

#### 1. Team Capital Requirements (Investor Risk)
Since the Team provides 100% of the bankroll for all 3 players, we treat the operation as a single portfolio.
*   **Team Net Winrate:** +18.9 bb/100 (Combined)
*   **Team Variance:** $\sqrt{3} \times 100 \approx 173$ bb/100
*   **Required Buy-ins:** ~37 BIs (Kelly Criterion for <1% Risk of Ruin)
*   **Recommended Fund:** **$1,000 (50 Buy-ins)**
    *   *Allocation:* The $1,000 fund covers the variance of all 3 players simultaneously.
    *   *Reload Strategy:* If the fund drops below $500 (25 BIs), investors should be prepared to top up.

#### 2. Player Risk Profile
*   **Financial Risk:** $0.00 (Fully Staked).
*   **Risk of Ruin:** None (Players do not lose their own money).
*   **Make-up Protocol:** Players in make-up (negative balance) must clear the debt from future profits before receiving their 40% cut. Make-up does not reset monthly.
