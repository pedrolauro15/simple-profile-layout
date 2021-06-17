import React from "react";
import PasswordInput from "../../components/passwordf-input";
import "./styles.css";

export const ProfilePage: React.FC = () => {
  const PHOTO_URL =
    "https://image.freepik.com/fotos-gratis/cara-bonito-e-feliz-sentado-em-um-cafe-bebendo-limonada-e-usando-o-celular-rindo-de-mensagens-de-texto_176420-25740.jpg";

  const FACBOOK_LOGO = "https://imagens.canaltech.com.br/empresas/644.400.jpg";

  const TWITTER_LOGO = "https://www.al.al.leg.br/imagens/Twitterlogo.png/image";

  return (
    <main id="profile_page">
      <section className="left">
        <header>
          <h1>John Esrom</h1>
          <span>@John</span>
        </header>
        <img src={PHOTO_URL} alt="Profile" />
        <button>Upload foto</button>
        <div className="area">
          <p>
            Faça upload da sua foto de perfil e faça nharra e uril até umas
            horas miau
          </p>
          <span>
            Upload máximo <strong>1mb</strong>
          </span>
        </div>
        <span className="footer-text">
          Membro desde <strong>9 de fevereiro de 2019</strong>
        </span>
      </section>
      <section className="right">
        <header>
          <h1>Editar Perfil</h1>
        </header>
        <form>
          <div className="user">
            <section>
              <div className="field">
                <label>Nome</label>
                <input type="text" placeholder="Nome" />
              </div>
              
              <PasswordInput title="Senha" />
              <div className="field">
                <label>Email</label>
                <input type="mail" placeholder="Email" />
              </div>
            </section>
            <section>
              <div className="field">
                <label>Usuário</label>
                <input type="text" placeholder="Usuario" />
              </div>
              <div className="field">
                <label>Confirmar senha</label>
                <input type="password" placeholder="Confirmar senha" />
              </div>
              <div className="field">
                <label>Confirmar email</label>
                <input type="mail" placeholder="Confirmar email" />
              </div>
            </section>
          </div>

          <div className="social">
            <h2>Redes Sociais</h2>
            <div className="area">
              <div className="field">
                <label>Facebook</label>
                <div className="input_container">
                  <div className="img_container">
                    <img src={FACBOOK_LOGO} alt="Facebook" />
                  </div>
                  <input type="text" placeholder="Facebook" />
                </div>
              </div>

              <div className="field">
                <label>Twitter</label>
                <div className="input_container">
                  <div className="img_container">
                    <img src={TWITTER_LOGO} alt="Twitter" />
                  </div>
                  <input type="text" placeholder="Twitter" />
                </div>
              </div>
            </div>
          </div>

          <footer>
            <button>Cadastrar</button>
          </footer>
        </form>
      </section>
    </main>
  );
};
