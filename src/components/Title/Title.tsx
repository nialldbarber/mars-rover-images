import {StyledTitle} from 'src/components/Title/styles'
import {HEADER_LIST} from 'src/constants/heading'

export type TitleProps = {
  text?: string
  level?: typeof HEADER_LIST[number]
  strong?: boolean
  className?: string
  isTruncated?: boolean
}

export default function Title({
  text,
  level = 1,
  strong,
  className,
  isTruncated = false,
  ...rest
}: TitleProps) {
  const H = `h${level}` as keyof JSX.IntrinsicElements

  const header = (
    <H className={className} {...rest}>
      {text}
    </H>
  )

  return text ? (
    <StyledTitle $isTruncated={isTruncated} $strong={strong}>
      {header}
    </StyledTitle>
  ) : null
}
