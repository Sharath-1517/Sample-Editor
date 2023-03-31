export default class CustomBlock {
    static get toolbox() {
      return {
        title: 'Custom Block',
        icon: '<svg width="30" height="30" viewBox="24 24 24 24"><path fill="none" d="M0 0h24v24H0z"/><path d="M19 4h-4V2h-2v2H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3zM9 6h6v2H9V6zm6 12H9v-2h6v2z"/></svg>'
      };
    }
  
    constructor({ data }) {
      this.data = data;
    }
  
    render() {
      this.element = document.createElement('div');
      this.element.contentEditable = false;
      this.element.innerHTML = `<p>This is a custom block!</p>`;
      return this.element;
    }
  
    save() {
      return {
        content: this.element.innerHTML
      };
    }
  }
  