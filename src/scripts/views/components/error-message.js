class ErrorMessage extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <div class="error-message">
            <h2 tabindex="0">Im Sorry, It's Looks Like There Is No Internet Connection At The Moment...<br>Maybe Try Again Later!</h2>
            <picture width="500" height="389" >
              <source type="image/webp" srcset="./images/error-img.webp">
              <source type="image/png" srcset="./images/error-img.png">
              <img class="error-image" src="./images/error-img.png" alt="No Internet Illustration Image">
            </picture>
        </div>
    `;
  }
}

customElements.define('error-message', ErrorMessage);
