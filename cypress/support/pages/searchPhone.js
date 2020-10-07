class searchPhonePage {
  constructor() {
    this.searchButton = ".waves-effect.dnavigation__search-button.js-desktop-search-button";
    this.searchInput = "#myInput";
    this.inputButton = ".button";

    this.divPrice = ".price-installments";
    this.divBuyOptions = "#movistar-buy-options-container";
  }

  search = (element) => {
    cy.get(this.searchButton).click();
    cy.get(this.searchInput).type(element).type("{enter}");
    cy.get(this.inputButton).click();
  };

  searchAll = (element) => {
    cy.get(this.searchButton).click();
    cy.get(this.searchInput).type(element).type("{enter}");
  };

  installments = (element) => {
    cy.get(this.divPrice).contains(element);
    cy.get(this.divBuyOptions).contains(element);
  };
}

export default new searchPhonePage();
