import { useState } from "react";
import "./App.css";

export default function App() {
  const [role, setRole] = useState("candidat");
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [email, setEmail] = useState("");
  const [competence, setCompetence] = useState("dev");
  const [villeCand, setVilleCand] = useState("");
  const [nomEnt, setNomEnt] = useState("");
  const [secteur, setSecteur] = useState("tech");
  const [pwd, setPwd] = useState("");
  const [pwdConf, setPwdConf] = useState("");
  const [showPwd, setShowPwd] = useState(false);
  const [showPwdConf, setShowPwdConf] = useState(false);
  const [termsAgree, setTermsAgree] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const getStrengthInfo = (value) => {
    if (!value || value.length < 5) {
      return {
        width: "20%",
        barClass: "password-strength--weak",
        labelClass: "password-label--weak",
        label: "Faible",
      };
    } else if (value.length < 9) {
      return {
        width: "55%",
        barClass: "password-strength--medium",
        labelClass: "password-label--medium",
        label: "Moyen",
      };
    } else {
      return {
        width: "100%",
        barClass: "password-strength--strong",
        labelClass: "password-label--strong",
        label: "Robuste",
      };
    }
  };

  const strength = getStrengthInfo(pwd);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      alert(
        "Succès ! Votre compte E-Kandra a été initié. Un e-mail contenant votre code de validation à 6 chiffres vient de vous être adressé."
      );

      setIsSubmitting(false);
    }, 1200);
  };

  return (
    <div className="registration-page">
      <main className="registration-container">
        <div className="registration-card">

          {/* =================================================
              PANNEAU DE PRÉSENTATION
              ================================================= */}

          <section className="brand-panel">

            {/* Décoration */}
            <div className="brand-decoration brand-decoration--bottom" />
            <div className="brand-decoration brand-decoration--top" />

            <div className="brand-content">

              {/* Logo */}
              <div className="brand-logo">
                <span className="brand-logo-icon">E</span>

                <span className="brand-name">
                  E-KANDRA
                </span>
              </div>

              {/* Présentation */}
              <div className="brand-introduction">

                <span className="brand-badge">
                  Portail Officiel d'Emploi &amp; Recrutement
                </span>

                <h1 className="brand-title">
                  Votre tremplin professionnel commence ici
                </h1>

                <p className="brand-description">
                  Connectez-vous directement à l'écosystème professionnel le
                  plus dynamique. Opportunités vérifiées et visibilité ciblée.
                </p>
              </div>

              {/* Avantages */}
              <div className="benefits-list">

                <div className="benefit-item">
                  <span className="material-symbols-outlined benefit-icon">
                    work_outline
                  </span>

                  <div>
                    <p className="benefit-title">
                      Accédez à des centaines d'offres ciblées
                    </p>

                    <p className="benefit-description">
                      Filtrage instantané par compétences, localisation et
                      prétentions salariales.
                    </p>
                  </div>
                </div>

                <div className="benefit-item">
                  <span className="material-symbols-outlined benefit-icon">
                    verified_user
                  </span>

                  <div>
                    <p className="benefit-title">
                      Mettez en valeur vos talents
                    </p>

                    <p className="benefit-description">
                      Profil enrichi conforme aux standards EKANDRA avec
                      certifications vérifiées.
                    </p>
                  </div>
                </div>

                <div className="benefit-item">
                  <span className="material-symbols-outlined benefit-icon">
                    handshake
                  </span>

                  <div>
                    <p className="benefit-title">
                      Échangez sans intermédiaire
                    </p>

                    <p className="benefit-description">
                      Messagerie directe avec les recruteurs et suivi en temps
                      réel de votre statut.
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Statistiques + témoignage */}
            <div className="brand-footer">

              <div className="statistics">

                <div className="statistic">
                  <p className="statistic-number">
                    +15 000
                  </p>

                  <p className="statistic-label">
                    Candidats
                  </p>
                </div>

                <div className="statistic">
                  <p className="statistic-number statistic-number--blue">
                    +450
                  </p>

                  <p className="statistic-label">
                    Entreprises
                  </p>
                </div>

                <div className="statistic">
                  <p className="statistic-number statistic-number--green">
                    92%
                  </p>

                  <p className="statistic-label">
                    Embauches
                  </p>
                </div>

              </div>

              <div className="testimonial">

                <img
                  className="testimonial-avatar"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA4vM8XF1yPfT-QZ-VF3UA1mZcfFTw2PBqi5iO0QhUrD2dMn8Ilur9GJ3SUGzzEubaQ-lOD75UirVuiospq_UXkteIuT14477caLHTT_il_oQ79AIfV03olhbUDN2A22-rzhWjg1qqs1TX-diEArlcbKZKv4p7CIjfDsFsOMoM6eZOXEsttp-P3cHd4ll9oFVhQ147R3ydTy_nZNqkJVZCsiazbiAi9ZvAymPkkZIOPibrSRrGnGVmY"
                  alt="Mialy Razafindrakoto"
                />

                <div className="testimonial-content">

                  <div className="testimonial-name">
                    <span>
                      Mialy Razafindrakoto
                    </span>

                    <span className="material-symbols-outlined verified-icon">
                      check_circle
                    </span>
                  </div>

                  <p className="testimonial-company">
                    Recrutée chez DataCorp Madagascar
                  </p>

                  <p className="testimonial-message">
                    « Offre obtenue en moins de 10 jours grâce à E-Kandra ! »
                  </p>

                </div>
              </div>

            </div>
          </section>

          {/* =================================================
              PANNEAU FORMULAIRE
              ================================================= */}

          <section className="form-panel">

            <div className="form-content">

              {/* Progression */}
              <div className="step-progress">

                <div className="step step--active">

                  <span className="step-number">
                    1
                  </span>

                  <span className="step-title">
                    Informations &amp; Profil
                  </span>

                </div>

                <div className="progress-line">
                  <div className="progress-line-fill" />
                </div>

                <div className="step step--disabled">

                  <span className="step-number">
                    2
                  </span>

                  <span className="step-title">
                    Validation Email
                  </span>

                </div>

              </div>

              {/* Titre */}
              <h2 className="form-title">
                Créer un nouveau compte
              </h2>

              <p className="form-subtitle">
                Sélectionnez le type d'accès pour personnaliser votre espace.
              </p>

              {/* Sélection du rôle */}
              <div className="role-selector">

                {/* Candidat */}
                <div
                  className={`role-card ${
                    role === "candidat"
                      ? "role-card--selected"
                      : "role-card--inactive"
                  }`}
                  onClick={() => setRole("candidat")}
                >

                  <div>

                    <div className="role-card-header">

                      <span className="material-symbols-outlined role-icon role-icon--candidate">
                        person_search
                      </span>

                      <span className="role-badge role-badge--default">
                        Par défaut
                      </span>

                    </div>

                    <h3 className="role-title">
                      Candidat
                    </h3>

                    <p className="role-description">
                      Postulez aux offres, valorisez vos compétences et suivez
                      vos candidatures en temps réel.
                    </p>

                  </div>

                  <div
                    className={`role-selection ${
                      role === "candidat"
                        ? "role-selection--active"
                        : ""
                    }`}
                  >
                    <span className="material-symbols-outlined">
                      {role === "candidat"
                        ? "radio_button_checked"
                        : "radio_button_unchecked"}
                    </span>

                    <span>
                      Profil Chercheur
                    </span>
                  </div>

                </div>

                {/* Entreprise */}
                <div
                  className={`role-card ${
                    role === "entreprise"
                      ? "role-card--selected"
                      : "role-card--inactive"
                  }`}
                  onClick={() => setRole("entreprise")}
                >

                  <div>

                    <div className="role-card-header">

                      <span className="material-symbols-outlined role-icon role-icon--company">
                        apartment
                      </span>

                      <span className="role-badge">
                        Recruteur
                      </span>

                    </div>

                    <h3 className="role-title">
                      Entreprise
                    </h3>

                    <p className="role-description">
                      Publiez des offres, découvrez les meilleurs profils et
                      gérez vos recrutements facilement.
                    </p>

                  </div>

                  <div
                    className={`role-selection ${
                      role === "entreprise"
                        ? "role-selection--active"
                        : ""
                    }`}
                  >
                    <span className="material-symbols-outlined">
                      {role === "entreprise"
                        ? "radio_button_checked"
                        : "radio_button_unchecked"}
                    </span>

                    <span>
                      Espace Entreprise
                    </span>
                  </div>

                </div>

              </div>

              {/* =================================================
                  FORMULAIRE
                  ================================================= */}

              <form
                className="registration-form"
                onSubmit={handleSubmit}
              >

                {/* Nom + prénom */}
                <div className="form-row">

                  <div className="form-field">

                    <label
                      className="form-label"
                      htmlFor="input-nom"
                    >
                      Nom légal
                    </label>

                    <div className="input-wrapper">

                      <span className="material-symbols-outlined input-icon">
                        badge
                      </span>

                      <input
                        className="form-input"
                        id="input-nom"
                        placeholder="Ex. Rakotondrabe"
                        required
                        type="text"
                        value={nom}
                        onChange={(e) => setNom(e.target.value)}
                      />

                    </div>

                  </div>

                  <div className="form-field">

                    <label
                      className="form-label"
                      htmlFor="input-prenom"
                    >
                      Prénom
                    </label>

                    <div className="input-wrapper">

                      <span className="material-symbols-outlined input-icon">
                        person
                      </span>

                      <input
                        className="form-input"
                        id="input-prenom"
                        placeholder="Ex. Jean-Luc"
                        required
                        type="text"
                        value={prenom}
                        onChange={(e) => setPrenom(e.target.value)}
                      />

                    </div>

                  </div>

                </div>

                {/* Email */}
                <div className="form-field">

                  <label
                    className="form-label"
                    htmlFor="input-email"
                  >
                    {role === "candidat"
                      ? "Adresse e-mail personnelle"
                      : "Adresse e-mail professionnelle"}
                  </label>

                  <div className="input-wrapper">

                    <span className="material-symbols-outlined input-icon">
                      alternate_email
                    </span>

                    <input
                      className="form-input"
                      id="input-email"
                      placeholder="nom@exemple.com"
                      required
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />

                  </div>

                </div>

                {/* Champs candidat */}
                {role === "candidat" && (
                  <div className="form-row">

                    <div className="form-field">

                      <label
                        className="form-label"
                        htmlFor="input-competence"
                      >
                        Domaine principal
                      </label>

                      <div className="input-wrapper">

                        <span className="material-symbols-outlined input-icon">
                          psychology
                        </span>

                        <select
                          className="form-input"
                          id="input-competence"
                          value={competence}
                          onChange={(e) =>
                            setCompetence(e.target.value)
                          }
                        >
                          <option value="dev">
                            Informatique &amp; Développement
                          </option>

                          <option value="marketing">
                            Marketing Digital &amp; Vente
                          </option>

                          <option value="finance">
                            Comptabilité &amp; Finance
                          </option>

                          <option value="rh">
                            Ressources Humaines
                          </option>

                          <option value="logistique">
                            Logistique &amp; Transport
                          </option>
                        </select>

                      </div>

                    </div>

                    <div className="form-field">

                      <label
                        className="form-label"
                        htmlFor="input-ville-cand"
                      >
                        Ville de résidence
                      </label>

                      <div className="input-wrapper">

                        <span className="material-symbols-outlined input-icon">
                          location_on
                        </span>

                        <input
                          className="form-input"
                          id="input-ville-cand"
                          placeholder="Ex. Antananarivo"
                          type="text"
                          value={villeCand}
                          onChange={(e) =>
                            setVilleCand(e.target.value)
                          }
                        />

                      </div>

                    </div>

                  </div>
                )}

                {/* Champs entreprise */}
                {role === "entreprise" && (
                  <div className="form-row">

                    <div className="form-field">

                      <label
                        className="form-label"
                        htmlFor="input-nom-ent"
                      >
                        Raison sociale de l'entreprise
                      </label>

                      <div className="input-wrapper">

                        <span className="material-symbols-outlined input-icon">
                          domain
                        </span>

                        <input
                          className="form-input"
                          id="input-nom-ent"
                          placeholder="Ex. TechVentures SARL"
                          type="text"
                          value={nomEnt}
                          onChange={(e) =>
                            setNomEnt(e.target.value)
                          }
                        />

                      </div>

                    </div>

                    <div className="form-field">

                      <label
                        className="form-label"
                        htmlFor="input-secteur"
                      >
                        Secteur d'activité
                      </label>

                      <div className="input-wrapper">

                        <span className="material-symbols-outlined input-icon">
                          category
                        </span>

                        <select
                          className="form-input"
                          id="input-secteur"
                          value={secteur}
                          onChange={(e) =>
                            setSecteur(e.target.value)
                          }
                        >
                          <option value="tech">
                            Technologies &amp; Services IT
                          </option>

                          <option value="banque">
                            Banque &amp; Assurances
                          </option>

                          <option value="industrie">
                            Industrie &amp; Manufacture
                          </option>

                          <option value="sante">
                            Santé &amp; Pharmacie
                          </option>

                          <option value="commerce">
                            Distribution &amp; Commerce
                          </option>
                        </select>

                      </div>

                    </div>

                  </div>
                )}

                {/* Mot de passe */}
                <div className="form-row">

                  <div className="form-field">

                    <label
                      className="form-label"
                      htmlFor="input-pwd"
                    >
                      Mot de passe
                    </label>

                    <div className="input-wrapper">

                      <span className="material-symbols-outlined input-icon">
                        lock
                      </span>

                      <input
                        className="form-input form-input--password"
                        id="input-pwd"
                        placeholder="8 caractères min."
                        required
                        type={showPwd ? "text" : "password"}
                        value={pwd}
                        onChange={(e) => setPwd(e.target.value)}
                      />

                      <button
                        className="password-toggle"
                        onClick={() => setShowPwd(!showPwd)}
                        type="button"
                      >
                        <span className="material-symbols-outlined">
                          {showPwd
                            ? "visibility_off"
                            : "visibility"}
                        </span>
                      </button>

                    </div>

                  </div>

                  {/* Confirmation */}
                  <div className="form-field">

                    <label
                      className="form-label"
                      htmlFor="input-pwd-conf"
                    >
                      Confirmation
                    </label>

                    <div className="input-wrapper">

                      <span className="material-symbols-outlined input-icon">
                        lock_reset
                      </span>

                      <input
                        className="form-input form-input--password"
                        id="input-pwd-conf"
                        placeholder="Répéter le mot de passe"
                        required
                        type={showPwdConf ? "text" : "password"}
                        value={pwdConf}
                        onChange={(e) =>
                          setPwdConf(e.target.value)
                        }
                      />

                      <button
                        className="password-toggle"
                        onClick={() =>
                          setShowPwdConf(!showPwdConf)
                        }
                        type="button"
                      >
                        <span className="material-symbols-outlined">
                          {showPwdConf
                            ? "visibility_off"
                            : "visibility"}
                        </span>
                      </button>

                    </div>

                  </div>

                </div>

                {/* Force du mot de passe */}
                <div className="password-strength">

                  <div className="password-strength-track">

                    <div
                      className={`password-strength-bar ${strength.barClass}`}
                      style={{
                        width: strength.width,
                      }}
                    />

                  </div>

                  <span
                    className={`password-strength-label ${strength.labelClass}`}
                  >
                    {strength.label}
                  </span>

                </div>

                {/* Information */}
                <div className="verification-notice">

                  <span className="material-symbols-outlined verification-icon">
                    mark_email_read
                  </span>

                  <p className="verification-text">

                    <span className="verification-highlight">
                      Étape suivante :
                    </span>{" "}
                    Un code de validation à 6 chiffres vous sera expédié par
                    e-mail immédiatement après soumission pour certifier votre
                    adresse.

                  </p>

                </div>

                {/* Conditions */}
                <div className="terms-section">

                  <input
                    className="terms-checkbox"
                    id="terms-agree"
                    required
                    type="checkbox"
                    checked={termsAgree}
                    onChange={(e) =>
                      setTermsAgree(e.target.checked)
                    }
                  />

                  <label
                    className="terms-label"
                    htmlFor="terms-agree"
                  >
                    J'accepte les{" "}

                    <a
                      className="terms-link"
                      href="#"
                    >
                      Conditions Générales d'Utilisation
                    </a>{" "}

                    d'E-Kandra et atteste de l'exactitude des informations
                    fournies.
                  </label>

                </div>

                {/* Bouton */}
                <button
                  className="submit-button"
                  type="submit"
                  disabled={isSubmitting}
                >

                  {isSubmitting ? (
                    <>
                      <span className="material-symbols-outlined loading-icon">
                        progress_activity
                      </span>

                      <span>
                        Envoi du code en cours...
                      </span>
                    </>
                  ) : (
                    <>
                      <span>
                        {role === "candidat"
                          ? "Créer mon compte Candidat"
                          : "Créer mon compte Entreprise"}
                      </span>

                      <span className="material-symbols-outlined">
                        arrow_forward
                      </span>
                    </>
                  )}

                </button>

              </form>

              {/* Connexion sociale */}
              <div className="social-login">

                <div className="social-divider">

                  <div className="divider-line" />

                  <span className="divider-text">
                    ou s'inscrire avec
                  </span>

                </div>

                <div className="social-buttons">

                  <button
                    className="social-button"
                    type="button"
                  >
                    <svg
                      className="social-icon"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M12 5c1.6 0 3 .6 4.1 1.7l3.1-3.1C17.3 1.8 14.8 1 12 1 7.4 1 3.5 3.6 1.6 7.4l3.7 2.9C6.2 7.3 8.9 5 12 5z"
                        fill="#EA4335"
                      />

                      <path
                        d="M23.5 12.3c0-.8-.1-1.6-.2-2.3H12v4.5h6.5c-.3 1.5-1.1 2.8-2.4 3.7l3.7 2.9c2.2-2 3.7-5 3.7-8.8z"
                        fill="#4285F4"
                      />

                      <path
                        d="M5.3 14.7c-.2-.7-.4-1.5-.4-2.7s.1-2 .4-2.7L1.6 6.4C.6 8.3 0 10.1 0 12s.6 3.7 1.6 5.6l3.7-2.9z"
                        fill="#FBBC05"
                      />

                      <path
                        d="M12 23c3.2 0 6-1.1 8-3l-3.7-2.9c-1.1.7-2.5 1.2-4.3 1.2-3.1 0-5.8-2.3-6.7-5.3L1.6 16c1.9 3.8 5.8 7 10.4 7z"
                        fill="#34A853"
                      />
                    </svg>

                    <span>
                      Google
                    </span>
                  </button>

                  <button
                    className="social-button"
                    type="button"
                  >
                    <svg
                      className="linkedin-icon"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.45 1.45 0 0 0 1.45-1.45c0-.8-.65-1.46-1.45-1.46s-1.45.66-1.45 1.46c0 .8.65 1.45 1.45 1.45m1.39 9.74v-8.37H5.07v8.37h2.78z" />
                    </svg>

                    <span>
                      LinkedIn
                    </span>
                  </button>

                </div>
              </div>

            </div>

            {/* Footer */}
            <div className="login-footer">

              <p>
                Vous possédez déjà un compte ?{" "}

                <a
                  className="login-link"
                  href="#"
                >
                  Se connecter
                </a>

              </p>

            </div>

          </section>

        </div>
      </main>
    </div>
  );
}
