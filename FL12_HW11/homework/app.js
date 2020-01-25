const structure = [
    {
      'folder': true,
      'title': 'Films',
      'children': [
        {
          'title': 'Iron Man.avi'
        },
        {
          'folder': true,
          'title': 'Fantasy',
          'children': [
            {
              'title': 'The Lord of the Rings.avi'
            },
            {
              'folder': true,
              'title': 'New folder 1',
              'children': false
            }
          ]
        }
      ]
    },
    {
      'folder': true,
      'title': 'Documents',
      'children': [
        {
          'folder': true,
          'title': 'EPAM Homework answers',
          'children': null
        }
      ]
    }
];

const rootNode = document.getElementById('root');

const createFileTree = (arr) => {
  const tree = document.createElement('ul');

  for (let i = 0; i < arr.length; i++) {
    const div = document.createElement('div');
    const li = document.createElement('li');
    const icon = document.createElement('i');
    const title = document.createElement('span');

    icon.className = 'material-icons';
    if (arr[i].folder) {
      icon.innerHTML = 'folder';
      icon.classList.add('folder-icon');
    } else {
      icon.innerHTML = 'insert_drive_file';
      icon.classList.add('file-icon');
    }
    title.innerHTML = arr[i].title;
    div.className = 'tree-node';
    if (arr[i].folder) {
      div.classList.add('folder');
    }

    div.append(icon);
    div.append(title);
    li.append(div);

    if (arr[i].children) {
      const child = createFileTree(arr[i].children);
      li.append(child);
    }
    if (arr[i].folder && !arr[i].children) {
      const emptyul = document.createElement('ul');
      const emptyli = document.createElement('li');
      const empty = document.createElement('i');
      empty.innerHTML = 'Folder is empty';
      empty.className = 'empty-folder'

      emptyli.append(empty);
      emptyul.append(emptyli);
      li.append(emptyul);
    }

    tree.append(li);
  }

  return tree;
};

const folderHandler = root => {
  const folders = root.querySelectorAll('.folder');

  folders.forEach(folder => {
    let icon = folder.firstChild;
    let nest = folder.nextSibling;
    nest.style.display = 'none';

    folder.addEventListener('click', () => {
      if (icon.innerHTML === 'folder') {
        icon.innerHTML = 'folder_open';
        nest.style.display = 'block';
      } else {
        icon.innerHTML = 'folder';
        nest.style.display = 'none';
      }
    });
  });
}

const tree = createFileTree(structure);
rootNode.append(tree);
folderHandler(rootNode);