import React from "react";
import ReactDOM from 'react-dom';
import Card from "../Card";
import { render, cleanup } from "@testing-library/react";
import cardStyles from '../card.module.scss';

describe('Card - Test', () => {
    afterEach(cleanup);
    it('renders without crashing', () => {
        const div = document.createElement("div");
        ReactDOM.render(<Card />, div);
    });

    it('render card bordered conrrectly', () => {
        let classes = cardStyles.card + ' ';
        classes += cardStyles.cardBorder + ' '
        const { container } = render(<Card bordered />);
        expect(container.firstChild).toHaveClass(classes);
    })

    it('render Card transparent conrrectly', () => {
        let transparent = cardStyles.card + ' ';
        const { container } = render(<Card transparent />);
        expect(container.firstChild).toHaveClass(transparent);
    })

    it('should render value for flex', () => {
        const flex = 2;
        const utils = render(<Card flex={flex} />);
        const container = utils.getByTestId("card");
        expect(container.style.flex).toBe(flex.toString());
    })

    it('should render value for minHeight', () => {
        const minHeight = 'calc(100% - 140px)';
        const utils = render(<Card fullSize />);
        const container = utils.getByTestId("card");
        expect(container.style.minHeight).toBe(minHeight);
    })

    it('should render value for margin', () => {
        const margin = '10px';
        const utils = render(<Card margin={margin} />);
        const container = utils.getByTestId("card");
        expect(container.style.margin).toBe(margin);
    });

})
