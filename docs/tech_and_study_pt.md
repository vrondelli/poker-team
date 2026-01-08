# Tecnologia & Metodologia de Estudo (Vantagem Guiada por Dados)

Para garantir vantagem competitiva contínua e adaptação dinâmica ao field, o time adotará uma abordagem guiada por dados e estudos estruturados, utilizando ferramentas avançadas de análise e simulação.

## 1. Coleta Massiva de Dados (24/7)
Uma Máquina Virtual (VM) dedicada será implementada, operando 24 horas por dia, com os seguintes objetivos:
*   **Captura Automatizada:** Capturar mãos jogadas pelo field usando Hand2Note (H2N).
*   **Banco de Dados:** Armazenamento contínuo de dados para construir uma base estatística robusta.
*   **Monitoramento de Tendências:** Monitoramento de tendências da população por limite, posição e ação.

**Benefícios:**
*   Identificação de leaks recorrentes do field.
*   Ajustes explorativos baseados em dados reais.
*   Redução da dependência exclusiva de GTO puro em ambientes altamente exploráveis.

## 2. Análise Estatística com Hand2Note (H2N)
O H2N será usado para:
*   Análise de stats de HUD da população.
*   Criação de filtros específicos (ex: overfold em potes 3-bet, underbluff em rivers).
*   Comparação entre a performance do time vs. field.
*   Construção de relatórios de tendência semanais e mensais.

**Outputs Esperados:**
*   Ranges explorativos ajustados por limite.
*   Frequências ideais de bluff/valor contra o field.
*   Priorização de spots de EV mais alto.

## 3. Estudos Avançados com Pio Solver
O Pio Solver será usado como ferramenta de referência teórica (linha de base GTO), permitindo:
*   Simulação de spots críticos identificados via H2N.
*   Comparação entre decisões do field, do time e soluções GTO.
*   Criação de simplificações estratégicas aplicáveis ao jogo real.

**Fluxo de Estudo:**
1.  **Identificação:** Identificar spots críticos via dados H2N.
2.  **Modelagem:** Modelar o spot no Pio Solver.
3.  **Extração:** Extrair heurísticas práticas.
4.  **Aplicação:** Aplicar aos ranges e linhas explorativas.

## 4. Estrutura de Estudo do Time
*   **Estudos Semanais:** Análise de spots recorrentes + revisão de dados da população.
*   **Estudos Individuais:** Foco em leaks pessoais detectados via H2N.
*   **Base de Conhecimento:** Armazenamento centralizado de Ranges Ajustados, Scripts de Estudo, Prints de Soluções Pio e Notas Estratégicas.

## 5. Objetivo Estratégico do Sistema de Estudo
O objetivo final não é apenas jogar "corretamente", mas sim:
*   **Explorar** o field sistemática e mensuravelmente.
*   Criar um ciclo contínuo de **Coleta → Análise → Ajuste → Execução**.
*   Manter o time sempre à frente da adaptação do field, mesmo em ambientes de rake alto.
