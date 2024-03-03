import styled from "@emotion/styled"

const Contenedor = styled.div`
    color: #FFF;
    font-family: 'Lato', sans-serif;
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: 30px;
`

const Imagen = styled.img`
    display: block;
    width: 120px;
`

const Texto = styled.p`
    font-size: 16px;
    span{
        font-weight: 700;
    }
`

const Precio = styled.p`
    font-size: 24px;
    span{
        font-weight: 700;
    }
`

const Resultado = ({ resultado }) => {
    const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } = resultado
    return (
        <Contenedor>
            <Imagen src={`https://cryptocompare.com/${IMAGEURL}`} alt="Icono cripto" />
            <div>
                <Precio>El precio es de: <span>{PRICE}</span></Precio>
                <Texto>Precio mas alto del dia es de: <span>{HIGHDAY}</span></Texto>
                <Texto>Precio mas bajo del dia es de: <span>{LOWDAY}</span></Texto>
                <Texto>Variación ultimas 24 horas: <span>{CHANGEPCT24HOUR}</span></Texto>
                <Texto>Última Actualización <span>{LASTUPDATE}</span></Texto>
            </div>
        </Contenedor>
    )
}

export default Resultado