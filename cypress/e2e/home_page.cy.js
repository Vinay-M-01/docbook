describe('Passwordless Login Test', () => {
  const email = 'testuser@example.com';
  const signInLink = 'http://localhost:3000/?signInLink=mock-sign-in-link';

  beforeEach(() => {
    cy.visit('/');
  });

  it('sends a login email', () => {
    // Mock the sendSignInLinkToEmail API call before triggering the request
    cy.intercept('POST', '**/sendSignInLinkToEmail', {
      statusCode: 200,
      body: { success: true }
    }).as('sendSignInLinkToEmail');

    // Open the login modal
    cy.get('.home-right > .home-book').click();

    // Enter email and submit
    cy.get('input[type="email"]').type(email);
    cy.get('button[type="submit"]').contains('Login').click();

    // Wait for the mocked request to complete
    cy.wait('@sendSignInLinkToEmail');

    // Store the email in localStorage as done in the app
    cy.window().then((win) => {
      win.localStorage.setItem('email', email);
    });

    // Verify the info message is displayed
    cy.contains('We have sent you an email with a link to sign in').should('be.visible');
  });

  it('logs in via email link', () => {
    // Simulate visiting the sign-in link
    cy.visit(signInLink);

    // Mock the isSignInWithEmailLink API call to return true
    cy.intercept('POST', '**/isSignInWithEmailLink', (req) => {
      req.reply((res) => {
        res.send({
          statusCode: 200,
          body: true,
        });
      });
    }).as('isSignInWithEmailLink');

    // Mock the signInWithEmailLink API call
    cy.intercept('POST', '**/signInWithEmailLink', (req) => {
      req.reply((res) => {
        res.send({
          statusCode: 200,
          body: { user: { email } },
        });
      });
    }).as('signInWithEmailLink');

    // Simulate email prompt
    cy.window().then((win) => {
      cy.stub(win, 'prompt').returns(email);
    });

  });
});
