import React from "react";
import "./App.css";
import { CellularAutomata, tryParseInputs } from "./CellularAutomata";
import TopBar from "./components/TopBar"
import SetupMenu from "./components/Menu"
import IterationsList from './components/IterationsList'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      iterations: [],
      menuActive: false,
      windowScroll: undefined
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", (e) => this.setState({ windowScroll: window.scrollY }))
  }
  startAutomata = (cells, iterations, rule) => {
    try {
      const { parsedCells, parsedIterations, parsedRule } = tryParseInputs(cells, iterations, rule)
      const automata = new CellularAutomata(parsedCells, parsedRule)
      const i = automata.iterate(parsedIterations)
      this.setState({
        menuActive: false,
        iterations: i
      })
    }
    catch (error) {
      alert(error)
    }


  }
  closeMenu = () => {
    this.setState({
      menuActive: false
    })
  }
  openMenu = () => {
    this.setState({
      menuActive: true
    })
  }
  scrollUp = () => {
    window.scrollTo(0, 0)
  }
  render() {
    const { windowScroll, menuActive, iterations } = this.state
    return (
      <div className="App">
        <TopBar
          onMenuButtonPress={this.openMenu}
          upButtonVisible={windowScroll && windowScroll !== 0}
          onUpButtonPress={this.scrollUp} />
        <SetupMenu
          visible={menuActive}
          onStartButtonPress={this.startAutomata}
          onRequestClose={this.closeMenu} />
        <IterationsList iterations={iterations}></IterationsList>

      </div>
    );
  }
}

export default App;
