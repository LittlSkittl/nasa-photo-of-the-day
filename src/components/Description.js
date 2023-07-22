import "./Description.css"

function description (props) {
  const { data } = props
  console.log(data);

  return (
    <div>
      <p>{data.explanation}</p>
    </div>
  )
} 

export default description