class StaticAlert extends HTMLElement {
  constructor() {
    super();
    // Directly setting content without any variables
    this.innerHTML = `
      <div style="background: yellow; border: 1px solid black; padding: 10px;">
        <strong>Notice:</strong> This is a static web component.
      </div>
    `;
  }
}

// Register the tag. The name MUST have a hyphen.
customElements.define('static-alert', StaticAlert);
