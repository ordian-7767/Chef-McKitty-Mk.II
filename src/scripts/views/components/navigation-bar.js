class NavigationBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <div class="logo">
          <img width="200" height="75" src="./images/logo-img.png" alt="Chef McKitty's Logo">
        </div>
    
        <div class="hamburger-button">
          <button aria-label="Side Menu Button" id="hamburgerButton">☰</button>
        </div>
    
        <ul id="navigationDrawer" class="navigation-buttons">
          <li><a href="#/">Home</a></li>
          <li><a href="#/restaurant-favorited">Favorite</a></li>
          <li><a href="https://github.com/ordian-7767" target="_blank" rel="noopener">About Us</a></li>
        </ul>
    `;
  }
}

customElements.define('navigation-bar', NavigationBar);
