import {act, renderHook} from '@testing-library/react-hooks'
import {QueryClient, QueryClientProvider} from 'react-query'
import useFetchData from 'src/hooks/useFetchData'

const queryClient = new QueryClient()
const wrapper = ({children}: any) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
)

describe('hooks -> useFetchData()', () => {
  it('call hook and set isLoading to `true`', async () => {
    const {result, waitFor} = renderHook(() => useFetchData('testKey', ''), {
      wrapper,
    })
    await act(async () => {
      await waitFor(() => result.current.isLoading)
      expect(result.current.isLoading).toEqual(true)
    })
  })
})
