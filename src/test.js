class MyBanner extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  // Observe Sitecore-mapped attributes
  static get observedAttributes() {
    return ["title", "subtitle", "link", "button-text"];
  }

  connectedCallback() {
    this.render();
  }

  // Called when Sitecore updates fields (Pages / EE)
  attributeChangedCallback() {
    this.render();
  }

  disconnectedCallback() {
    // Cleanup if needed later
  }

  render() {
    const title = this.getAttribute("title") || "Default Title";
    const subtitle = this.getAttribute("subtitle") || "Default subtitle";
    const link = this.getAttribute("link") || "#";
    const buttonText = this.getAttribute("button-text") || "Learn more";

    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
        }

        .banner {
          padding: 24px;
          background: #f4f6f8;
          border-radius: 8px;
          font-family: Arial, sans-serif;
          max-width: 720px;
        }

        h1 {
          margin: 0 0 8px;
          font-size: 24px;
          color: #222;
        }

        .subtitle {
          margin: 0 0 12px;
          font-size: 16px;
          color: #555;
        }

        .static-text {
          font-size: 14px;
          color: #777;
          margin-bottom: 16px;
          line-height: 1.5;
        }

        a.button {
          text-decoration: none;
          padding: 10px 16px;
          background: #0070f3;
          color: #fff;
          border-radius: 4px;
          display: inline-block;
          font-size: 14px;
        }

        a.button:hover {
          background: #0059c1;
        }
      </style>

      <div class="banner">
        <h1>${title}</h1>
        <p class="subtitle">${subtitle}</p>

        <!-- Static content -->
        <p class="static-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
        </p>

        <a class="button" href="${link}">
          ${buttonText}
        </a>
      </div>
    `;
  }
}

// Register the custom element
customElements.define("my-banner", MyBanner);
