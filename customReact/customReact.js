function customRender (reactEle, container) {
    /* 
    const domElement = document.createElement(reactEle.type);
    domElement.innerHTML = reactEle.children;
    domElement.setAttribute('href', reactEle.props.href);
    domElement.setAttribute('target', reactEle.props.target);
    container.appendChild(domElement);
    */

    const domElement = document.createElement(reactEle.type);
    domElement.innerHTML = reactEle.children;
    for (const prop in reactEle.props) {
        domElement.setAttribute(prop, reactEle.props[prop]);
    }
    container.appendChild(domElement);
}

const mainContainer = document.querySelector('#root');

const reactElement = {
    type: 'a',
    props: {
        href: 'https://www.google.com',
        target: '_blank'
    },
    children: 'Click me to visit Google'
}

customRender(reactElement, mainContainer);