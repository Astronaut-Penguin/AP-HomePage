//- Import React
import React, { useState } from "react";

//- Import Expandable Component
import "@blueprintjs/core/lib/css/blueprint.css";
import { Collapse, Button } from "@blueprintjs/core";

//- Import Styles
import styles from "./Us.module.css";

//- Import Components
import Title from "../../components/title/title";
import CtaButton from "../../components/Button/CtaButton/CtaButton";

//- Import Images
import Penguin1 from "./assets/penguin1.png";
import Penguin2 from "./assets/penguin2.png";
import Penguin3 from "./assets/penguin3.png";
import Arrow from "./assets/arrow.svg";

const UsSection = () => {
  const [s, setS] = useState(0);
  const [isOpen, setIsOpen] = React.useState(false);
  // const [show, setShow] = React.useState(false);

  return (
    <section className={styles.Container}>
      <div className={styles.UsContainer}>
        <Title text={"Us"} />
      </div>
      <div className={styles.Penguins}>
        <div className={styles.Background}></div>

        <a onClick={() => setS(1)}>
          <img src={Penguin2} className={styles.Facu} />
          {s == 1 ? (
            <div className={styles.Info} style={{marginLeft: '205px', marginTop: '35px'}}>
              <div className={styles.Line}></div>
              <div className={styles.SecondLineLeft}></div>
              <div className={styles.CircleLeft}></div>
              <h2 className={styles.PersonLeft}>Facu</h2>
              <h3 className={styles.JobLeft}>DOMADOR DE LEONES</h3>
            </div>
          ) : (
            null
          )}
        </a>

        <a onClick={() => setS(2)}>
          <img src={Penguin1} className={styles.Ale} />
          {s == 2 ? (
            <div className={styles.Info} style={{marginLeft: '132px', marginTop: '15px'}}>
              <div className={styles.Line} style={{width: '120px'}}></div>
              <div className={styles.SecondLineLeft} style={{top: '170px', left: '57px'}}></div>
              <div className={styles.CircleLeft} style={{top: '168px', left: '55px'}}></div>
              <h2 className={styles.PersonLeft} style={{top: '140px', left: '48px'}}>Ale</h2>
              <h3 className={styles.JobLeft} style={{top: '170px', left: '42px'}}>BARRENDERO</h3>
            </div>
          ) : (
            null
          )}
        </a>

        <a onClick={() => setS(3)}>
          <img src={Penguin1} className={styles.Flor} />
          {s == 3 ? (
            <div className={styles.Info} style={{marginLeft: '135px', marginTop: '45px'}}>
              <div className={styles.Line}></div>
              <div className={styles.SecondLineLeft}></div>
              <div className={styles.CircleLeft}></div>
              <h2 className={styles.PersonLeft} style={{left: '5px'}}>Flor</h2>
              <h3 className={styles.JobLeft}>PINTA CASAS</h3>
            </div>
          ) : (
            null
          )}
        </a>

        <a onClick={() => setS(4)}>
          <img src={Penguin2} className={styles.Penguin} />
          {s == 4 ? (
            <div className={styles.Info} style={{marginLeft: '75px', marginTop: '20px'}}>
              <div className={styles.Line} style={{width: '110px'}}></div>
              <div className={styles.SecondLine} style={{top: '166px', left: '61px'}}></div>
              <div className={styles.Circle} style={{top: '165px', left: '70px'}}></div>
              <h2 className={styles.Person} style={{top: '138px', left: '80px'}}>Penguin</h2>
              <h3 className={styles.Job} style={{top: '169px', left: '76px'}}>GERENTE EN UN ZOO</h3>
            </div>
          ) : (
            null
          )}
        </a>

        <a onClick={() => setS(5)}>
          <img src={Penguin3} className={styles.Mati} />
          {s == 5 ? (
            <div className={styles.Info} style={{marginLeft: '10px', marginTop: '15px'}}>
              <div className={styles.Line} style={{width: '130px'}}></div>
              <div className={styles.SecondLine} style={{top: '176px', left: '70px'}}></div>
              <div className={styles.Circle} style={{top: '175px', left: '80px'}}></div>
              <h2 className={styles.Person} style={{top: '148px', left: '90px'}}>Mati</h2>
              <h3 className={styles.Job} style={{top: '178px', left: '70px'}}>PROFE DE PADEL</h3>
            </div>
          ) : (
            null
          )}
        </a>

        <a onClick={() => setS(6)}>
          <img src={Penguin3} className={styles.Agus} />
          {s == 6 ? (
            <div className={styles.Info} style={{marginLeft: '80px', marginTop: '45px'}}>
              <div className={styles.Line}></div>
              <div className={styles.SecondLine} style={{left: '36px'}}></div>
              <div className={styles.Circle} style={{left: '46px'}}></div>
              <h2 className={styles.Person}>Agus</h2>
              <h3 className={styles.Job} style={{left: '38px'}}>CORREDORA DE BOLSA</h3>
            </div>
          ) : (
            null
          )}
        </a>

        <a onClick={() => setS(7)}>
          <img src={Penguin2} className={styles.Diego} />
          {s == 7 ? (
            <div className={styles.Info} style={{marginLeft: '10px', marginTop: '40px'}}>
              <div className={styles.Line}></div>
              <div className={styles.SecondLine} style={{left: '36px'}}></div>
              <div className={styles.Circle} style={{left: '46px'}}></div>
              <h2 className={styles.Person}>Diego</h2>
              <h3 className={styles.Job} style={{left: '38px'}}>DOBLE DEL DOBLE DE BRUCE WILLIS</h3>
            </div>
          ) : (
            null
          )}
        </a>
      </div>

      <div className={styles.TextContainer}>
        <h4 className={styles.WeMake}>We make experiences.</h4>
        <h4 className={styles.OurTeam}>
          Our team is qualified to accomplish your project and make it real.
        </h4>

        <Collapse isOpen={isOpen} className={styles.OurTeam}>
          We are a multi-disciplinary team of experts in different areas. With
          focus on new technologies such as Blockchain, NFTs, Web 3.0 and the
          ultimate trends on design and digital production systems.
        </Collapse>
        <a onClick={() => setIsOpen(!isOpen)} className={styles.Button}>
          {isOpen ? (
            <img className={styles.ImgOpen} src={Arrow} />
          ) : (
            <img className={styles.Img} src={Arrow} />
          )}
        </a>
        
      </div>

      <div className={styles.ButtonContainer}>
        <CtaButton text={"Contact us"} />
      </div>
    </section>
  );
};

export default UsSection;
