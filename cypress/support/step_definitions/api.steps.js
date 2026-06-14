const { When, Then } = require('@badeball/cypress-cucumber-preprocessor');

let response;

When('eu envio uma requisição GET para a API do Trello', () => {
  cy.request({
    method: 'GET',
    url: 'https://api.trello.com/1/actions/592f11060f95a3d3d46a987a',
  }).then((res) => {
    response = res;
    cy.wrap(res).as('apiResponse');
  });
});

Then('o status code da resposta deve ser 200', () => {
  expect(response.status).to.eq(200);
});

Then('o campo {string} da lista deve ser exibido no log', (campo) => {
  const name = response.body.data.list.name;
  cy.log('Campo name:', name);
  expect(name).to.be.a('string').and.not.be.empty; // ← adicionar isso
});
