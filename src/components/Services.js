import React,{useState} from 'react';
import Title from './Title';
import {FaCocktail, FaHiking, FaBeer, FaShuttleVan} from 'react-icons/fa';




const Services = () => {
    const [{services}] = useState({     /* ===> DESTRUCT services */
        services:[
            {
                icon:<FaCocktail/>,
                title:'Free cocktails',
                info:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium, illum.'
            },
            {
                icon:<FaHiking/>,
                title:'Endless Hiking',
                info:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium, illum.'
            },
            {
                icon:<FaShuttleVan/>,
                title:'Free shuttle',
                info:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium, illum.'
            },
            {
                icon:<FaBeer/>,
                title:'Strongest Beer',
                info:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium, illum.'
            }
        ]
    });

    return (
        <section className="services">
            <Title title='services'/>
            <div className="services-center">
                {services.map((service,index)=>(
                        <article key={index} className="service">
                            <span>{service.icon}</span>
                            <h6>{service.title}</h6>
                            <p>{service.info}</p>
                        </article>
                ))}
            </div>
        </section>
    )
}

export default Services