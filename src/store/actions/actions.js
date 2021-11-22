const select = (id)=> {
  return {
    type: 'SELECT',
    payload: id
  };
};

const trashSelect = (id)=> {
  return {
    type: 'TRASH_SELECT',
    payload: id
  };
};

const add = (entry)=> {
  return {
    type: 'ADD',
    payload: entry
  };
};

const remove = (id)=> {
  return {
    type: 'REMOVE',
    payload: id
  };
};

const restore = (id)=> {
  return {
    type: 'RESTORE',
    payload: id
  };
};

export {select, trashSelect, add, remove, restore}