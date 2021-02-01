import React, { Component } from "react";
import "./Body.scss";
class Body extends Component {
  data = [
    {
      id: 1,
      lan: "Java",
      task: "128 ta",
      bol: "38 ta",
      des:
        "Java - silno tipirovannyy obyektno orientirovann yysag yazyk programmirovaniya, razrabotannyy kompaniey Sun Microsystems. V nastoyashchee vremya proekt matlenejit OpenSource i rasprof ranya yaetsya po litsenzii GPL. V OpenJDK vnosyat vklad krupnye kompanii, sochi kak - Oracle, RedHat, IBM, Google",
    },
    {
      id: 2,
      lan: "PYTHON",
      task: "128 ta",
      bol: "38 ta",
      des:
        "Python - vysokourovnevyy yazyk programirovaniya obshchego naznacheniya, orientirovannyy na povyshenie proizvoditelnosti razrabotchika i chitaemosti koda. Syntaxxd Python minimalis tichen. V toni vremya standartnaya biblioteka vklyuchaet bolshoy ob'yom poleznyx fonksiyont",
    },
    {
      id: 3,
      lan: "GO",
      task: "128 ta",
      bol: "38 ta",
      des: 
        "Java - silno tipirovannyy obyektno orientirovann yysag yazyk programmirovaniya, razrabotannyy kompaniey Sun Microsystems. V nastoyashchee vremya proekt matlenejit OpenSource i rasprof ranya yaetsya po litsenzii GPL. V OpenJDK vnosyat vklad krupnye kompanii, sochi kak - Oracle, RedHat, IBM, Google",
    },
  ];

  render() {
    return (
      <div id="body">
        <div className="container">
          <div className="bolimlar">
            <Bolimlar title="Bajarilgan toprishiriqlar" />
            <Bolimlar title="Bajarilgan bo'limlar" />
            <Bolimlar title="Dasturlash tillari" />
          </div>
          <h3>Xozirda sizda kurslar mavjud emas</h3>
          <div id="CreateCourse">
            <CreatCourse />
          </div>
          <div className="courses">
            <div>
              <h3>Barcha kurslar</h3>
              <button>Barchasi</button>
            </div>
            <div>
              {this.data.map((c) => {
                return (
                  <Course
                    key={c.id}
                    lan={c.lan}
                    task={c.task}
                    bol={c.bol}
                    des={c.des}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const Course = (props) => {
  return (
    <div>
      <div>
        <h2>{props.lan}</h2>
        <span>
          <b>{props.task}</b> topshiriq | <b>{props.bol} </b> bo'lim
        </span>
        <hr />
        <p>{props.des}</p>
        <button>Kursni boshlash &rarr;</button>
      </div>
    </div>
  );
};

const CreatCourse = () => {
  return (
    <div className="addCourse">
      <button>+ Kurs yaratish</button>
    </div>
  );
};

const Bolimlar = (props) => {
  return (
    <div>
      <div>
        <h6> {props.title}</h6>
        <p className="number">0</p>
        <p>
          <i class="fas fa-caret-down"></i>
          <span>Bugun 0 ta</span>
        </p>
      </div>
    </div>
  );
};

export default Body;
