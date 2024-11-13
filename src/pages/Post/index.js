import './Post.css';
import { Routes, Route, useParams, useLocation } from "react-router-dom";
import posts from 'json/posts.json';
import PostModelo from "componentes/PostModelo";
import Markdown from "react-markdown";
import NaoEncontrada from 'pages/NaoEncontrada';
import PaginaPadrao from 'componentes/PaginaPadrao';
import PostCard from 'componentes/PostCard';
import { useEffect } from 'react';

export default function Post() {
    const {id} = useParams();
    let contador = 0;

    const path = useLocation();

    useEffect(() => { //faz a página voltar ao topo, quando um novo post é aberto nos recomendados.
        window.scrollTo(0,0)
    }, [path.pathname])

    const post = posts.find(post => String(post.id) === String(id));

    return (
        post ? <Routes>
                    <Route path="*" element={<PaginaPadrao />}>
                        <Route
                            index 
                            element={<PostModelo
                                fotoCapa={`/assets/posts/${post.id}/capa.png`}
                                titulo={post.titulo}
                            >
                                <h2>{post.titulo}</h2>
                                <div className='post-markdown-container'>
                                    <Markdown>
                                        {post.texto}
                                    </Markdown>
                                </div>

                               <div className='postsRecomendados'> <h2>Outros posts que você pode gostar:</h2>  <ul>
                                   {posts.map((post) => {
                                        if (String(post.id) !== String(id) && contador < 4) {
                                            contador++;
                                            return (
                                                <PostCard key={post.id} post={post}/>
                                            )
                                        } else {
                                            return null;
                                        }
                                   })} 
                                </ul> </div>
                            </PostModelo>}
                        />
                    </Route>
        </Routes> : <NaoEncontrada />
    )
}