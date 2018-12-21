import { app, Menu, MenuItemConstructorOptions, shell } from 'electron';

import { IS_DEV_ENV, IS_MAC_OS } from '@/environment';

const editMenu: MenuItemConstructorOptions = {
  label: 'Edit',
  submenu: [
    { role: 'undo' },
    { role: 'redo' },
    { type: 'separator' },
    { role: 'cut' },
    { role: 'copy' },
    { role: 'paste' },
    { role: 'delete' },
    { role: 'selectall' },
  ],
};

const windowMenu: MenuItemConstructorOptions = {
  role: 'window',
  submenu: [
    { role: 'minimize' },
    { role: 'close' },
  ],
};

const windowMenuMacSubmenu: Menu|MenuItemConstructorOptions[] = [
  { role: 'minimize' },
  { role: 'zoom' },
  { type: 'separator' },
  { role: 'front' },
];

const helpMenu: MenuItemConstructorOptions = {
  role: 'help',
  submenu: [
    {
      label: 'Traverse Website',
      click() {
        shell.openExternal('https://traverse.site');
      },
    },
  ],
};

const fileMenu: MenuItemConstructorOptions = {
  label: 'File',
  submenu: [
    // {
    //   label: 'New Window',
    //   accelerator: 'CmdOrCtrl+N',
    //   click() {
    //     openMainWindow();
    //   }
    // },
    // {
    //   label: 'Reload',
    //   accelerator: 'CmdOrCtrl+R',
    //   click() {
    //     reloadAllWindows();
    //   }
    // },
    // { type: 'separator' },
    { role: 'close' },
  ],
};

const macTraverseAppMenu: MenuItemConstructorOptions = {
  label: app.getName(),
  submenu: [
    { role: 'about' },
    { type: 'separator' },
    { role: 'api', submenu: [] },
    { type: 'separator' },
    { role: 'hide' },
    { role: 'hideothers' },
    { role: 'unhide' },
    { type: 'separator' },
    { role: 'quit' },
  ],
};

const developerMenu = {
  label: 'Developer',
  submenu: [
    { role: 'toggledevtools' },
  ],
};

const template: MenuItemConstructorOptions[] = [
  editMenu,
  windowMenu,
  helpMenu,
];

if (IS_MAC_OS) {
  template.unshift(fileMenu);
  template.unshift(macTraverseAppMenu);
  const windowMenuKey = findKey(template, (menuItem: MenuItemConstructorOptions) => menuItem.role === 'window');
  template[windowMenuKey].submenu = windowMenuMacSubmenu;
}

if (IS_DEV_ENV) {
  template.push(developerMenu);
}

function findKey(object, predicate) {
  let result;
  if (object == null) {
    return result;
  }
  Object.keys(object).some((key) => {
    const value = object[key];
    if (predicate(value, key, object)) {
      result = key;
      return true;
    }
  });
  return result;
}

export const fileMenuTemplate = template;
