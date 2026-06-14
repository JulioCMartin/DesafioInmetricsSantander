import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('Que loguei {string} e a senha {string}', (email, senha) => {
  cy.visit('/login');
  cy.get('input[data-qa="login-email"]').type(email);
  cy.get('input[data-qa="login-password"]').type(senha);
  cy.get('button[data-qa="login-button"]').click();
});

When('Eu acesso o carrinho de compras', () => {
  cy.visit('/view_cart');
});

Then('Devo visualizar os produtos que adicionei', () => {
  cy.get('.cart_info').should('be.visible');
  cy.get('.btn.btn-default.check_out').click();
  cy.get('#cart_items').should('be.visible');
});
