import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import AppLayout from './layout/AppLayout';
import HomePage from './pages/Homepage/HomePage';
import MovieDetailPage from './pages/MovieDetail/MovieDetailPage';
import MoviePage from './pages/Movies/MoviePage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import 'bootstrap/dist/css/bootstrap.min.css';

//홈페이지 /
//영화 전체 페이지 (서치) /movies
//영화 디테일 페이지 /movies/:id
//추천 영화 /movies/:id/recommandation
//리뷰 /movies/:id/reviews

function App() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout/>}> //user 호ㅏ면
        <Route index element={<HomePage/>}/> //index=  부모에서 준 path="/" 그대로 쓰겠다
        <Route path="movies">
          <Route index element={<MoviePage/>}/>
          <Route path=":id" element={<MovieDetailPage/>}/>
        </Route>
        {/*<Route path="/Movies" element={<MoviePage/>}/>
        <Route path="/Movies/:id" element={<MovieDetailPage/>}/> */}
      </Route>

      <Route path="*" element={<NotFoundPage/>}/>
    </Routes>
  );
}

export default App;
