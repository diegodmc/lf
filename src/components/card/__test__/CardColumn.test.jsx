import React from "react";
import ReactDOM from 'react-dom';
import { render, cleanup } from "@testing-library/react";
import CardColumn from "../CardColumn";
import cardColumnStyles from '../cardColumn.module.scss';

describe('CardColum - Test', () => {
    afterEach(cleanup);
    it('renders without crashing', () => {
        const div = document.createElement("div");
        ReactDOM.render(<CardColumn />, div);
    });

    it('render cardColum bordered conrrectly', () => {
        let classes = cardColumnStyles.cardColumn + ' ';
        classes += cardColumnStyles.cardColumnBorder + ' '
        const { container } = render(<CardColumn bordered={true} />);
        expect(container.firstChild).toHaveClass(classes);
    })

    it('should render value for flex', () => {
        const flex = 2
        const utils = render(<CardColumn flex={flex} />);
        const container = utils.getByTestId("card-column");
        expect(container.style.flex).toBe(flex.toString());
    })

    it('should render value for margin', () => {
        const margin = '10px';
        const utils = render(<CardColumn margin={margin} />);
        const container = utils.getByTestId("card-column");
        expect(container.style.margin).toBe(margin);
    })

    it('should render value for padding', () => {
        const padding = '10px';
        const utils = render(<CardColumn padding={padding} />);
        const container = utils.getByTestId("card-column");
        expect(container.style.padding).toBe(padding);
    })

})
