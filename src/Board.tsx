import * as React from "react";
import './Board.css';
import {Square} from "./Square";

type BoardType = string | null;
interface Props {
    squares: Array<string | null>;
    onClick: (i: number) => void;
}
interface State {
    squares: BoardType[];
    xIsNext: boolean;
}

export default class Board extends React.Component<Props, State> {
    public renderSquare(i: number) {
        const onClick = () => this.props.onClick(i);
        return (
            <Square
                value={this.props.squares[i]}
                onClick={onClick}
            />
        );
    }

    public render() {
        return (
            <div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}