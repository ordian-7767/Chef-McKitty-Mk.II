class JumboTron extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="jumbotron">
      <picture width="800" height="450">
        <source media="(max-width: 600px)" srcset="./images/heros/hero-image_2-small.jpg">
        <img class="hero-image skeleton-image skeleton-effect-fade" src="./images/heros/hero-image_2-large.jpg" alt="Hero Image">
      </picture>
      <div class="jumbotron-inner">
        <img width="300" height="300" src="./images/jumbo-image.png" alt="Chef McKitty the Cat">
        <h1 tabindex="0" class="jumbotron-title">Chef McKitty Here Will Help You Find Restaurants!</h1>
      </div>
    </div>
    `;
  }
}

customElements.define('jumbo-tron', JumboTron);
