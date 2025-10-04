# slack-command-fila

MVP de bot de fila para Slack com integração via Google Sheets.

## Tecnologias

- **Google Apps Script** - Plataforma de execução
- **TypeScript** - Linguagem de programação
- **Clasp** - CLI para desenvolvimento local
- **ESLint** - Linter de código
- **Prettier** - Formatação de código
- **Jest** - Framework de testes
- **Husky** - Git hooks
- **GitHub Actions** - CI/CD

## Estrutura do Projeto

```
├── src/
│   ├── __tests__/           # Testes unitários
│   │   ├── setup.ts         # Configuração dos mocks
│   │   └── index.test.ts    # Testes principais
│   ├── index.ts             # Arquivo principal
│   └── appsscript.json      # Configuração do Google Apps Script
├── .github/workflows/       # GitHub Actions
├── .husky/                  # Git hooks
├── dist/                    # Arquivos compilados
├── coverage/                # Relatórios de cobertura
└── ...configurações
```

## Comandos Disponíveis

### Desenvolvimento
```bash
npm run build         # Compila TypeScript
npm run dev           # Watch mode do Clasp
npm run push          # Push para Google Apps Script
npm run pull          # Pull do Google Apps Script
npm run deploy        # Deploy da aplicação
```

### Qualidade de Código
```bash
npm run lint          # Executa ESLint
npm run lint:fix      # Corrige problemas do ESLint
npm run format        # Formata código com Prettier
npm run format:check  # Verifica formatação
```

### Testes
```bash
npm test              # Executa testes
npm run test:watch    # Executa testes em watch mode
npm run test:coverage # Executa testes com cobertura
```

## Configuração Inicial

1. **Clone o repositório**:
   ```bash
   git clone <repository-url>
   cd slack-command-fila
   ```

2. **Instale as dependências**:
   ```bash
   npm install
   ```

3. **Configure o Google Apps Script**:
   ```bash
   clasp login
   clasp create --type webapp --title "Slack Command Fila"
   ```

4. **Atualize o .clasp.json** com o ID do script gerado

5. **Deploy inicial**:
   ```bash
   npm run build
   npm run push
   npm run deploy
   ```

## Configuração do Slack

1. Crie um Slack App em https://api.slack.com/apps
2. Configure o Slash Command apontando para a URL do Google Apps Script
3. Adicione as permissões necessárias
4. Instale o app no workspace

## CI/CD

O projeto inclui GitHub Actions que executam automaticamente:

- **Lint e Formatação** - Verifica qualidade do código
- **Build** - Compila TypeScript
- **Testes** - Executa testes unitários com cobertura
- **Auditoria de Segurança** - Verifica vulnerabilidades

## Desenvolvimento

### Pre-commit Hooks

O projeto usa Husky para executar verificações antes de cada commit:
- ESLint (com correção automática)
- Prettier (formatação)
- Testes unitários dos arquivos modificados

### Mocks para Testes

Os testes incluem mocks completos para:
- `ContentService` do Google Apps Script
- `Logger` do Google Apps Script
- Eventos de requisição HTTP do Slack

## Estrutura de Commits

O projeto segue commits semânticos em português brasileiro:

- `chore:` - Configurações e tarefas de manutenção
- `feat:` - Novas funcionalidades
- `fix:` - Correções de bugs
- `test:` - Adição ou modificação de testes
- `ci:` - Configurações de CI/CD
- `docs:` - Documentação

## Licença

MIT
