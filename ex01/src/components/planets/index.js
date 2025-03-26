import React, { Fragment } from "react";
import Planet from "./planet";

const Planets = () => {
    return (
        <Fragment>
            <h3>Planets List</h3>
            <hr></hr>
            <Planet title="Mercurio" img_url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQPnjssGVXDGZw10UYgTWvqb8u5pefNe90xg&s" information="Mercúrio é o menor[nota 1][nota 2] e mais interno planeta do Sistema Solar, orbitando o Sol a cada 87,969 dias terrestres. A sua órbita tem a maior excentricidade e o seu eixo apresenta a menor inclinação em relação ao plano da órbita dentre todos os planetas do Sistema Solar." link="https://pt.wikipedia.org/wiki/Merc%C3%BArio_(planeta)" link_name="https://pt.wikipedia.org/wiki/Merc%C3%BArio_(planeta)" />
        </Fragment>
    )
}
export default Planets