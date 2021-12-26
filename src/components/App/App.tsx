import {QueryClient, QueryClientProvider} from 'react-query'
import {Header} from 'src/components/Header'
import {Router} from 'src/components/Router'
import {GlobalStyle} from 'src/styles/base'
import {ResetStyle} from 'src/styles/libs/reset'

const queryClient = new QueryClient()

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <Router />
      <GlobalStyle />
      <ResetStyle />
    </QueryClientProvider>
  )
}
