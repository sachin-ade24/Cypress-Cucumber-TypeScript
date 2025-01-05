export class homePage {
  visitUrl(url: string) {
    return cy.visit(url, { timeout: 60000 });
  }

  verifyUrl(relevantUrl: string) {
    return cy.url().then((url) => {
      expect(url).to.include(relevantUrl);
    });
  }

  verifyTitle(expectedTitle: string) {
    cy.title().then((title) => {
      expect(title).to.be.equal(expectedTitle);
    });
  }
}

export const hp = new homePage();
