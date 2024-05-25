const Gato = (props) => {
    const extraStyles = props.styles;    
    return (
        <div className="rotative absolute bottom-[15%]" style={extraStyles}>
            <img src="./pictures/gato.png" alt="Cat" className="w-[250px] "></img>
        </div>
    )
}
export default Gato