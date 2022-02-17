import React, {useState} from 'react'


const Home = () => {
  //  let name = 'mario'
  const [name, setName] = useState('mario')
  const [age, setAge] = useState(25)
  console.log(name);

  const handleClick = () => {
    setName('luigi')
    setAge(4)
    console.log(name);
  }

  return (
    <div className='home'>
        <h2>{name} is {age} old.</h2>
        <button onClick={() => {handleClick(name)}}>Butto</button>
    </div>
  )
}

export default Home