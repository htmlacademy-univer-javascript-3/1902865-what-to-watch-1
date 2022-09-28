import MainPage from '../../pages/main-page/main-page';
type AppProps={
  FilmInfo:{
    name:string,
    genre:string,
    date:number,}
}
function App(props:AppProps): JSX.Element {
  return <MainPage name={props.FilmInfo.name} date={props.FilmInfo.date} genre={props.FilmInfo.genre}/>;
}

export default App;
