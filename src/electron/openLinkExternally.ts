import { shell } from 'electron';

export const openLinkExternally = (event) => {
  let href;
  let isExternal = false;

  const checkDomElement = (element: Element) => {
    if (element.nodeName === 'A') {
      href = element.getAttribute('href');
    }
    if (element.classList.contains('open-link-externally')) {
      isExternal = true;
    }
    if (href && isExternal) {
      shell.openExternal(href);
      event.preventDefault();
    } else if (element.parentElement) {
      checkDomElement(element.parentElement);
    }
  };

  checkDomElement(event.target);
};
