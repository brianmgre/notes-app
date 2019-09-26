// import React, { Component } from "react";
// import { connect } from "react-redux";

// class EditNote extends Component {
//   state = {
//     editTitle: "",
//     editBody: ""
//   };

//   render() {
//     const { note } = this.props;
//     return (
//       <div>
//         Edit Note
//         <input
//           placeholder="title"
//           name="title"
//           type="text"
//           value={note.title}
//         />
//         <input placeholder="Note" name="title" type="text" value={note.body} />
//         <button>Save</button>
//       </div>
//     );
//   }
// }

// const mapStateToProps = ({ notes }) => {
//   let id = window.location.href.substr(
//     window.location.href.lastIndexOf("/") + 1
//   );

//   const note = notes.find(note => id === note._id);
//   return {
//     note: note
//   };
// };

// export default connect(mapStateToProps)(EditNote);
