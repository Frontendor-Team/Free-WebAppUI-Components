import React from 'react';
import ShortNav from './ShortNav';

export default {
  title: 'Top Style/ShortNav',
  component: ShortNav,
};

const Template = (args) => <ShortNav {...args} />;

export const FewLinks = Template.bind({});
FewLinks.args = {};