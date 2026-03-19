import { render } from '@testing-library/react';

const customRender = (ui, options = {}) => render(ui, options);

// eslint-disable-next-line react-refresh/only-export-components
export * from '@testing-library/react';
export { customRender as render };