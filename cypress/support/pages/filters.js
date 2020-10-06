class filterPage {
  constructor() {
    this.sortButton = "#btn-sort";
    this.dropDown = ".dropdown-menu";

    this.filterButton = "li > .btn-group > .btn-filter";
    this.filterGroup = ".filter-group";
  }

  sortFilter = (element) => {
    cy.get(this.sortButton).click();
    cy.get(this.dropDown).children().contains(element).click();
  };

  modelfilter = (element) => {
    cy.get(this.filterButton).click();
    cy.get(this.filterGroup).contains(element).click();
  };
}

export default new filterPage();
