/**
 * Setup de testes Jest para Google Apps Script
 */

// Mock global do Google Apps Script
const mockGoogleAppsScript = {
  ContentService: {
    createTextOutput: jest.fn().mockReturnValue({
      setMimeType: jest.fn().mockReturnThis(),
    }),
    MimeType: {
      JSON: 'application/json',
    },
  },
  Logger: {
    log: jest.fn(),
  },
};

// Adiciona mocks ao escopo global
(globalThis as any).ContentService = mockGoogleAppsScript.ContentService;
(globalThis as any).Logger = mockGoogleAppsScript.Logger;

// Mock das funções do Google Apps Script
(globalThis as any).doPost = jest.fn();
(globalThis as any).testBot = jest.fn();

// Mock para eventos do Google Apps Script
(globalThis as any).mockDoPostEvent = {
  postData: {
    contents: JSON.stringify({
      token: 'test-token',
      team_id: 'T123456',
      team_domain: 'test-team',
      channel_id: 'C123456',
      channel_name: 'test-channel',
      user_id: 'U123456',
      user_name: 'test-user',
      command: '/fila',
      text: 'help',
      response_url: 'https://hooks.slack.com/commands/123/456',
    }),
  },
};

// Teste básico para garantir que o setup está funcionando
describe('Setup Tests', () => {
  it('deve configurar mocks corretamente', () => {
    expect(ContentService).toBeDefined();
    expect(Logger).toBeDefined();
    expect((globalThis as any).mockDoPostEvent).toBeDefined();
  });
});
