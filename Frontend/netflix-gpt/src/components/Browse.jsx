
import Header from './Header';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondryContainer from './SecondryContainer';


const Browse = () => {
  useNowPlayingMovies();
 

  return (
    <div>
      <Header/>
      <MainContainer/>
      <SecondryContainer/>
      {/* 
      MaincOntainer
       -VideoBackground
       -videoTtile
      Secondry Container
        -MoviesList*N
        -Cards * N
       */}
    </div>
  )
}

export default Browse