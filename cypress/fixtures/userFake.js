import { faker } from '@faker-js/faker/locale/en'
export const user = {
  fakerFirstName: faker.person.firstName(),
  fakerLastName: faker.person.lastName(),
  fakerFullName: faker.person.fullName(),
  fakerPhoneNumber: faker.phone.number(),
  fakerPassword: faker.internet.password(),
  fakerEmailAddress: faker.internet.email(),
  emailAddress: Cypress.env('USER_EMAIL'),
  password: Cypress.env('USER_PASSWORD'),
  name: Cypress.env('USER_NAME')
}