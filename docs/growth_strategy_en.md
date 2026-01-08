# Growth Strategy & Expansion

## 1. Scalability Protocol (Simulation)
We created a custom simulation script (`calculate_scenarios.ts`) to model future growth. This scenario assumes the team expands to higher stakes with increased volume.

*   **Script Location:** `calculate_scenarios.ts`
*   **How to Run:** `npx ts-node calculate_scenarios.ts`

### Scenario: Future Expansion Scale-Up
**Assumptions:**
*   **NL20:** 2 Players (Juniors) playing 20k hands/mo (1 bb WR).
*   **NL60:** 3 Players (Seniors) playing 15k hands/mo (2 bb WR).
*   **NL100:** 2 Players (Captains) playing 12k hands/mo (3 bb WR).

**Projected Monthly Results:**

| Group | Count | Stake | Vol/Player | Table WR | Net WR | Group Rev |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: |
| **Junior** | 2 | NL20 | 20,000 | 1 bb | 8.0 bb | **$640** |
| **Senior** | 3 | NL60 | 15,000 | 2 bb | 7.9 bb | **$2,146** |
| **Captain** | 2 | NL100 | 12,000 | 3 bb | 7.9 bb | **$1,896** |

**Total Team Financials:**
*   **Total Monthly Volume:** 109,000 hands
*   **Total Net Revenue:** ~$4,682
*   **Team Profit (60%):** **~$2,809 / month**
*   **Players Payout (40%):** ~$1,873 / month

---

## 2. Business Expansion & Income Streams (Ecosystem)
Beyond the tables, the project aims to diversify revenue by commercializing our internal tools and expertise, creating a cohesive Poker Ecosystem.

### 2.1 MDA SaaS Platform (Global Market)
**Concept:** A subscription-based platform democratizing access to Elite Mass Data Analysis, inspired by market leaders like SnapMDA.
**Core Value:** Allowing users to explore population tendencies without needing high-end hardware or private datamining farms.
**Features:**
*   **Massive Database:** Access to processed data from millions of hands (mined via our VM).
*   **Leak Finder:** Visualization of population GTO deviations (e.g., "Pool underbluffs River in 3BP").
*   **Bias Removal:** Algorithms to correct for non-showdown hand strength.
*   **Revenue Model:** Monthly subscription (SaaS) for access to data filters and trend reports.

### 2.2 Localized Solver & Training (Brazilian Market)
**Problem:** Major tools (PioSolver, GTO Wizard) are priced in USD, making them prohibitive for the Brazilian market due to the exchange rate.
**Solution:** A "Tropicalized" Solver and Trainer platform priced in BRL (Real).
**Innovation: Realistic Range Reading Trainer**
*   **Mechanism:** Unlike standard trainers, the user must input *their perception* of the villain's range at a decision point.
*   **Feedback Loop:** The system compares the user's input vs. Actual Population Data (MDA) + GTO Baseline.
*   **Cycle:** We use our own team players as beta testers (dogfooding) to refine the realism of the scenarios.

### 2.3 Team Management Ecosystem (B2B SaaS)
**Concept:** An all-encompassing ERP for Poker Teams and Stables.
**Modules:**
*   **Management:** Financial tracking, deal management, automated make-up calculations.
*   **Scheduling:** Booking system for coaching, study sessions, and grind blocks.
*   **Integration:** Seamlessly linked with the Training Platform (2.2) to track student progress and study history.
**Goal:** Create a unified platform where a Manager can track a player's volume, results, AND study habits in one dashboard.
