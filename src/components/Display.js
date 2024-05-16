const Display = (props) => {
  const { fecha, lluviaDia, lluviaNoche } = props.data;
  return (
    <div>
      <h1>{fecha}</h1>
      <div>
        <h1>Dia</h1>
        {lluviaDia ? <h1>Lluvia</h1> : <h1>No lluvia</h1>}
      </div>
      <div>
        <h1>Noche</h1>
        {lluviaNoche ? <h1>Lluvia</h1> : <h1>No lluvia</h1>}
      </div>
      {lluviaDia ? <h1>Mal dia para colgar</h1> : <h1>Buen dia para colgar</h1>}
    </div>
  );
};

export default Display;
