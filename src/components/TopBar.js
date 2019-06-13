import React from "react"
import IconButton from '@material-ui/core/IconButton';
import ArrowIcon from '@material-ui/icons/ArrowUpward'
import MenuIcon from '@material-ui/icons/Menu'
import "../App.css";

export default class CellularAutomataTopBar extends React.Component {
    render() {
        return (
            <div className="Top-bar">
                <IconButton className="Menu-button" onClick={this.props.onMenuButtonPress} >
                    <MenuIcon></MenuIcon>
                </IconButton>
                {this.props.upButtonVisible ? (
                    <IconButton className="Scrollup-button" onClick={this.props.onUpButtonPress}>
                        <ArrowIcon />
                    </IconButton>
                ) : null
                }
            </div>
        )
    }
}