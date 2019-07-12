import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { checkA11y } from '@storybook/addon-a11y';
import { withOptions } from '@storybook/addon-options';
import { ThemeProvider } from 'emotion-theming';
import theme from '../src/theme/Theme';
import GlobalStyles from '../src/util/GlobalStyles';

withOptions({ addonPanelInRight: true });

const componentStoriesReq = require.context('../src', true, /.stories.js$/);

function loadStories() {
    componentStoriesReq.keys().forEach((filename) => componentStoriesReq(filename));
}

addDecorator((story) => (
    <ThemeProvider theme={theme}>
        {story()}
    </ThemeProvider>
));

addDecorator((story) => (
    <div>
        <GlobalStyles />
        {story()}
    </div>

));

addDecorator(checkA11y);
configure(loadStories, module);
