# Estratégia Financeira & Análise de Risco

## 1. Sumário Executivo
Este documento descreve o plano operacional e financeiro para um Time de Poker de 3 jogadores competindo em NL20 ($0.10/$0.20). A estratégia alavanca um ambiente de alto rakeback (70%) para garantir lucratividade mesmo para jogadores breakeven ou levemente perdedores nas mesas.

**Metas Principais:**
*   **Jogo:** NL20 ($0.10/$0.20)
*   **Meta de Volume:** 36.000 mãos/mês (Total do Time)
*   **Lucro Mensal Estimado:** **$453 - $554** (Gerado Total)
*   **Estrutura do Deal:** 60% Time / 40% Jogador (Modelo Staked)
*   **Motor de Lucro:** Rakeback (Rake Bruto * 70%)

---

## 2. Composição do Time & Cenários de Performance
Modelamos o time com base em três perfis distintos de jogadores para estimar a performance dentro de um range.

**Premissas de Rake:**
*   **Cenário Base:** 9 bb/100 (TAG Padrão)
*   **Alto Volume/Loose:** 11 bb/100 (Mais ativo)

### Cenário A: Rake Padrão (9 bb/100 pago)
*   **Rakeback (70%):** +6.3 bb/100

| Perfil | Winrate Mesa | Rakeback | **Winrate Líquida** |
| :--- | :---: | :---: | :---: |
| **Jogador A (-5)** | -5.0 | +6.3 | **+1.3** |
| **Jogador B (0)** | 0.0 | +6.3 | **+6.3** |
| **Jogador C (+5)** | +5.0 | +6.3 | **+11.3** |

### Cenário B: Ambiente de Rake Alto (11 bb/100 pago)
*   **Rakeback (70%):** +7.7 bb/100
*   *Nota: Maior rake pago geralmente correlaiona com winrates de mesa levemente menores devido à fricção, mas manteremos constantes para mostrar o upside puro do RB.*

| Perfil | Winrate Mesa | Rakeback | **Winrate Líquida** |
| :--- | :---: | :---: | :---: |
| **Jogador A (-5)** | -5.0 | +7.7 | **+2.7** |
| **Jogador B (0)** | 0.0 | +7.7 | **+7.7** |
| **Jogador C (+5)** | +5.0 | +7.7 | **+12.7** |

---

## 3. Projeções Financeiras (Mensal)

### Estrutura do Deal: Modelo Staked
*   **Bankroll:** 100% Fornecido pelo Time de Poker (Investidores).
*   **Divisão de Lucro:** 60% Time / 40% Jogador.
*   **Make-up:** Make-up padrão se aplica (perdas devem ser recuperadas antes de divisões futuras).

### Performance Individual (12k mãos)
*Valores em Colchetes são (Parte do Jogador / Parte do Time)*

*   **Jogador A (-5bb Mesa):** Total +$31 -> **Jogador: $12** | **Time: $19**
*   **Jogador B (0bb Mesa):** Total +$151 -> **Jogador: $60** | **Time: $91**
*   **Jogador C (+5bb Mesa):** Total +$271 -> **Jogador: $108** | **Time: $163**

### Totais do Time (Cenário A: Rake Padrão)
*   **Receita Líquida Mensal:** **~$453**
*   **Lucro Líquido do Time (60%):** **~$272**
*   **Pagamento Total Jogadores (40%):** **~$181**

### Totais do Time (Cenário B: Rake Alto)
*   **Receita Líquida Mensal:** **~$554**
*   **Lucro Líquido do Time (60%):** **~$333**
*   **Pagamento Total Jogadores (40%):** **~$222**

---

## 4. Análise de Risco & Gestão de Bankroll

### Parâmetros de Volatilidade
*   **Desvio Padrão (SD):** 100 bb/100
*   **Stop Loss:** -4 Buy-ins (400bb) por dia por jogador para prevenir tilt e sessões catastróficas.

### Requisitos de Bankroll (<1% Risco de Ruína)
Calculado usando o Critério de Kelly para Risco de Ruína:
$$ B = -\frac{\sigma^2}{2\mu} \ln(R) $$

#### 1. Requisitos de Capital do Time (Risco do Investidor)
Como o Time fornece 100% do bankroll para os 3 jogadores, tratamos a operação como um portfólio único.
*   **Winrate Líquida do Time:** +18.9 bb/100 (Combinado)
*   **Variância do Time:** $\sqrt{3} \times 100 \approx 173$ bb/100
*   **Buy-ins Necessários:** ~37 BIs (Critério de Kelly para <1% Risco de Ruína)
*   **Fundo Recomendado:** **$1,000 (50 Buy-ins)**
    *   *Alocação:* O fundo de $1,000 cobre a variância de todos os 3 jogadores simultaneamente.
    *   *Estratégia de Recarga:* Se o fundo cair abaixo de $500 (25 BIs), investidores devem estar preparados para aportar.

#### 2. Perfil de Risco do Jogador
*   **Risco Financeiro:** $0.00 (Totalmente Bancado).
*   **Risco de Ruína:** Nenhum (Jogadores não perdem seu próprio dinheiro).
*   **Protocolo de Make-up:** Jogadores em make-up (saldo negativo) devem pagar a dívida com lucros futuros antes de receber seu corte de 40%. O make-up não reseta mensalmente.
