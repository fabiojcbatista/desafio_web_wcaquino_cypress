import { user } from '../fixtures/userFake'

describe('Login', () => {
  it('Fazer login com sucesso', () => {
    cy.login(user.emailAddress, user.password)
    cy.contains(`Bem vindo, ${user.name}`).should('be.visible')
  })

  it('Fazer login com falha', () => {
    cy.login(user.fakerEmailAddress, user.fakerPassword)
    cy.contains(`Problemas com o login do usuárioo`).should('be.visible')
  })
})