import React from "react";
import { render, cleanup } from "@testing-library/react";
import CardRow from "../CardRow";
import cardRowStyles from "../cardRow.module.scss";

describe('CardRow - Test', () => {
    afterEach(cleanup);
    it('renders without crashing', () => {
        render(<CardRow />);
    });

    it('render cardRow bordered conrrectly', () => {
        let classes = cardRowStyles.cardRow + ' ';
        classes += cardRowStyles.cardRowBorder + ' '
        const { container } = render(<CardRow bordered />);
        expect(container.firstChild).toHaveClass(classes);
    })

    it('render cardColum transparent conrrectly', () => {
        let classes = cardRowStyles.cardRow + ' ';
        classes += cardRowStyles.cardRowTransparent + ' '
        const { container } = render(<CardRow transparent />);
        expect(container.firstChild).toHaveClass(classes);
    })

    it('should render value for flex', () => {
        const flex = 2
        const utils = render(<CardRow flex={flex} />);
        const container = utils.getByTestId("card-row");
        expect(container.style.flex).toBe(flex.toString());
    })

    it('should render value for flex', () => {
        const reverse = true;
        const utils = render(<CardRow reverse={true} itemAlign={"revert"} />);
        const container = utils.getByTestId("card-row");
        expect(container.style.alignItems).toBe("revert");
    })


})
