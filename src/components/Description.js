import styled from 'styled-components'

const StyledParagraph = styled.div`
  p {
    font-size: .55rem;
    text-align: left;
    color: crimson;
  }
`

function description (props) {
  const { data } = props
  console.log(data);

  return (
    <StyledParagraph>
      <p>{data.explanation}</p>
    </StyledParagraph>
  )
} 

export default description