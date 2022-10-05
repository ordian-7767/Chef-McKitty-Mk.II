import DrawerInitiator from '../utils/drawer-initiator';
import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';
import './components/error-message';
import './components/page-loader';
import './components/footer';
import './components/jumbo-tron';
import './components/navigation-bar';

class App {
  constructor({ button, drawer, content }) {
    this._button = button;
    this._drawer = drawer;
    this._content = content;

    this._initialAppShell();
  }

  _initialAppShell() {
    DrawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
      content: this._content,
    });
  }

  async renderPage() {
    try {
      const url = UrlParser.parseActiveUrlWithCombiner();
      const page = routes[url];
      this._content.innerHTML = await page.render();
      await page.afterRender();

      const skipLink = document.querySelector('.skip-link');
      skipLink.addEventListener('click', (event) => {
        event.preventDefault();
        document.querySelector('#mainContent').focus();
      });
    } catch {
      this._content.innerHTML = '<error-message></error-message>';
    } finally {
      setInterval(() => {
        document.querySelector('page-loader').style.display = 'none';
      }, 3000);
    }
  }
}

export default App;
