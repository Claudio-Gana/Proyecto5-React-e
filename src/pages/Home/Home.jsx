import { useContext } from 'react';
import { Carousel, Container } from 'react-bootstrap';
import UserContext from '../../contexts/user/UserContext.jsx';
import Products from '../Products/Products.jsx';
import './home.css'

export function Home() {
  const userCtx = useContext( UserContext )
  const { user, verifyingToken, authStatus } = userCtx

  return (
    <Container>
      <h1>{ `Bienvenido ${ user?.fullName || "sin nombre" }` }</h1>
      <Container>

      <div>
        <section className="jumbotron">
      <div className="container-jumbo p-5 mb-4 bg-dark rounded-3">
        <div className="jumbo-txt container-fluid py-5">
          <h1 className="display-5 fw-bold">Diseños Exclusivos</h1>
          <p className="p1 col-md-8 fs-4">
            Hazte notar en cualquier situación o evento, revisa nuestro catalogo donde encontraras tu reloj ideal para cualquier momento (comida, deporte, gala) y si no encuentras el tuyo, entra a nuestro enlace <a href="">personalizado</a> ahi encontraras especialistas que te ayudaran a crear tu propio diseño
          </p>
          <input className="caja-txt" type="text" placeholder="Ingresa tu correo" />
          <button className="btn-caja btn btn-primary btn-lg" type="button">Enviar</button>
          <p className="col-md-8 fs-4">Registra tu correo para que conozcas todos nuestros beneficios y nuevos modelos</p>
        </div>
      </div>
    </section>

    <Container>
      
    <section className="container__testimonio">
        <h2 className="section__title">Mas vendidos</h2>
       
      </section>

      <section id='pro' className="container__testimonio">

      <Products></Products>
      </section>



    </Container>


    <div>
      {/* Showroom */}
      <section className="container__testimonio">
        <h2 className="section__title">Showroom</h2>
      </section>

      {/* Tendencia */}
      <section className="tendencia">
        <div className="tendendia-txt">
          <h2>Lo último en tendencias, diseño y tecnología</h2>
          <p>Vive la experiencia en RJP, el showroom de relojes premium más grande de Chile, y sorpréndete con las últimas tendencias en moda, tecnología y diseño aplicadas en tu próximo reloj.</p>
          <button className="btn-caja btn btn-primary btn-lg" type="button">Más Información</button>
        </div>

        <div className="imgs">
          <img src="../../../src/assets/tienda3.jpeg" alt="tienda" />
        </div>
      </section>
    </div>




    <div>
      {/* Testimonios */}
      <section className="container__testimonio">
        <h2 className="section__title">Testimonios</h2>
      </section>

      <div className="adicional">
        <section className="sec1">
          <h3>Dpium (Oro blanco)</h3>
          <p>Hermoso, increíble diseño y calidad, el oro blanco lejos es lo mejor para llamar la atención y destacar en algún evento</p>
          <h5>
            Emiliano Caram <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
          </h5>
        </section>

        <section className="sec2">
          <h3>Shleby (cuero elite)</h3>
          <p>Es un reloj hermoso dentro de lo simple, pasa desapercibido y eso me encanta, lo recomiendo al 100%</p>
          <h5>
            Mirka Solov <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
          </h5>
        </section>

        <section className="sec2">
          <h3>Ónix (metales finos)</h3>
          <p>Me encantó, se nota la calidad y la correa es súper fácil de ajustar, me recuerda mucho al reloj de mi abuela y lo mejor es que combina con todo lo que me pongo</p>
          <h5>
            Abdeli Pele <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
          </h5>
        </section>

        <section className="sec2">
          <h3>Berilo (Platino)</h3>
          <p>Es la segunda vez que compro este modelo, el otro fue un regalo, todo el proceso fue perfecto, desde la entrega hasta la atención</p>
          <h5>
            Paco Alcacer <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
          </h5>
        </section>

        <section className="sec2">
          <h3>Dpium (Oro rosa)</h3>
          <p>Es lejos otro nivel en reloj, donde voy no paso desapercibida, todos me preguntan dónde lo compré</p>
          <h5>
            Andrea Tomori <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
          </h5>
        </section>
      </div>
    </div>



    <div>
      {/* Blog */}
      <section className="container__testimonio">
        <h2 className="section__title">Blog</h2>
      </section>

      <div className="container__editor">
        <a href="#">
          <div className="editor__item">
            <img src="/../src/assets/img5.jpg" className="editor__img" alt="imagen 1" />
            <p className="editor__circle">Nuevas tendencias en la moda</p>
          </div>
        </a>

        <a href="#">
          <div className="editor__item">
            <img src="../src/assets/img6.jpg" className="editor__img" alt="imagen 2" />
            <p className="editor__circle">Expresa tu estilo</p>
          </div>
        </a>
      </div>
    </div>


    </div>


    

  
        

      </Container>

    </Container>
  )
}