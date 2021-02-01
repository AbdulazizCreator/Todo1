import React, { Component } from "react";
import "./Trello.css";

class Trello extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isCardShow: false,
      boards: [],
      itemTitle: [],
      boardTitle: "",
      selectedIndex: -1,
    };
  }

  render() {
    const changeCardVisible = () => {
      this.setState({ isCardShow: !this.state.isCardShow });
    };

    const addBoard = () => {
      if (this.state.selectedIndex >= 0) {
        this.state.boards[
          this.state.selectedIndex
        ].title = this.state.boardTitle;
      } else {
        this.state.boards.push({
          // title,
          title: this.state.boardTitle,
          items: [],
        });
      }
      changeCardVisible();
      this.setState({
        boards: this.state.boards,
        boardTitle: "",
        selectedIndex: -1,
      });
    };

    const deleteBoard = (index) => {
      this.state.boards.splice(index, 1);
      this.setState({ boards: this.state.boards });
    };

    const handleChange = (e) => {
      this.setState({ boardTitle: e.target.value });
    };

    const editBoard = (index) => {
      this.setState({
        boardTitle: this.state.boards[index].title,
        isCardShow: true,
        selectedIndex: index,
      });
    };

    const handleItemChange = (e, index) => {
      this.state.itemTitle[index] = e.target.value;
      this.setState({ itemTitle: this.state.itemTitle });
    };

    const addBoardItem = (index) => {
      this.state.boards[index].items.push(this.state.itemTitle[index]);
      this.state.itemTitle[index] = ''

      this.setState({itemTitle: this.state.itemTitle, boards: this.state.boards });
      console.log(this.state.boards[index].items, index);
      console.log(this.state.itemTitle[index]);
    };

    const deleteBoardItem = (index1, index) => {
      this.state.boards[index].items.splice(index1, 1);
      this.setState({ boards: this.state.boards });
    };

    return (
      <div>
        <div className="container">
          <div className="row mt-3">
            <div className="col-3">
              <button
                type="button"
                onClick={changeCardVisible}
                className="btn btn-success"
              >
                Add board
              </button>

              <div
                className={`card mt-3 ${this.state.isCardShow ? "" : "d-none"}`}
              >
                <div className="card-body">
                  {/*<form onSubmit={addBoard}>*/}
                  <textarea
                    value={this.state.boardTitle}
                    className="form-control"
                    onChange={handleChange}
                    name="boardTitle"
                    placeholder="Type here"
                  />

                  <button
                    type="button"
                    onClick={addBoard}
                    className={`btn mt-3 d-block ml-auto ${
                      this.state.selectedIndex >= 0
                        ? "btn-primary"
                        : "btn-success"
                    }`}
                  >
                    {this.state.selectedIndex >= 0 ? "Edit" : "Add"}
                  </button>
                  {/*</form>*/}
                </div>
              </div>
            </div>
            <div className="col-9">
              <div className="row">
                {this.state.boards.map((item, index) => (
                  <div key={index} className="col-4 mb-3">
                    <div className="card">
                      <div className="card-header">
                        <h5 onClick={() => editBoard(index)}>{item.title}</h5>
                        <div
                          className="close"
                          onClick={() => deleteBoard(index)}
                        >
                          &times;
                        </div>
                      </div>
                      <div className="card-body">
                        {item.items.map((item2, index1) => (
                          <div key={index1} className="task position-relative">
                            {item2}{" "}
                            <div
                              className="close"
                              onClick={() => deleteBoardItem(index1, index)}
                            >
                              &times;
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="card-footer">
                        {/*<form>*/}
                        <textarea
                          value={this.state.itemTitle[index]}
                          onChange={(e) => handleItemChange(e, index)}
                          className="form-control"
                        />
                        <button
                          type="submit"
                          onClick={() => addBoardItem(index)}
                          className="btn btn-success mt-3 d-block ml-auto"
                        >
                          Add
                        </button>
                        {/*</form>*/}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Trello;

// import React, { Component } from "react";
// import "./Trello.css";

// class Trello extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       isCardShow: false,
//       boards: [],
//       boaardTitle: "",
//     };
//   }

//   render() {
//     const changeCardVisible = () => {
//       this.setState({ isCardShow: !this.state.isCardShow });
//     };

//     const addBoard = (e) => {
//       this.state.boards.push({
//         title: this.state.boardTitle, // title: title,
//         items: [],
//       });
//       changeCardVisible();
//       this.setState({ boards: this.state.boards, boardTitle: "" });
//     };

//     const deleteBoard = (index) => {
//       this.state.boards.splice(index, 1);
//       this.setState({ boards: this.state.boards });
//     };

//     const handleChange = (e) => {
//       this.setState({ boardTitle: e.target.value });
//     };

//     const editBoard = () => {
//       this.setState({boardTitle: this.state.boards, })
//     }

//     return (
//       <div>
//         <div className="container">
//           <div className="row mt-3">
//             <div className="col-3">
//               <button
//                 type="button"
//                 onClick={changeCardVisible}
//                 className="btn btn-success"
//               >
//                 Add board
//               </button>

//               <div
//                 className={`card mt-3 ${this.state.isCardShow ? "" : "d-none"}`}
//               >
//                 <div className="card-body">
//                   <textarea
//                     value={this.state.boardTitle}
//                     onChange={handleChange}
//                     className="form-control"
//                     placeholder="Type here"
//                     name="boardTitle"
//                   />
//                   <button
//                     onClick={addBoard}
//                     type="submit"
//                     className="btn btn-success mt-3 d-block ml-auto"
//                   >
//                     Add
//                   </button>
//                 </div>
//               </div>
//             </div>
//             <div className="col-9">
//               <div className="row">
//                 {this.state.boards.map((item, index) => (
//                   <div className="col-4 mb-3">
//                     <div className="card">
//                       <div className="card-header">
//                         <h5 onClick={() => editBoard(index)}>{item.title}</h5>
//                         <div
//                           className="close"
//                           onClick={() => deleteBoard(index)}
//                         >
//                           &times;
//                         </div>
//                       </div>
//                       <div className="card-body"></div>
//                       <div className="card-footer">
//                         <form>
//                           <textarea
//                             name="item-title"
//                             className="form-control"
//                           ></textarea>
//                           <button
//                             type="submit"
//                             className="btn btn-success mt-3 d-block ml-auto"
//                           >
//                             Add
//                           </button>
//                         </form>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default Trello;
