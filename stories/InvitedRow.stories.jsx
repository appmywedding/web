import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { LoadingRow } from '../components/InvitedRow';

export default {
    title: 'Basic',
    component: LoadingRow,
}

const Template = (args) => <LoadingRow {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    name: 'Orel',
    number: '0543056286'
};