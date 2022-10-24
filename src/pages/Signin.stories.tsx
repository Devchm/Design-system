import { Meta, StoryObj } from '@storybook/react'
import { within, userEvent, waitFor} from '@storybook/testing-library'
import { expect } from '@storybook/jest'
import { SignIn} from './Signin'
import { rest } from 'msw'


export default {
  title: 'pages/Signin',
  component: SignIn,
  args: {
    size:'md',
    children: 'Create account',
    argTypes: {},
    parameters:{
      msw: {
        handlers: [
          rest.post(' /session', (req, res, ctx)=> {
            return res(ctx.json({
              message:'Login Relizado'
            }))
          })
        ]
      },
    }, 

  },
} as Meta

export const Default:StoryObj= {
  play: async ({canvasElement }) => {
    const canvas = within(canvasElement)

    userEvent.type(canvas.getByPlaceholderText('Digite seu email'), 'chm@gmail.com.br')
    userEvent.type(canvas.getByPlaceholderText('********'), '1234')

    userEvent.click(canvas.getByRole('button'))

    await waitFor(() => {
      expect(canvas.getByText('Login Realizad!')).toBeInTheDocument()
    })
    
  }
}