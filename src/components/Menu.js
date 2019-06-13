import React from "react"
import TextField from '@material-ui/core/TextField'
import Drawer from '@material-ui/core/Drawer'
import Button from '@material-ui/core/Button'
import "../App.css"

const CELLS = 'cells'
const ITERATIONS = 'iterations'
const RULE = 'rule'

export default class CellularAutomataSetup extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            numberOfIterations: "",
            numberOfCells: "",
            rule: ""
        }
    }

    handleChange = name => event => {
        const { value } = event.target
        switch (name) {
            case CELLS:
                this.setState({
                    numberOfCells: value
                })
                break;
            case ITERATIONS:
                this.setState({
                    numberOfIterations: value
                })
                break;
            case RULE:
                this.setState({
                    rule: value
                })
        }
    }

    // parseInputs = () => {
    //     const { numberOfCells, numberOfIterations, rule } = this.state
    //     const parsedIterations = parseInt(numberOfIterations)
    //     const parsedCells = parseInt(numberOfCells)
    //     const parsedRule = parseInt(rule)
    //     if (isNaN(parsedCells) || isNaN(parsedIterations) || isNaN(parsedRule))
    //         throw Error("Wprowadzone wartości nie są liczbami")
    //     else
    //         return { parsedIterations, parsedCells, parsedRule }
    // }

    onClick = () => {
      
            const { numberOfCells, numberOfIterations, rule } = this.state
            this.props.onStartButtonPress(numberOfCells, numberOfIterations, rule)
        
       
    }

    render() {
        const { visible, onRequestClose } = this.props;
        const { numberOfCells, rule, numberOfIterations } = this.state
        return (
            <Drawer anchor="left" open={visible} onClose={onRequestClose}>

                <div className="Setup-menu">
                    <TextField
                        value={numberOfCells}
                        label="Liczba komórek"
                        variant="outlined"
                        onChange={this.handleChange(CELLS)}
                    />
                    <TextField
                        value={numberOfIterations}
                        label="Liczba iteracji"
                        variant="outlined"
                        onChange={this.handleChange(ITERATIONS)}
                    />

                    <TextField
                        value={rule}
                        label="Reguła"
                        variant="outlined"
                        onChange={this.handleChange(RULE)}
                    />
                    <Button variant="contained" color="primary" onClick={this.onClick}>
                        Start
                </Button>
                </div >
            </Drawer>
        )
    }
}