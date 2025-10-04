/**
 * Testes unitários para o projeto Google Apps Script
 */

describe('Google Apps Script - Slack Bot', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('Configuração do ambiente', () => {
    it('deve ter ContentService disponível', () => {
      expect(ContentService).toBeDefined();
      expect(ContentService.createTextOutput).toBeDefined();
      expect(ContentService.MimeType.JSON).toBe('application/json');
    });

    it('deve ter Logger disponível', () => {
      expect(Logger).toBeDefined();
      expect(Logger.log).toBeDefined();
    });

    it('deve conseguir criar resposta JSON', () => {
      // Arrange
      const response = {
        response_type: 'in_channel',
        text: 'Bot de fila configurado com sucesso! 🎉',
      };

      // Act
      const result = ContentService.createTextOutput(JSON.stringify(response));

      // Assert
      expect(ContentService.createTextOutput).toHaveBeenCalledWith(
        JSON.stringify(response)
      );
      expect(result.setMimeType).toBeDefined();
    });

    it('deve conseguir fazer log de mensagens', () => {
      // Arrange
      const message = 'Script do bot de fila funcionando corretamente!';

      // Act
      Logger.log(message);

      // Assert
      expect(Logger.log).toHaveBeenCalledWith(message);
    });
  });

  describe('Processamento de eventos mock', () => {
    it('deve ter evento mock configurado corretamente', () => {
      // Arrange
      const mockEvent = (globalThis as any).mockDoPostEvent;

      // Assert
      expect(mockEvent).toBeDefined();
      expect(mockEvent.postData).toBeDefined();
      expect(mockEvent.postData.contents).toBeDefined();

      const payload = JSON.parse(mockEvent.postData.contents);
      expect(payload.command).toBe('/fila');
      expect(payload.text).toBe('help');
    });
  });
});