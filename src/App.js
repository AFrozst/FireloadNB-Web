import { SectionWrapper, SectionTerms } from "./components";
import assets from "./assets";
import styles from "./styles/Global";

const App = () => {
  return (
    <>
      <SectionWrapper
        title="Elabora estudios de carga de fuego con la herramienta de Fireload NB"
        description="Cree, edite y genere reportes de tus estudios de carga de fuego, siguiendo las directrices de la NB 58005 y NB 58002"
        //showBtn
        mockupImg={assets.mobiles02}
        banner="banner"
      />

      <SectionTerms />

      <div className="px-4 py-2 justify-center items-center bg-primary flex-col text-center banner04">
        <p className={`${styles.pText} ${styles.whiteText}`}>
          Copyright © Todos los derechos reservados son de{" "}
          <span className="bold">FrozstDev</span>
        </p>
      </div>
    </>
  );
};

export default App;
