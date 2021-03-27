import React from "react";
import Button from "../Button";
import { render, cleanup } from "@testing-library/react";
import buttonStyle from './button.module.scss';

describe('Button', () => {
    afterEach(cleanup)

    const onclick = jest.fn();
    it('renders without crashing', () => {
        render(<Button label="" onClick={onclick} visible={true} />);
        render(<Button label="" onClick={onclick} visible={false} />);
    });

    it('render buttom confirm correctly', () => {
        let classes = buttonStyle.button + ' ';
        classes += buttonStyle.confirmButton + ' '
        const { container } = render(<Button label="Confirma" confirm={true} onClick={onclick} visible={true} />);
        expect(container.firstChild).toHaveClass(classes);
    })

    it('render button neutral correctly', () => {
        let neutral = buttonStyle.button + ' ';
        neutral += buttonStyle.neutralButton + ' '
        const { container } = render(<Button label="neutral" neutral={true} onClick={onclick} visible={true} />);
        expect(container.firstChild).toHaveClass(neutral);
    })

    it('render button remove correctly', () => {
        let remove = buttonStyle.button + ' ';
        remove += buttonStyle.removeButton + ' ';
        const { container } = render(<Button label="Confirma" remove={true} onClick={onclick} visible={true} />);
        expect(container.firstChild).toHaveClass(remove);
    })

    it('render button round correctly', () => {
        let round = buttonStyle.button + ' ';
        round += buttonStyle.roundButton + ' ';
        const { container } = render(<Button label="Confirma" round={true} onClick={onclick} visible={true} />);
        expect(container.firstChild).toHaveClass(round);
    })

    it('render button disabled correctly', () => {
        let disabled = buttonStyle.button + ' ';
        disabled += buttonStyle.disabledButton + ' ';
        const { container } = render(<Button label="Confirma" disabled={true} onClick={onclick} visible={true} />);
        expect(container.firstChild).toHaveClass(disabled);
    });

    it('render button activeButtonAll correctly', () => {
        let all = buttonStyle.button + ' ';
        all += buttonStyle.activeButtonAll + ' ';
        const { container } = render(<Button label="Confirma" all={true} onClick={onclick} visible={true} />);
        expect(container.firstChild).toHaveClass(all);
    });

    it('render button activeOnButtonAll correctly', () => {
        let all = buttonStyle.button + ' ';
        all += buttonStyle.activeOnButtonAll + ' ';
        const { container } = render(<Button label="Confirma" all={true} onClick={onclick} visible={true} toggleColor={true} />);
        expect(container.firstChild).toHaveClass(all);
    });

    it('render button activeButton correctly', () => {
        let active = buttonStyle.button + ' ';
        active += buttonStyle.activeButton + ' ';
        const { container } = render(<Button label="Confirma" active={true} onClick={onclick} visible={true} toggleColor={false} />);
        expect(container.firstChild).toHaveClass(active);
    });

    it('render button activeOnButton correctly', () => {
        let active = buttonStyle.button + ' ';
        active += buttonStyle.activeOnButton + ' ';
        const { container } = render(<Button label="Confirma" active={true} onClick={onclick} visible={true} toggleColor={true} />);
        expect(container.firstChild).toHaveClass(active);
    });

    it('should render value for position', () => {
        const position = "fixed";
        const utils = render(<Button label="Confirma" position={position} onClick={onclick} visible={true} />);
        const container = utils.getByTestId("button");
        expect(container.style.position).toBe(position);
    });

    it('should render value for margin', () => {
        const margin = "10px 10px 10px 10px";
        const utils = render(<Button label="Confirma" margin={margin} onClick={onclick} visible={true} />);
        const container = utils.getByTestId("button");
        expect(container.style.margin).toBe(margin);
    });

})
