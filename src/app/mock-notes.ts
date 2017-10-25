import { Note, Deadline, Task, Shopping } from "./classes/note";

export const MOCK_NOTES = [
  {
    name: "Shopping List",
    items: [
      new Shopping(null, false, "Eggs", null, 12),
      new Shopping(null, false, "Milk", null, 2),
      new Shopping(null, false, "Bread", null, 1),
    ]
  },
  {
    name: "ToDos",
    items: [
      new Task(null, false, "Do some sports", null, 0, "how about bicycling"),
      new Task(null, false, "Find a hobby", null, 0, "maybe stamps?")
    ]
  }
]


