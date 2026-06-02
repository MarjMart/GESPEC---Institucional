
:root {
    --bg: #0b0f17;
    --surface: #111827;
    --card: #161f2e;
    --text: #e5e7eb;
    --muted: #9ca3af;
    --primary: #4f7cff;
    --primary-dark: #3b5edc;
    --border: rgba(255, 255, 255, 0.08);
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Inter", sans-serif;
}

body {
    background: var(--bg);
    color: var(--text);
    line-height: 1.6;
}

/* NAVBAR */
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 18px 6%;
    position: sticky;
    top: 0;
    background: rgba(11, 15, 23, 0.8);
    backdrop-filter: blur(10px);
    border-bottom: 1px solid var(--border);
    z-index: 1000;
}

.nav-links a {
    margin: 0 12px;
    text-decoration: none;
    color: var(--muted);
    font-weight: 500;
    transition: 0.3s;
}

.nav-links a:hover {
    color: var(--text);
}

.btn-nav {
    background: var(--primary);
    color: white;
    padding: 10px 16px;
    border-radius: 8px;
    text-decoration: none;
    font-weight: 600;
    transition: 0.3s;
}

.btn-nav:hover {
    background: var(--primary-dark);
}

/* HERO */
.hero {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 90px 6%;
    gap: 40px;
}

.hero-content {
    max-width: 520px;
}

.hero h1 {
    font-size: 42px;
    line-height: 1.2;
    margin-bottom: 16px;
}

.hero p {
    color: var(--muted);
    font-size: 16px;
    margin-bottom: 24px;
}

.hero-buttons {
    display: flex;
    gap: 12px;
}

.btn-primary {
    background: var(--primary);
    color: white;
    padding: 12px 18px;
    border-radius: 10px;
    text-decoration: none;
    font-weight: 600;
}

.btn-primary:hover {
    background: var(--primary-dark);
}

.btn-secondary {
    border: 1px solid var(--border);
    color: var(--text);
    padding: 12px 18px;
    border-radius: 10px;
    text-decoration: none;
}

.hero-image img {
    width: 520px;
    border-radius: 14px;
    border: 1px solid var(--border);
    box-shadow: 0 20px 60px rgba(0,0,0,0.4);
}

/* SEÇÕES */
section {
    padding: 80px 6%;
}

/* TITULOS */
.section-title {
    text-align: center;
    margin-bottom: 40px;
}

.section-title h2 {
    font-size: 32px;
    margin-bottom: 8px;
}

.section-title p {
    color: var(--muted);
}

/* SCREEN GRID */
.screens-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 18px;
}

.screen-card {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 14px;
    overflow: hidden;
    transition: 0.3s;
}

.screen-card:hover {
    transform: translateY(-5px);
}

.screen-card img {
    width: 100%;
    display: block;
}

.screen-card h3 {
    padding: 12px;
    font-size: 14px;
    color: var(--text);
}

/* BENEFÍCIOS */
.pillars-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 18px;
}

.pillar-card {
    background: var(--surface);
    border: 1px solid var(--border);
    padding: 20px;
    border-radius: 14px;
}

.icon-box {
    font-size: 20px;
    margin-bottom: 10px;
    color: var(--primary);
}

.pillar-card h3 {
    margin-bottom: 8px;
}

.pillar-card p {
    color: var(--muted);
    font-size: 14px;
}

/* CTA */
.cta-section {
    text-align: center;
    background: linear-gradient(135deg, var(--surface), var(--card));
    border-top: 1px solid var(--border);
    border-bottom: 1px solid var(--border);
}

.cta-section h2 {
    font-size: 28px;
    margin-bottom: 10px;
}

.cta-section p {
    color: var(--muted);
    margin-bottom: 20px;
}

/* MODAL */
.modal-overlay {
    position: fixed;
    inset: 0;
    background: rgba(0,0,0,0.6);
    display: none;
    align-items: center;
    justify-content: center;
}

.modal-card {
    background: var(--surface);
    padding: 24px;
    border-radius: 14px;
    width: 90%;
    max-width: 520px;
    border: 1px solid var(--border);
}

.modal-fechar {
    background: none;
    border: none;
    color: var(--text);
    font-size: 24px;
    float: right;
    cursor: pointer;
}

/* FORM */
.modal-form input,
.modal-form textarea {
    width: 100%;
    padding: 10px;
    margin-top: 6px;
    border-radius: 8px;
    border: 1px solid var(--border);
    background: var(--bg);
    color: var(--text);
}

.btn-enviar-form {
    margin-top: 12px;
    width: 100%;
    padding: 12px;
    background: var(--primary);
    border: none;
    color: white;
    border-radius: 10px;
    cursor: pointer;
}

.btn-enviar-form:hover {
    background: var(--primary-dark);
}

/* RESPONSIVO */
@media (max-width: 900px) {

    .hero {
        flex-direction: column;
        text-align: center;
    }

    .hero-image img {
        width: 100%;
        max-width: 420px;
    }

    .hero-buttons {
        justify-content: center;
        flex-wrap: wrap;
    }
}
