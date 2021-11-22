const select = (id)=> {
  return {
    type: 'SELECT',
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

export {select, add, remove, restore}