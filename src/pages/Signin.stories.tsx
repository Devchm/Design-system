import { Meta, StoryObj } from '@storybook/react'
import { SignIn} from './Signin'

export default {
  title: 'pages/Signin',
  component: SignIn,
  args: {
    size:'md',
    children: 'Create account',
    argTypes: {
      
    }

  },
} as Meta

export const Default:StoryObj= {}