

const Map = () => {
      const fruits = ["apple ","orange" ,"mango"]
  return (
  
    <div className="m-12">
             <> 
      {fruits.map((fruit)=> (
<li key={fruit}>{fruit}</li>
))}
     </>
    </div>
  )
}

export default Map 
