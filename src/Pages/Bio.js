import React from 'react';
import IMAGES from '../Assets';
import CustomImg from '../Components/Img/CustomImg'

export default function Bio() {
    return (
        <>
            <section id="bio">
                <figure id="bioFig">
                    <CustomImg {...IMAGES.picBio} />
                    <figcaption>
                        <h3>About Me</h3>
                        <p className="text-wrap">Soy Miranda Leguizamón, nacida en 1998 en La Plata. Estudio Medicina (UNLP) y me dedico a la fotografía analógica y digital.
                            Mi trabajo se enfoca en retratar la frescura y espontaneidad de los movimientos, formas y colores, y la belleza de la simplicidad tanto en la naturaleza y la arquitectura, como en las personas.
                            Me interesa romper aquellos estándares de belleza irreales e inalcanzables, que son dañinos en diversos aspectos, trabajando con personas que no son modelos profesionales o no encajan en la industria de la moda ortodoxa, como las que vemos cada día en nuestra vida cotidiana, independientemente de su nacionalidad, género, religión, diferencias y/o condiciones físicas, sexo, edad, orientación sexual, etc. Incluir a la gente y que todos tengamos representación en la moda.</p></figcaption>
                </figure>
            </section>
        </>
    )
}