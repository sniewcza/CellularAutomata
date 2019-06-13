import React from "react"

export default class CellularAutomataOutput extends React.PureComponent {
    render() {
        const lines = this.props.iterations.map(row => {
            return row
                .join("")
                .replace(/1/g, String.fromCharCode(9632))
                .replace(/0/g, String.fromCharCode(9723));
        });
        return (
            <div>
                {
                    lines.map(line =>
                        <p className="p" color="white">{line}</p>
                    )
                }
            </div>
        )
    }
}