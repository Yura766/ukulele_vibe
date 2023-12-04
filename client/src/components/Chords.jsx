import { useState, useEffect } from 'react';
import { get } from '../axios';


const Chords = function () {
    const [data, setData] = useState([]);

    useEffect(() => {
        get('/chords')
            .then(res => {
                setData(res.data)
            })
            .catch(error => {
                console.log(error);
            })
    }, []);

    return (
        <>
            <section className="chords__wrapper">
                <div className="container">
                    {data.map(item => (
                        <>
                            <h2 className="chords__title">
                                {item.title}
                            </h2>
                            {item.chords.map((i) => (
                                <div className="chords__img" key={i}>
                                    <img src={`./images/chords/${i}.svg`} alt="" />
                                </div>
                            ))}
                        </>
                    ))}
                </div>
            </section>
        </>
    );
}

export default Chords