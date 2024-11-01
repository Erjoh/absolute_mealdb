import {render, screen} from "@testing-library/react";
import {Button} from "shared/ui/Button/Button";

describe('classNames', () => {
    test('test', () => {
        render(<Button>TEST</Button>);
        expect(screen.getByText('TEST')).toBeInTheDocument()
    });
});