import { Header } from "./components/Header";
import {Post} from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import styles from './App.module.css';

import  '../src/global.css';

const posts =[
  {
    id:1,
    author:{
      avatarUrl: 'https://github.com/ederlanaugusto.png',
      name: 'Ederlan Augusto de Souza',
      role: 'Web developer'
    },
    content:[
      { type:'paragraph', content: 'Fala galeraa 👋'},
      { type:'paragraph', content:'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      { type:'link', content:'jane.design/doctorcare'},
      
    ],
    publishedAt: new Date('2023-03-21 20:00:00'),
  },
  {
    id:2,
    author:{
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'CTO @ RocketSeat'
    },
    content:[
      { type:'paragraph', content: 'Fala galeraa 👋'},
      { type:'paragraph', content:'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      { type:'link', content:'jane.design/doctorcare'},
      
    ],
    publishedAt: new Date('2023-05-03 20:00:00'),
  },
  {
    id:3,
    author:{
      avatarUrl: 'https://github.com/maykbrito.png',
      name: 'Mayk Brito',
      role: 'Educator @ RocketSeat'
    },
    content:[
      { type:'paragraph', content: 'Fala galeraa 👋'},
      { type:'paragraph', content:'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      { type:'link', content:'jane.design/doctorcare'},
      
    ],
    publishedAt: new Date('2023-05-10 20:00:00'),
  }    
];

export function App() {
  
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
       <Sidebar />
        <main>
          {posts.map(post => {
              return ( 
                <Post 
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              
                />
              )
            })}
        </main>
      </div>
   </>
  )
}


