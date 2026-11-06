// OOP _ Form For Understanding oop concepts
//-- Step 1 : UIElement
class UIElement {
    id;
    constructor(id) {
        this.id = id;
    }
}
//-- Step 2 : Input
class Input extends UIElement {
    type;
    placeholder;
    constructor(id, type, placeholder) {
        super(id);
        this.type = type;
        this.placeholder = placeholder;
    }
    render() {
        return `<input id='${this.id}' type="${this.type}"name='${this.id}'placeholder="${this.id}"  style="
      width: 100%;
      padding: 12px 16px;
      border: 1px solid #d1d5db;
      border-radius: 8px;
      font-size: 14px;
      outline: none;
      box-sizing: border-box;
    "/>`;
    }
}
//-- Step 3 : Button
class Button extends UIElement {
    label;
    constructor(id, label) {
        super(id);
        this.label = label;
    }
    render() {
        return `<button  style="
      padding: 12px 24px;
      background-color: #2563eb;
      color: white;
      border: none;
      border-radius: 8px;
      font-size: 16px;
      font-weight: 600;
      cursor: pointer;
    " id='${this.id}'> ${this.label}</button>`;
    }
}
//--step 4 Form
class Form extends UIElement {
    children = [];
    appnedChild(child) {
        this.children.push(child);
    }
    render() {
        const childrenElement = this.children.map(child => child.render()).join('\n ');
        return `<form  style="
     width:300px;
      display: flex;
      flex-direction: column;
      gap: 16px;
      padding: 20px;
      border-radius: 8px;
      background-color: #f9fafb;
    " id="${this.id}">\n ${childrenElement} \n</form>`;
    }
}
//--step 5 Test Code
const nameInput = new Input('name', 'text', 'Enter your name');
const emailInput = new Input('email', 'email', 'Enter your email');
const passwordInput = new Input('password', 'password', 'Enter your password');
const loginButton = new Button('login', 'Login');
const fromElement = new Form('login-form');
fromElement.appnedChild(nameInput);
fromElement.appnedChild(passwordInput);
fromElement.appnedChild(emailInput);
fromElement.appnedChild(loginButton);
console.log(fromElement.render());
// console.log(emailInput.render())
// console.log(loginButton.render())
//--step 6 Connect to html
const rootElement = document.getElementById('root');
if (rootElement) {
    rootElement.innerHTML = fromElement.render();
}
export {};
