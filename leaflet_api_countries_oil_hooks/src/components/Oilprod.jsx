import React, {useState, useEffect} from 'react'
import OilMap from './OilMap';
import Loading from './Loading'
import Legend from './Legend';
import papa from 'papaparse';
import legendItems from '../entities/LegendItems';


const Oilprod = () => {

    //console.log(legendItems);
    const legendItemsReverse = [...legendItems].reverse();

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
             setEventData(results.data)
           }
           getData()
     },[])

     
    const [countriesData, setCountriesData] = useState([])

    useEffect(() => {
        async function getData() {
            fetch("https://raw.githubusercontent.com/JosepAnSabate/React-Leaflet-World-Oil-Production-Deployment/main/src/data/countries.json")
                .then(res => res.json())
                //.then(data  => console.log(data.features))
                .then(data => setCountriesData(data.features))
            
          }
          getData()
    },[])
    
    // console.log('EventData:', eventData);
    // console.log('CountriesData:', countriesData);

    console.log(countriesData.length, countriesData);
    

     for (let i = 0; i < countriesData.length; i++) {

         const mapCountry = countriesData[i];
         const oilCountry = eventData.find((eventData) =>
         eventData.Code === mapCountry.properties.ISO_A3);  // find first match

         mapCountry.properties.confirmed = 0;
         mapCountry.properties.confirmedText = "0 - 5"; // default value of prod

        function setCountryColor (mapCountry) {
           const legendItem = legendItems.find((legendItem) => 
             legendItem.isFor(mapCountry.properties.confirmed)
            );

            if (legendItem != null) {
                 mapCountry.properties.color = legendItem.color;
            }
        }

          if(oilCountry != null //|| oilCountry != 'NaN'
              ){
             const confirmed = Number(oilCountry.oilpr_milbb);
                  mapCountry.properties.confirmed = confirmed;
                  mapCountry.properties.confirmedText = confirmed;
             }
              setCountryColor(mapCountry)
              console.log(oilCountry);
     }

    
  return (
    <div>
        {countriesData.length === 0 ? 
        <Loading /> : <OilMap countries={countriesData} />}
        <Legend legendItems={legendItemsReverse} Reverse/>
    </div>
  )
}

export default Oilprod