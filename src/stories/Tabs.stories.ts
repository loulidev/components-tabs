import type { Meta, StoryObj } from '@storybook/react';

import { Tabs } from './Tabs';

const meta={
    title:"Example/Tabs",
    component:Tabs,
    parameters:{
        layout:"centered"
    },
    tags:["autodocs"],
    argTypes:{

    },
}satisfies Meta<typeof Tabs>


export default meta;
type Story=StoryObj<typeof meta>

export const Primary:Story={
    args:{
        contents:[
            {label:"Tab 1",children:"Content 1"},
            {label:"Tab 2",children:"Content 2"},
            {label:"Tab 3",children:"Content 3"}
        ]
    }
}