import {screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import {App} from 'src/components/App'
import {renderWithRouter} from 'test/utils/wrapper'

describe('components -> <Router />', () => {
  it('should render the home page on first render', () => {
    renderWithRouter(<App />)
    expect(screen.getByText(/Mars Rover Images/i)).toBeInTheDocument()
  })

  it('should navigate to the home page after clicking the logo', () => {
    const route = '/cameras/curiosity'
    renderWithRouter(<App />, {route})

    const leftClick = {button: 0}
    userEvent.click(screen.getByAltText(/Nasa Logo/i), leftClick)

    expect(screen.getByText(/Mars Rover Images/i)).toBeInTheDocument()
  })

  it('should render the 404 page where route is not recognised', () => {
    const route = '/random-page'
    renderWithRouter(<App />, {route})
    expect(screen.getByText(/Hmm this isn't a page!/i)).toBeInTheDocument()
  })
})
