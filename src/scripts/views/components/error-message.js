class ErrorMessage extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <div class="error-message">
            <h2>Im Sorry, It's Looks Like There Is No Internet Connection At The Moment...<br>Maybe Try Again Later!</h2>
            <img src="./images/error-img.png" class="error-image" alt="No Internet Illustration Image">
        </div>
    `;
  }
}

customElements.define('error-message', ErrorMessage);
