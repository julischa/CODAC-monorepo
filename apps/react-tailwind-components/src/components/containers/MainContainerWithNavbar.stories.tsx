import { Meta, StoryObj } from '@storybook/react'
import MainContainer from './MainContainer'
import Navbar from '../Navbars/Navbar'
import Button from '../buttons/Button'

const ContainerWithNav = () => {
  return (
    <MainContainer>
      <Navbar
        brand={{ id: 1, text: 'sdsd' }}
        urls={[{ id: 1, text: 'url-1' }]}
      />
      <Button label='testing button' />
    </MainContainer>
  )
}
const meta = {
  title: 'Toxic-Container-with-Nav',
  component: ContainerWithNav,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof MainContainer>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    children: typeof Navbar,
  },
}
