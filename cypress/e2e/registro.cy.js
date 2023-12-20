import { user } from '../fixtures/userFake'

describe('Registro', () => {
  it('Registrar novo usuário com sucesso', () => {
    cy.registro(user.fakerFirstName, user.fakerEmailAddress, user.fakerPassword)
    cy.contains('Usuário inserido com sucesso').should('be.visible')
  })

  it('Registrar novo usuário com falha email já cadastrado', () => {
    cy.registro(user.name, user.emailAddress, user.password)
    cy.contains('Endereço de email já utilizado').should('be.visible')
  })
})