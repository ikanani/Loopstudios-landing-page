import React from 'react'
import data from '../Data-desktop'

const Creationsdesktop = () => {
    //eslint-disable-next-line
    const[cards, setCards]= React.useState(data)
    return(
        <section className="creations-desktop">
            <div className="title">
                <h2>Our creations</h2>
             <div className="btn-container">
                <button className="btn">
                    See All
                </button>
             </div>
            </div>
           <section>
               {cards.map((card)=>{
                   const{id,image,title}=card
                   return(
                       <article key={id}>
                           <div>
                            <img src={image} alt="Creations card"/>
                            </div>
                            <h3>{title}</h3>
                       </article>
                   )
               })}
            </section>
        </section>
    )
}

export default Creationsdesktop;