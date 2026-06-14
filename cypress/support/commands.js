Cypress.Commands.add('login', (email, senha) => {
  cy.visit('/login');
  cy.get('input[data-qa="login-email"]').type(email);
  cy.get('input[data-qa="login-password"]').type(senha);
  cy.get('button[data-qa="login-button"]').click();
});