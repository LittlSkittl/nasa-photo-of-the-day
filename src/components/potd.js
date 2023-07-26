import styled from 'styled-components'

const StyledDiv = styled.div`
  img {
    width: 55%;
    padding: 10px;
    border-radius: 15px;
  }

  h3 {
    color: crimson;
  }

  border: 2px solid yellow;
  margin-top: 5px;
`

function POTD (props) {
  const {photo, data} = props
  console.log(photo);

  return (
    <StyledDiv>
      <h3>{data.title}</h3>
      <img src={photo}/>
    </StyledDiv>
  )
}

export default POTD