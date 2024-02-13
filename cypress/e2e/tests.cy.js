describe("Testing Morning News website", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("Visit Homepage", () => {
    cy.wait(2000);
    cy.contains("Morning News");
  });

  it("Check date to be equal today", () => {
    cy.get('.Header_date__qfgIk').invoke('text'). then((actualDateText) => {
      const dayjs = require('dayjs');
      const todaysDate = new Date();
      const parsedDate = dayjs(todaysDate);
      const formattedDate = parsedDate.format('MMM D[th] YYYY');
      expect(actualDateText).to.equal(formattedDate);
    });
  }); 

  it("loginandlogout", () => {
    cy.get('svg.svg-inline--fa.fa-user.Header_userSection__U8YyE').click();
    cy.get('#signInUsername').type("obada");
    cy.get('#signInPassword').type("obada");
    cy.get('#connection').click();
    cy.contains("Welcome obada")
    cy.wait(2000);
    cy.get('button').click();
    cy.get('svg.svg-inline--fa.fa-user.Header_userSection__U8YyE').click();
    cy.contains("Connect");
  });

  it("badpassword", () => {
    cy.get('svg.svg-inline--fa.fa-user.Header_userSection__U8YyE').click();
    cy.get('#signInUsername').type("obada");
    cy.get('#signInPassword').type("other");
    cy.get('#connection').click();
    cy.wait(2000);
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
    cy.contains("Welcome ophelie")
  });
});

describe("Testing Articles and Bookmarks", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
    cy.get('svg.svg-inline--fa.fa-user.Header_userSection__U8YyE').click();
    cy.get('#signInUsername').type("obada");
    cy.get('#signInPassword').type("obada");
    cy.get('#connection').click();
    cy.wait(2000);
    });

  it("Top article existence", () => {
    cy.get('.TopArticle_topText__rDOeH')
      .should("exist")
  });

  it("Count articles", () => {
    const length = 9
    cy.get('svg.svg-inline--fa.fa-eye-slash.Article_hideIcon__gqvdZ')
      .should("have.length", length)
  });

  it("Add articles to bookmarks and visit bookmarks", () => {
    cy.get(':nth-child(1) > .Article_articleHeader__z8QZl > .fa-bookmark > path').click();
    cy.get('.Header_linkContainer__hNrE8 > :nth-child(2)').click();
    cy.get(':nth-child(1) > .Article_articleHeader__z8QZl').should('exist');
  });

  it("Remove articles to bookmarks", () => {
    cy.get(':nth-child(1) > .Article_articleHeader__z8QZl > .fa-bookmark > path').click();
    cy.get('.Header_linkContainer__hNrE8 > :nth-child(2)').click();
    cy.get(':nth-child(1) > .Article_articleHeader__z8QZl > .svg-inline--fa > path').click();
    cy.contains("No article");
  });


  it("Hide articles", () => {
    const length = 9
    cy.get(':nth-child(1) > .Article_articleHeader__z8QZl > h3').eq(0).invoke('text').as('title1');
    cy.get(':nth-child(1) > .Article_articleHeader__z8QZl > .fa-eye-slash').click();
    cy.get(':nth-child(1) > .Article_articleHeader__z8QZl > h3').eq(0).invoke('text').as('title2');
    cy.get('@title2').should('not.eq', '@title1')
    cy.get('svg.svg-inline--fa.fa-eye-slash.Article_hideIcon__gqvdZ')
      .should("have.length", length - 1)
  });
});