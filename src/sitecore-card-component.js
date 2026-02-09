/**
 * Simple Card Web Component for Sitecore BYOC
 * Usage: <sitecore-card title="..." description="..." image="..." link="..."></sitecore-card>
 */

class SitecoreCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  static get observedAttributes() {
    return ['title', 'description', 'image', 'link', 'button-text'];
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback() {
    this.render();
  }

  render() {
    const title = this.getAttribute('title') || 'Card Title';
    const description = this.getAttribute('description') || 'Card description goes here.';
    const image = this.getAttribute('image') || '';
    const link = this.getAttribute('link') || '#';
    const buttonText = this.getAttribute('button-text') || 'Learn More';

    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
        }

        .card {
          background: #ffffff;
          border-radius: 8px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          overflow: hidden;
          transition: transform 0.2s, box-shadow 0.2s;
          max-width: 400px;
        }

        .card:hover {
          transform: translateY(-4px);
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
        }

        .card-image {
          width: 100%;
          height: 200px;
          object-fit: cover;
          display: block;
        }

        .card-image.placeholder {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        }

        .card-content {
          padding: 24px;
        }

        .card-title {
          margin: 0 0 12px 0;
          font-size: 24px;
          font-weight: 600;
          color: #1a202c;
        }

        .card-description {
          margin: 0 0 20px 0;
          font-size: 16px;
          line-height: 1.6;
          color: #4a5568;
        }

        .card-button {
          display: inline-block;
          padding: 12px 24px;
          background-color: #667eea;
          color: white;
          text-decoration: none;
          border-radius: 4px;
          font-weight: 500;
          transition: background-color 0.2s;
        }

        .card-button:hover {
          background-color: #5a67d8;
        }
      </style>

      <div class="card">
        ${image ? `<img src="${image}" alt="${title}" class="card-image">` : '<div class="card-image placeholder"></div>'}
        <div class="card-content">
          <h3 class="card-title">${title}</h3>
          <p class="card-description">${description}</p>
          <a href="${link}" class="card-button">${buttonText}</a>
        </div>
      </div>
    `;
  }
}

// Register the custom element
customElements.define('sitecore-card', SitecoreCard);
