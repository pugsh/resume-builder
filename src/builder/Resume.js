import React from 'react';
import { withTheme } from 'emotion-theming';
import Grid from '../components/layout/Grid';
import Heading from '../components/heading/Heading';
import Box from '../components/container/Box';
import { getLayout } from '../theme/Theme';
import Summary from '../components/summary/Summary';

const Layout = withTheme(({ children, theme }) => {
    const { columns, rows, viewport } = getLayout(theme);
    return (
        <Grid columns={columns} rows={rows} height={viewport.height} width={viewport.width}>
            {children}
        </Grid>
    );
});

export default function Resume(props) {
    const { summary, heading } = props;
    return (
        <Layout>
            <Box section="heading" hAlign="left">
                <Heading {...heading} />
            </Box>
            <Box section="summary">
                <Summary {...summary} />
            </Box>
            <Box section="leftPanel" hAlign="left">This is left side</Box>
            <Box section="content" hAlign="left">This is content</Box>
        </Layout>
    );
}
