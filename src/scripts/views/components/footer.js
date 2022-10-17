class Footer extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <p tabindex="0">Copyright &copy; 2022 - Chef McKitty</p>
    `;
  }
}

customElements.define('foo-ter', Footer);
