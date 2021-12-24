import {useQuery} from 'react-query'

type FetchT = {
  isLoading?: boolean
  error?: boolean | unknown
  data?: any
}

export default function useFetchData(queryKey: string, api: string): FetchT {
  const {isLoading, error, data} = useQuery(queryKey, () =>
    fetch(api).then((res) => res.json()),
  )

  return {isLoading, error, data}
}
