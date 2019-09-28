import * as actions from "../actions/notes";
import * as actionsLoader from "../actions/loader";
import * as actionsModal from "../actions/modal";

describe("Notes Actions", () => {
  it("Creates a add note action", () => {
    const note = {
      title: "test",
      body: "test-body"
    };
    const expectedAction = {
      type: actions.ADD_NOTE,
      note
    };

    expect(actions.addNote(note)).toEqual(expectedAction);
  });

  it("Edit action", () => {
    const note = {
      title: "test",
      body: "test-body"
    };
    const expectedAction = {
      type: actions.EDIT_NOTE,
      note
    };

    expect(actions.editNote(note)).toEqual(expectedAction);
  });

  it("Delete Action", () => {
    const id = 1;

    const expectedAction = {
      type: actions.DELETE_NOTE,
      id
    };

    expect(actions.deleteNote(id)).toEqual(expectedAction);
  });

  it("data request action", () => {
    const notes = [];

    const expectedAction = {
      type: actions.DATA_REQUEST,
      notes
    };

    expect(actions.dataRequest(notes)).toEqual(expectedAction);
  });
});

describe("Loader Actions", () => {
  it("Open Loader", () => {
    const expectedAction = {
      type: actionsLoader.OPEN_LOADER
    };

    expect(actionsLoader.openLoader()).toEqual(expectedAction);
  });

  it("Close Loader", () => {
    const expectedAction = {
      type: actionsLoader.CLOSE_LOADER
    };

    expect(actionsLoader.closeLoader()).toEqual(expectedAction);
  });
});

describe("Modal Actions", () => {
  it("Modal Open", () => {
    const expectedAction = {
      type: actionsModal.OPEN_MODAL
    };

    expect(actionsModal.openModal()).toEqual(expectedAction);
  });
});
