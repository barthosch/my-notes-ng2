import { Note } from './classes/note';

export const MOCK_NOTES = [
  {
    name: 'Shopping List',
    type: 'shopping',
    id: "1",
    items: [
      new Note({caption: 'Eggs', quantity: 12}),
      new Note({caption: 'Milk', quantity: 1}),
      new Note({caption: 'Bread', quantity: 1})
    ]
  },
  {
    name: 'ToDos',
    type: 'todo',
    id: "2",
    items: [
      new Note({caption: 'Do some sports', details: 'how about bicycling'}),
      new Note({caption: 'Find a hobby', details: 'maybe stamps?'})
    ]
  }
];


