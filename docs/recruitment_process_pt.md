# Time de Poker - Processo de Recrutamento e Seleção

## 1. Estratégia de Captação de Jogadores – Projeto de Time de Poker

Nossa estratégia de captação de talentos é baseada em seleção ativa por habilidade cognitiva e perfil analítico, inspirada diretamente na lógica do poker.

Desenvolvemos um **Puzzle lógico**, com mecânicas semelhantes às tomadas de decisão do poker (raciocínio lógico, análise de informação incompleta, pensamento probabilístico e tomada de decisão sob pressão). Esse Puzzle funciona como primeiro filtro natural, atraindo apenas candidatos com perfil compatível com o jogo e com o projeto.

### Roteiro da Captação

Serão distribuídos cartazes físicos em pontos estratégicos:
*   **UNICAMP** – região do Ciclo Básico, focando alunos de exatas (perfil analítico e matemático);
*   **Barão Geraldo** (bares e locais de grande circulação);
*   Região próxima à universidade, com alta concentração de jovens universitários.

**O cartaz contém:**
*   Uma chamada instigante ligada à lógica, desafio e poker;
*   Um QR Code que direciona para o site do Puzzle;
*   Informações iniciais sobre o projeto do time de poker e a dinâmica de seleção.

**O candidato interessado acessa o site, resolve o Puzzle e, ao final:**
*   Demonstra engajamento, capacidade lógica e interesse real;
*   Avança para as próximas etapas da dinâmica de seleção.

### Diferenciais da Estratégia
*   **Auto-seleção inteligente:** só avança quem realmente tem interesse e perfil.
*   **Baixo custo de aquisição de talento**, com alto nível de filtragem inicial.
*   **Alinhamento com o poker moderno**, que exige cada vez mais lógica, estudo e pensamento estratégico.
*   **Forte apelo ao público universitário** de alto potencial, especialmente alunos de exatas.

---

## 2. O Pipeline de Seleção

1.  **A Avaliação Digital (O Puzzle):**
    *   Candidatos devem passar no jogo "3 Noites no Cofre" para provar flexibilidade cognitiva.
    *   *Nota:* Isso vem *antes* de enviar currículo/gráfico, para filtrar pela inteligência bruta primeiro.

2.  **Histórico Competitivo:**
    *   **Requisito:** Deve demonstrar rank "Intermediário Superior" ou maior em *qualquer* jogo competitivo (ex: LoL Diamond+, Xadrez 1500+, Magic Mythic).
    *   **Opção Poker:** Um gráfico de Poker é aceito mesmo se **levemente perdedor** (até -5 bb/100), desde que o volume seja consistente.
    *   *Objetivo:* Prova de "drive" competitivo e habilidade de aprender meta-games.

3.  **Fase "Estudar e Provar":**
    *   **Contexto:** Aceitamos candidatos desde *Zero Experiência* até *jogadores com noção teórica*. Fornecemos material de estudo.
    *   **A Tarefa:** O candidato estuda nosso material e escolhe **UM** método de avaliação:
        *   **Opção A (O Grinder):** Atingir **>80% de Score** no GTO Wizard Pre-flop Trainer (Verificado via print/tela compartilhada).
        *   **Opção B (O Pensador):** Uma **Revisão Técnica Ao Vivo** de 45 minutos discutindo lógica e processo de pensamento.
    *   *Objetivo:* Provar habilidade de estudar e aplicar conceitos (Plasticidade Mental).

4.  **Período de Testes (O "Grind"):**
    *   Período probatório de 1 Mês.
    *   Objetivos: Consistência de volume, qualidade da comunicação e participação nos estudos.

---

## 3. A Avaliação Digital: "3 Noites no Cofre"
O processo de recrutamento é exclusivamente digital. Candidatos enfrentarão uma **Sessão Cronometrada**.

**Fluxo do Jogo:**
1.  **O Manual (Regras):** O candidato lê as mecanicas do Guardião.
2.  **A Ação (3 Noites):** O jogo começa. Deve-se resolver 3 cenários em sequência (Funil).
3.  **Restrições:**
    *   **Sem Pausa:** Jogo contínuo.
    *   **Time Bank:** **60 Segundos** por Noite para decidir.
    *   **Input:** Checkbox com os itens restantes (Funilando o Range) e perguntas de probabilidade.

### Fase 1: O Manual (Tabela de Loot e Mecânicas)
*Antes do jogo começar, o candidato recebe as regras:*
*   **Tabela de Loot (Itens):** Diamante (Valor Máximo), Platina (Valor Alto), Ouro (Valor Alto), Prata (Valor Médio), Pedra (Sem Valor).
*   **Mecânica A (Agressividade):** O Guardião Bloqueia ou Ataca *apenas* com Valor Alto (Diamante/Platina/Ouro) ou quando finge com Pedra. Ele *nunca* ataca com Valor Médio (Prata).
*   **Mecânica B (Padrões):** Valor Alto (Diamante/Ouro) *sempre* Atacam ou Bloqueiam. **Platina é Preguiçoso:** *sempre* Bloqueia, mas *nunca* Ataca. Pedras fingem ataque *as vezes*.
*   **Mecânica C (Clima):** O Guardião fica FORA na chuva *apenas* se tiver itens à prova d'água (Diamante ou Ouro). Ele entra com Prata, Platina ou Pedra.
*   **Mecânica D (Som):** Som de "Clique" apenas com itens Metálicos (Ouro/Prata/Platina).

### Fase 2: A Ação (As 3 Noites)

#### Noite 1: O Filtro Binário (Range Linear)
*   **Ação:** O Guardião **BLOQUEIA** a porta.
*   **Lógica do Candidato:** "Manual diz 'Nunca age agressivo com Médio'. Prata é Médio. Fora."
*   **Resposta Necessária:** [Diamante, Platina, Ouro, Pedra]
*   **Habilidade:** Range Capado vs. Descapado.

#### Noite 2: O Shift de Frequência (Pensamento Bayesiano)
*   **Ação:** O Guardião **ATACA**.
*   **Info Extra:** "Hoje, ele finge com Pedras **50%** das vezes. (Valor Alto ataca 100%)"
*   **Lógica do Candidato:**
    *   Diamante/Ouro atacam 100% (Regra).
    *   Platina (Preguiçoso) nunca ataca (Regra) -> **Eliminado**.
    *   Pedra ataca 50% (Info).
    *   Range Sobrevivente: [Diamante, Ouro, Pedra].
*   **Pergunta de Probabilidade:** "Dado o ataque, qual a chance exata de ser OURO? (Nota: Considere o Range Completo: Diamante, Ouro, Platina, Pedra)"
*   **Cálculo:**
    *   Pesos: Ouro(1) + Diamante(1) + Pedra(0.5) + Platina(0) = 2.5 Total de Combos.
    *   Chance Ouro = 1 / 2.5 = **40%**.
*   **Resposta Necessária:** [Diamante, Ouro, Pedra] + **40%**.
*   **Habilidade:** Matemática e Ponderação de Range.

#### Noite 3: As Linhas que se Cruzam (Lógica Multi-Street)
*   **Cenário:**
    1.  *Evento 1:* Começa a **CHOVER**. Guardião fica FORA.
    2.  *Evento 2:* Ouve-se um **CLIQUE**.
*   **Lógica do Candidato:**
    *   *Regra da Chuva:* Deve ser à prova d'água (Diamante, Ouro). -> Range: [Diamante, Ouro]. (Pedra e Prata entrariam).
    *   *Regra do Clique:* Deve ser Metálico (Ouro, Prata, Platina).
    *   *Interseção:* O único item que é À Prova d'água (Fica fora) E Metálico (Clica) é o **OURO**.
    *   *Diamante* é à prova d'água mas não clica.
*   **Resposta Necessária:** [Ouro] (Score Perfeito).
*   **Habilidade:** Interseção de Ranges (O Funil).

### 3.1 Justificativa (Log Tático Obrigatório)
Na tela de resultados, há um campo obrigatório:
*   "Justifique brevemente suas decisões. **Especifique como calculou a Probabilidade da Noite 2.**"
*   Isso força o candidato a mostrar o raciocínio Bayesiano (ex: "Dividi 1 por 2.5").

---

## 4. Matriz de Avaliação
| Habilidade | Indicadores Ruins | Indicadores Fortes |
| :--- | :--- | :--- |
| **Lógica (Leitura de Range)** | Ignora pistas anteriores; Foca apenas na ação isolada. | Carrega filtros adiante (Funil); Identifica situações "Polarizadas". |
| **Dados (Estatística)** | Ignora a frequência de "50% Bluff". Chuta 25% ou 50%. | Usa frequência para ponderar resultados (Bayesiano). Chega nos 40%. |
| **Mental Game** | Desiste na ambiguidade. Não justifica a resposta. | Elimina opções sistematicamente. Preenche o Log Tático com clareza. |
