
function App() {
    const [eventData, setEventData] = useState([])
    const [loading, setLoading] = useState(false)
  
    useEffect(()=> {
      const fetchEvents = async () => {
        setLoading(true)
        const res = await fetch('https://eonet.gsfc.nasa.gov/api/v2.1/events')
        const {events} = await res.json() //  deconstructing the object
  
        setEventData(events)
        setLoading(false)
      }
      fetchEvents()
      // console.log(eventData);
    }, [])
  
    return (
      <div>
         <Header />
         {!loading? <Map eventData={eventData} /> : <Loading />} 
  
  
      </div>
    );
  }
  
  export default App;