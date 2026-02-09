class MyBanner extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    const title = this.getAttribute("title") || "Default Title";
    const subtitle = this.getAttribute("subtitle") || "Default subtitle";
    const link = this.getAttribute("link") || "#";
    const buttonText = this.getAttribute("button-text") || "Learn more";

    this.shadowRoot.innerHTML = `
      <style>
        .banner {
          padding: 24px;
          background: #f4f6f8;
          border-radius: 8px;
          font-family: Arial, sans-serif;
        }
        h1 {
          margin: 0 0 8px;
          font-size: 24px;
        }
        p {
          margin: 0 0 16px;
          color: #555;
        }
        a {
          text-decoration: none;
          padding: 10px 16px;
          background: #0070f3;
          color: #fff;
          border-radius: 4px;
        }
      </style>

      <div class="banner">
        <h1>${title}</h1>
        <p>${subtitle}</p>
        <a href="${link}">${buttonText}</a>
      </div>
    `;
  }
}

customElements.define("my-banner", MyBanner);
