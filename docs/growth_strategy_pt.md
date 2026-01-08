# Estratégia de Crescimento & Expansão

## 1. Protocolo de Escalabilidade (Simulação)
Criamos um script de simulação customizado (`calculate_scenarios.ts`) para modelar o crescimento futuro. Este cenário assume que o time expande para limites maiores com volume aumentado.

*   **Local do Script:** `calculate_scenarios.ts`
*   **Como Rodar:** `npx ts-node calculate_scenarios.ts`

### Cenário: Expansão Futura (Scale-Up)
**Premissas:**
*   **NL20:** 2 Jogadores (Juniors) jogando 20k mãos/mês (1 bb WR).
*   **NL60:** 3 Jogadores (Seniors) jogando 15k mãos/mês (2 bb WR).
*   **NL100:** 2 Jogadores (Capitães) jogando 12k mãos/mês (3 bb WR).

**Resultados Mensais Projetados:**

| Grupo | Contagem | Stake | Vol/Jogador | Mesa WR | Liq WR | Rev Grupo |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: |
| **Junior** | 2 | NL20 | 20,000 | 1 bb | 8.0 bb | **$640** |
| **Senior** | 3 | NL60 | 15,000 | 2 bb | 7.9 bb | **$2,146** |
| **Captain** | 2 | NL100 | 12,000 | 3 bb | 7.9 bb | **$1,896** |

**Financeiro Total do Time:**
*   **Volume Mensal Total:** 109,000 mãos
*   **Receita Líquida Total:** ~$4,682
*   **Lucro do Time (60%):** **~$2,809 / mês**
*   **Pagamento Jogadores (40%):** ~$1,873 / mês

---

## 2. Expansão de Negócios & Fontes de Renda (Ecossistema)
Além das mesas, o projeto visa diversificar a receita comercializando nossas ferramentas internas e expertise, criando um Ecossistema de Poker coeso.

### 2.1 Plataforma SaaS MDA (Mercado Global)
**Conceito:** Uma plataforma baseada em assinatura democratizando o acesso a Análise de Dados em Massa de Elite, inspirada em líderes de mercado como SnapMDA.
**Valor Central:** Permitir que usuários explorem tendências da população sem precisar de hardware de ponta ou farms de mineração privados.
**Funcionalidades:**
*   **Banco de Dados Massivo:** Acesso a dados processados de milhões de mãos (mineradas via nossa VM).
*   **Leak Finder:** Visualização de desvios GTO da população (ex: "Pool underbluffa River em Pote 3bet").
*   **Remoção de Viés:** Algoritmos para corrigir a força da mão sem showdown.
*   **Modelo de Receita:** Assinatura mensal (SaaS) para acesso a filtros de dados e relatórios de tendência.

### 2.2 Solver & Treinamento Localizado (Mercado Brasileiro)
**Problema:** Ferramentas principais (PioSolver, GTO Wizard) são precificadas em USD, tornando-as proibitivas para o mercado brasileiro devido à taxa de câmbio.
**Solução:** Uma plataforma Solver e Trainer "Tropicalizada" precificada em BRL (Real).
**Inovação: Trainer de Leitura de Range Realista**
*   **Mecanismo:** Diferente de trainers padrão, o usuário deve inputar *sua percepção* do range do vilão em um ponto de decisão.
*   **Feedback Loop:** O sistema compara o input do usuário vs. Dados Reais da População (MDA) + Linha de base GTO.
*   **Ciclo:** Usamos nossos próprios jogadores do time como beta testers (dogfooding) para refinar o realismo dos cenários.

### 2.3 Ecossistema de Gestão de Times (SaaS B2B)
**Conceito:** Um ERP abrangente para Times de Poker e Stables.
**Módulos:**
*   **Gestão:** Tracking financeiro, gestão de deals, cálculos automatizados de make-up.
*   **Agendamento:** Sistema de reserva para coaching, sessões de estudo e blocos de grind.
*   **Integração:** Conectado perfeitamente com a Plataforma de Treino (2.2) para rastrear progresso do aluno e histórico de estudo.
**Objetivo:** Criar uma plataforma unificada onde um Gerente pode rastrear o volume, resultados E hábitos de estudo de um jogador em um único dashboard.
