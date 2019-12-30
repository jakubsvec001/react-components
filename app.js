

class GroceryListItem extends React.Component {
  constructor(props){
    super(props) 

    this.state = {
      hovered: false,
    }
  }

  hoverHandler() {
    this.setState({
      hovered: !this.state.hovered
    }) 
  }

  render(){
    const style = {
      "font-weight": this.state.hovered ? 'bold' : "normal"
    }

    return <li key={this.props.idx} style={style} onMouseOver={this.hoverHandler.bind(this)}>{this.props.item}</li>
  }
}


var GroceryList = (props) => {
  return (
    <ul>
      {props.groceryItems.map((groceryItem, i) => <GroceryListItem item={groceryItem} idx={i} /> )}
    </ul>
  )
}

var App = () => {
  return (
  <div>
    <h2>Grocery List App</h2>
    <GroceryList groceryItems = {["potatos", "clams", "tomoatoes"]}/>
  </div>
  )
}

ReactDOM.render(<App />, document.getElementById("app"));