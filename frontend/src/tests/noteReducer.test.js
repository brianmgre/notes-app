import reducer from "../reducers/note";
import * as actions from "../actions/notes";

describe("Combined Reducer ", () => {
  it("Reducer will return inital state", () => {
    expect(reducer(undefined, {})).toEqual([]);
  });
});

describe("Notes Reducer ", () => {
  it("Reducer add", () => {
    const note = {
      title: "test",
      body: "testBody",
      id: 1
    };

    expect(
      reducer([], {
        type: actions.ADD_NOTE,
        note
      })
    ).toEqual([{ title: note.title, body: note.body, id: note.id }]);
  });

  it("adding new note", () => {
    const note = {
      title: "test",
      body: "testBody",
      id: 1
    };

    const noteTwo = {
      title: "TestNoteTwo",
      body: "testBodyTwo",
      id: 2
    };

    expect(
      reducer([{ title: noteTwo.title, body: noteTwo.body, id: noteTwo.id }], {
        type: actions.ADD_NOTE,
        note
      })
    ).toHaveLength(2);
  });

  it("EDITING note", () => {
    const note = {
      title: "test",
      body: "testBody",
      _id: 1
    };

    const noteTwo = {
      title: "TestNoteTwo",
      body: "testBodyTwo",
      _id: 1
    };

    expect(
      reducer(
        [{ title: noteTwo.title, body: noteTwo.body, _id: noteTwo._id }],
        {
          type: actions.EDIT_NOTE,
          note
        }
      )
    ).toEqual([{ title: note.title, body: note.body, _id: note._id }]);
  });

  it("Delete note", () => {
    const note = {
      title: "test",
      body: "testBody",
      _id: 1
    };

    expect(
      reducer([{ title: note.title, body: note.body, _id: note._id }], {
        type: actions.DELETE_NOTE,
        note
      })
    ).toEqual([{ title: note.title, body: note.body, _id: note._id }]);
  });
});
