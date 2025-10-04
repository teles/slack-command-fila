/**
 * Arquivo principal do Google Apps Script para o bot de fila do Slack
 */

/**
 * Função principal que processa requisições HTTP do Slack
 * @param e - Evento HTTP recebido do Slack
 * @returns Resposta para o Slack
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
function doPost(
  _e: GoogleAppsScript.Events.DoPost
): GoogleAppsScript.Content.TextOutput {
  try {
    // TODO: Processar payload do Slack
    // const payload = JSON.parse(e.postData.contents);

    // Processar comando do Slack aqui
    const response = {
      response_type: 'in_channel',
      text: 'Bot de fila configurado com sucesso! 🎉',
    };

    return ContentService.createTextOutput(
      JSON.stringify(response)
    ).setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    Logger.log('Erro ao processar requisição:', error);

    return ContentService.createTextOutput(
      JSON.stringify({
        response_type: 'ephemeral',
        text: 'Erro interno do servidor. Tente novamente mais tarde.',
      })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * Função de teste para verificar se o script está funcionando
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
function testBot(): void {
  Logger.log('Script do bot de fila funcionando corretamente!');
}
