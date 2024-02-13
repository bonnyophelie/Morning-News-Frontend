describe("Testing Morning News website", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("Visit Homepage", () => {
    cy.wait(2000);
    cy.contains("Morning News");
  });

  it("loginuser", () => {
    cy.get('svg.svg-inline--fa.fa-user.Header_userSection__U8YyE').click();
    cy.get('#signInUsername').type("obada");
    cy.get('#signInPassword').type("obada");
    cy.get('#connection').click();
    cy.wait(2000);
    cy.contains("Welcome obada")
  });

  it("badpassword", () => {
    cy.get('svg.svg-inline--fa.fa-user.Header_userSection__U8YyE').click();
    cy.get('#signInUsername').type("obada");
    cy.get('#signInPassword').type("other");
    cy.get('#connection').click();
    cy.wait(2000);
    cy.contains("Connect");
  });

  it("loginandlogout", () => {
    cy.get('svg.svg-inline--fa.fa-user.Header_userSection__U8YyE').click();
    cy.get('#signInUsername').type("obada");
    cy.get('#signInPassword').type("obada");
    cy.get('#connection').click();
    cy.wait(2000);
    cy.get('button').click();
    cy.get('svg.svg-inline--fa.fa-user.Header_userSection__U8YyE').click();
    cy.contains("Connect");
  });

  it("registeruser", () => {
    cy.get('svg.svg-inline--fa.fa-user.Header_userSection__U8YyE').click();
    cy.get('#signUpUsername').type("ophelie");
    cy.get('#signUpPassword').type("ophelie");
    cy.get('#register').click();
    cy.wait(2000);
    cy.get('#signInUsername').type("ophelie");
    cy.get('#signInPassword').type("ophelie");
    cy.get('#connection').click();
    cy.wait(2000);
    cy.contains("Welcome ophelie")
  });

  it("Add articles to bookmarks and visit bookmarks", () => {
    cy.get('svg.svg-inline--fa.fa-user.Header_userSection__U8YyE').click();
    cy.get('#signInUsername').type("obada");
    cy.get('#signInPassword').type("obada");
    cy.get('#connection').click();
    cy.wait(2000);
    cy.get(':nth-child(1) > .Article_articleHeader__z8QZl > .fa-bookmark > path').click();
    cy.wait(2000);
    cy.get('.Header_linkContainer__hNrE8 > :nth-child(2)').click();
    cy.get(':nth-child(1) > .Article_articleHeader__z8QZl').should('exist');
  });

  it("Remove articles to bookmarks", () => {
    cy.get('svg.svg-inline--fa.fa-user.Header_userSection__U8YyE').click();
    cy.get('#signInUsername').type("obada");
    cy.get('#signInPassword').type("obada");
    cy.get('#connection').click();
    cy.wait(2000);
    cy.get(':nth-child(1) > .Article_articleHeader__z8QZl > .fa-bookmark > path').click();
    cy.wait(2000);
    cy.get('.Header_linkContainer__hNrE8 > :nth-child(2)').click();
    cy.get(':nth-child(1) > .Article_articleHeader__z8QZl > .svg-inline--fa > path').click();
    cy.contains("No article");
  });

  it("Hide articles", () => {
    cy.get('svg.svg-inline--fa.fa-user.Header_userSection__U8YyE').click();
    cy.get('#signInUsername').type("obada");
    cy.get('#signInPassword').type("obada");
    cy.get('#connection').click();
    cy.wait(2000);
    cy.get(':nth-child(1) > .Article_articleHeader__z8QZl > h3').eq(0).invoke('text').as('title1');
    cy.get(':nth-child(1) > .Article_articleHeader__z8QZl > .fa-eye-slash').click();
    cy.wait(2000);
    cy.get(':nth-child(1) > .Article_articleHeader__z8QZl > h3').eq(0).invoke('text').as('title2');
    cy.get('@title2').should('not.eq', '@title1')
  });
});