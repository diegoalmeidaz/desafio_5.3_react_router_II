import {Card} from 'react-bootstrap';

function tarjetaPersonaje ({personaje}){
    const {name, stats, src, types} = personaje;
    return (
        <Card style={{width: "30rem"}} className="mt-5 mx-auto p-6 flex-row  " >
            <Card.Img height="300" variant="top" src={src} className="mb-10"/>
            <Card.Body>
                <Card.Title className="text-3xl text-transform: capitalize "> {name}
                </Card.Title>
                <ul className='text-left'>
                    <Card.Text>
                        {stats?.map((stat, i)=> (
                            <li key={i}>
                                {stat.name}: {stat.base}

                            </li>
                        ))}
                    </Card.Text>
                </ul>
                <Card.Text className="text-secondary" >{types}</Card.Text>

            </Card.Body>
        </Card>
    )
}

export default tarjetaPersonaje