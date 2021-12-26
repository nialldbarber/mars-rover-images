import styled, {css} from 'styled-components'

type StyledTitleProps = {
  $isTruncated?: boolean
  $strong?: boolean
}

const getTruncatedStyles = css`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

export const StyledTitle = styled.div<StyledTitleProps>`
  display: flex;
  align-items: center;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: ${({$strong}) => ($strong ? 'bold' : 'normal')};
    ${({$isTruncated}) => $isTruncated && getTruncatedStyles};
    text-transform: capitalize;
  }
`
