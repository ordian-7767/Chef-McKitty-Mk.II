class JumboTron extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="jumbotron">
      <div class="jumbotron-inner">
        <img src="./images/jumbo-image.png" alt="Chef McKitty the Cat">
        <h1 class="jumbotron-title">Chef McKitty Here Will Help You Find Restaurants!</h1>
      </div>
    </div>
    `;
  }
}

customElements.define('jumbo-tron', JumboTron);
