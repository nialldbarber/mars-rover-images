import {render, screen, waitFor} from '@testing-library/react'
import {Title} from 'src/components/Title'

describe('components -> <Title />', () => {
  it('should render a title with "testing"', () => {
    render(<Title text="testing" />)
    const titleWithText = screen.getByText(/testing/i)
    expect(titleWithText).toBeInTheDocument()
  })

  it('should not render if there is no text', async () => {
    render(<Title />)
    await waitFor(() => {
      expect(screen.queryByText(/i am not here/i)).not.toBeInTheDocument()
    })
  })
})
