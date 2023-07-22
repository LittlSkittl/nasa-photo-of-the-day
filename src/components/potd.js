import './potd.css'

function POTD (props) {
  const {photo, data} = props
  console.log(photo);

  return (
    <div>
      <h3>{data.title}</h3>
      <img src={photo}/>
    </div>
  )
}

export default POTD