import React, { Component } from "react";
import { Link, useNavigate } from "react-router-dom";
//import { Context } from "../store/appContext";
//QUE ACROBACIA Y MOVIMIENTO SEAN LINKS Q LLEVEN A LAS SECCIONES CORRESPONDIENTES
//A DEFINIR IGUAL, ESPEREN A QUE TERMINE DE DISENAR TODO
//RECORDATORIO: SACAR DE LA PAGINA OFICIAL QUE TIENE MUCHO CONTENIDO

export const Individualizado = () => {
  const vertiEstudiantesx3 =
    "http://drive.google.com/uc?export=view&id=1xha1VxiXzaxeHKFmrVmfuT1OPiaFC2vV";
  const rickyMeathook1 =
    "http://drive.google.com/uc?export=view&id=1e2hDD8X_O3vNU5Je0TGH9-GBXoJzTXk-";
  const homeManosPalos =
    "http://drive.google.com/uc?export=view&id=1btEgS-YApCjojathrlABP-PSRfjVLVHc";
  const homeSentadilla =
    "http://drive.google.com/uc?export=view&id=1TGRnvUqtbIuVqRk3VjJ1tbidiypKnufY";
  const martinSquatPastoColor =
    "http://drive.google.com/uc?export=view&id=1-lc60dKkD4CxJ8L1sLK_iJ4JckELH5dq";
  const cuadrupMono =
    "http://drive.google.com/uc?export=view&id=19pDJ9sS_Hk3PCntjtS-2WkA0T4hTBPam";

  https: return (
    <>
      <div
        className="container-fluid ps-0 pt-5 mt-5 border border-warning rounded"
        style={{
          backgroundImage: `url(${martinSquatPastoColor})`,
          backgroundSize: "cover",
        }}
      >
        <div className="container service-content bg-white bg-opacity-75 rounded p-5 text-center">
          <h1 className="text fs-4">¿Te gustaría tener disponibilidad para elegir como moverte?</h1>
          <p>
            Hay movimientos que requieren fuerza, movilidad y equilibrio, que
            probablemente quieras realizar <br />
            ¡Entrenemos juntos para que tengas las herramientas necesarias para
            resolverlos!</p>
          <iframe
            className="embeddedVideo border border-warning"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/387gIc7tLVo"
            title="Entrenamiento Individualizado"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <section className="service mt-5 pt-5">
            <div className="container">
              <div className="content d-flex flex-wrap">
                <div className="content-left w-50">
                  <h2>El proceso:</h2>
                  <ul>
                    <li className="d-flex">
                      <div className="text">
                        <h3>Modus Operandi</h3>
                        <p><i className="far fa-check-circle"></i>Hacemos una evaluación de movilidad, control motor y fuerza en función de tus intereses,
                          objetivos, frecuencia de entrenamiento posible y materiales a disposición. Luego,
                          elaboramos un plan detallado, te acompañamos en el proceso, y juntos, mes a mes,
                          evaluamos los resultados.
                        </p>
                      </div>
                    </li>
                    <li className="d-flex flex-wrap">
                      <div className="text">
                        <h3>Áreas de trabajo:</h3>
                        <ul>
                          <li><i className="far fa-check-circle"></i>Fuerza</li>
                          <li><i className="far fa-check-circle"></i>Movilidad</li>
                          <li><i className="far fa-check-circle"></i>Parada de Manos</li>
                        </ul>
                      </div>
                      <div className="text">
                        <h3>Contenido:</h3>
                        <ul>
                          <li><i className="far fa-check-circle"></i>Calendario de entrenamiento,
                            rutinas diferenciadas, esquemas para progresar semana a semana
                            y videos de demostración de cada ejercicio incluyendo entrada en calor.</li>
                          <li><i className="far fa-check-circle"></i>2 instancias de devolución de la ejecución de los ejercicios (semana 1 y semana 4)</li>
                          <li><i className="far fa-check-circle"></i>Canal abierto de comunicación durante todo el mes: WhatsApp o mail para sacarte dudas en el día a día</li>
                          <li><i className="far fa-check-circle"></i>Material de estudio adicional a la programación</li>
                          <li><i className="far fa-check-circle"></i>Acceso a la plataforma de Discord donde podés conectar con otros alumnos que entrenan bajo este sistema.</li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="content-right w-50">
                  <img
                    className="border border-warning rounded"
                    src={rickyMeathook1}
                    alt="Foto blanco y negro de un alumno haciendo un meathook en anillas"
                  />{" "}
                  <img
                    className="border border-warning rounded"
                    src={cuadrupMono}
                    alt="Foto blanco y negro de Martín y un alumno haciendo caminando en cuadrupedia"
                  />{" "}
                  <img
                    className="border border-warning rounded"
                    src={vertiEstudiantesx3}
                    alt="Foto blanco y negro de tres personas haciendo vertical"
                  />{" "}
                  <img
                    className="border border-warning rounded"
                    src={homeManosPalos}
                    alt="Foto blanco y negro de varios pares de manos sosteniendo un palo"
                  />{" "}
                  <img
                    className="border border-warning rounded"
                    src={homeSentadilla}
                    alt="Foto blanco y negro de un alumno de espaldas haciendo sentadilla con una barra olímpica y discos"
                  />
                  {""}
                </div>
              </div>
            </div>
          </section>
          <section className="service-2">
            <h1 className="text fs-4">¿Todavía te quedan dudas?</h1>
            <p>Te presento a Ricky, uno de mis primeros alumnos y de los <strong>más ambiciosos</strong>.
              Cuando empezamos se propuso lograr el push up en vertical,
              dominadas a un brazo y mejorar la fuerza de piernas para saltar.
              Iba a hacer todo lo necesario para <strong>lograrlo</strong>... y llegó a eso y más.</p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/Z4uBn9YliZ4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <p>Elaboramos diferentes estrategias de trabajo para ir sorteando todas las dificultades
              que se nos presentaban y el video es el resultado de un proceso de 3 años en el que pudimos
              entrenar de forma <strong>consistente</strong>, avanzando de forma <strong>paciente</strong> y lo más importante:
              <strong>sin lesiones</strong> durante todo ese período.<br />
              Hoy en día seguimos trabajando juntos con nuevos proyectos.</p>
          </section>
          <section className="service-3">
            <div id="accordion">
              <div className="card">
                <div className="card-header" id="headingOne">
                  <h5 className="mb-0">
                    <button className="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                      ¿En qué consta el trabajo de fuerza?
                    </button>
                  </h5>
                </div>

                <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                  <div className="card-body">
                    Buscamos aumentar los niveles de fuerza con ejercicios que te enseñen a mover mejor tu cuerpo.
                    La fuerza de base es fundamental y vamos a trabajar con objetivos claros eligiendo los ejercicios que te den el mejor resultado en la menor inversión de tiempo.
                    Podés empezar con lo que puedas HOY. No necesitás hacer ni push up ni dominadas para empezar. Te podemos ayudar.
                    También vamos a acompañarte a lograr esos ejercicios que tenés ganas de hacer con progresiones que te acerquen desde la fuerza a la habilidad deseada en sus
                    niveles más avanzados (por ejemplo,
                    muscle up, verticales a fuerza, sentadillas a una pierna, handstand push up, etc.).
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" id="headingTwo">
                  <h5 className="mb-0">
                    <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                      ¿Tengo que ser tan bueno como el chico del video?
                    </button>
                  </h5>
                </div>
                <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                  <div className="card-body">
                    En el video te quiero mostrar lo que logramos con Ricky en 3 años de trabajo. En donde no solo logró niveles de fuerza de elite si no que lo hizo con un proceso ordenado, claro y SIN LESIONES.
                    Esto no quiere decir que tenés que proponerte lo mismo que él, pero quiero que sepas que si te comprometés a trabajar conmigo de forma seria, podemos lograr grandes cosas.
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" id="headingThree">
                  <h5 className="mb-0">
                    <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                      ¿Necesito saber algo para trabajar parada de manos?
                    </button>
                  </h5>
                </div>
                <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                  <div className="card-body">
                    ¡No! Es para todos los niveles. La mayoría de nuestros alumnos han comenzado sin experiencia y muchos/as ya han logrado sus primeras verticales sólidas.
                    Si ya tenés experiencia o tenés objetivos ambiciosos, también te podemos ayudar a consolidar la vertical en dos manos y
                    acompañarte en el proceso de entrenamiento para la vertical a un brazo.
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" id="headingFour">
                  <h5 className="mb-0">
                    <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                      Mi movilidad es muy limitada... ¿puedo participar igual?
                    </button>
                  </h5>
                </div>
                <div id="collapseFour" className="collapse" aria-labelledby="headingFour" data-parent="#accordion">
                  <div className="card-body">
                    Por supuesto. Vamos a buscar recuperar los niveles de amplitud de movimiento de tus articulaciones para que te puedas mover con mayor libertad.
                    Poco a poco vamos a construir fuerza a lo largo de todo el rango de movimiento para llegar a trabajar movimientos como puentes, plegados y splits.
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" id="headingFive">
                  <h5 className="mb-0">
                    <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                      ¿Qué materiales necesito?
                    </button>
                  </h5>
                </div>
                <div id="collapseFive" className="collapse" aria-labelledby="headingFive" data-parent="#accordion">
                  <div className="card-body">
                    Nosotros nos adaptamos a tus posibilidades. Si entrenás en tu casa te podemos recomendar opciones para aprovechar lo que tenés a disposición.
                    También te podemos asesorar en el orden de compra de materiales para entrenar mejor en tu hogar sin gastar de más.
                    Si entrenás en un gimnasio, ¡excelente también! ¡Vamos a aprovechar al máximo los materiales del salón!
                    Ideal en el hogar en orden de prioridades: mancuernas con peso, barra en el marco de la puerta y/o anillas.
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" id="headingSix">
                  <h5 className="mb-0">
                    <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                      ¿Cuál es la frecuencia de entrenamiento?
                    </button>
                  </h5>
                </div>
                <div id="collapseSix" className="collapse" aria-labelledby="headingSix" data-parent="#accordion">
                  <div className="card-body">
                    Recomendamos realizar un entrenamiento diario de 60/90 minutos de Lunes a Sábados. Pero el programa se ajusta al cronograma semanal de cada alumno
                    En función de tu posibilidad vamos a organizar los contenidos de trabajo en diferentes rutinas que se acomodarán a tu calendario.
                    Éstas pueden ser: cuerpo completo o split tren superior/inferior, verticales y movilidad u otras variantes personalizadas que trabajamos según lo que cada alumno/a necesite.
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" id="headingSeven">
                  <h5 className="mb-0">
                    <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                      ¿Qué pasa si tengo alguna lesión preexistente?
                    </button>
                  </h5>
                </div>
                <div id="collapseSeven" className="collapse" aria-labelledby="headingSeven" data-parent="#accordion">
                  <div className="card-body">
                    Una vez que tenés el alta del kinesiólogo, podemos trabajar para facilitar la recuperación.
                    El trabajo de fuerza y movilidad que vamos a hacer va a colaborar con el proceso.
                    Quiero agregar tambien que no registramos lesiones en nuestros/as alumnos/as a distancia.
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div >
      </div >
    </>
  );
};

export default Individualizado;
