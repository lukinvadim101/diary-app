
const initialState = {
  records: [
    {text: `"Меня поразила нынче поэтической красотой зимняя погода. На небе поднявшийся туман, сквозь который только белеется солнышко.
            На дороге начинающий оттаивать навоз и в воздухе влажная сырость." `, 
    date:   "16 января 1854",
    autor:  "Лев Толстой",
    id:     "leo"},

    {text: `"Люблю есть. Люблю курить трубку. Люблю петь. Люблю голым лежать в жаркий день на солнце возле воды, но чтобы вокруг меня было 
            много приятных людей, в том числе много интересных женщин. Люблю маленьких гладкошерстных собак. Люблю хороший юмор. Люблю нелепое." `, 
    date:   "3 сентября 1933", 
    autor:  "Даниил Хармс", 
    id:     "dani"},

    {text: `"Диана, сейчас 11:30 утра, 24 февраля. Въезжаю в город Твин Пикс, в пяти милях южнее канадской границы, в 12 милях к западу от 
            границы штата. Никогда в жизни не видел столько деревьев."`,
    date:   "24 февраля 1990 , 11:30 ",  
    autor:  "Дэйл Купер", 
    id: "dale"}
  ],
  selectedRecord:[
    {text: `⬅️ Выберите запись или создайте новую ⬇️`, id: "z1"}] ,
  trash: [],
  loading: true
}

const reducer = (state = initialState, action) => {
  const {type, payload} = action;


  switch(type) {
    case 'SELECT': {
      const recordId = payload;
      const selected = state.records.filter((item)=> item.id === recordId)
      return {
        ...state,
        selectedRecord: selected
      };
    }
    case 'ADD': {
      const newRecord = {
        text: payload.entry,
        date: payload.date,
        id: String(Date.now()), 
      }
      return {
        ...state,
        records: [
          ...state.records,
          newRecord
        ]
      };
    }
    case 'REMOVE': {
      const recordId = payload
      const selectedId = state.selectedRecord[0].id
      const toTrash = state.records.filter((item)=> item.id === recordId)
      const newRecords = state.records.filter((item)=> item.id !== recordId)
      if(recordId === selectedId) {
        return {
          ...state,
          records: [...newRecords],
          trash: [...state.trash, toTrash[0]],
          selectedRecord: [{text: `⬅️ Выберите запись или создайте новую ⬇️`,id: "z1" }]
          }
      }
      return {
        ...state,
        records: [...newRecords],
        trash: [...state.trash, toTrash[0]],
      }
    }
    case 'RESTORE': {
      const recordId = payload
      const restoredObj = state.trash.filter((item)=> item.id === recordId)
      const newTrash = state.trash.filter((item)=> item.id !== recordId)
      return {
        ...state,
        records: [...state.records,
          restoredObj[0]],
        trash: [...newTrash]
      }
    }
    default:
      return state; 
  }

};

export default reducer