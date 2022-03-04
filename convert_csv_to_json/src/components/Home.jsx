import React, {useState, useEffect} from 'react'
import papa from 'papaparse';


const Home = () => {
   
        const [eventData, setEventData] = useState([])
        
        useEffect(() => {
            async function getData() {
                const response = await fetch("https://raw.githubusercontent.com/JosepAnSabate/dades-oil-world-production/main/df_oil_year.csv")
                const reader = response.body.getReader()
                const result = await reader.read() // raw array
                const decoder = new TextDecoder('utf-8')
                const csv = decoder.decode(result.value) // the csv text
                const results = papa.parse(csv, { header: true }) // object with { data, errors, meta }
                //const rows = results.data // array of objects
                setEventData(results)
              }
              getData()
        },[])


        console.log(eventData);
  return (
    <div><h1>Home</h1>
     
    </div>
   
  )
}

export default Home