import {act, screen} from '@testing-library/react'
import {Home} from 'src/views/Home'
import {renderWithRouter} from 'test/utils/wrapper'

describe('views -> <Home />', () => {
  it('should render a title with "Mars Rover Images"', () => {
    renderWithRouter(<Home />)
    act(() => {
      const homeWithTitle = screen.getByText(/Mars Rover Images/i)
      expect(homeWithTitle).toBeInTheDocument()
    })
  })
  it('should render a title with "Curiosity"', () => {
    renderWithRouter(<Home />)
    const homeWithCuriosity = screen.getByText(/Curiosity/i)
    expect(homeWithCuriosity).toBeInTheDocument()
  })
  it('should render a title with "Opportunity"', () => {
    renderWithRouter(<Home />)
    const homeWithOpportunity = screen.getByText(/Opportunity/i)
    expect(homeWithOpportunity).toBeInTheDocument()
  })
  it('should render a title with "Spirit"', () => {
    renderWithRouter(<Home />)
    const homeWithSpirit = screen.getByText(/Spirit/i)
    expect(homeWithSpirit).toBeInTheDocument()
  })
})
