from pathlib import Path

login_css = '''body {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: var(--background);
}

main {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5rem 1rem 3rem;
}

.auth-page {
  width: 100%;
}

.auth-card {
  max-width: 420px;
  margin: 0 auto;
  background: var(--surface);
  border-radius: 28px;
  padding: 2.25rem;
  box-shadow: var(--shadow);
  border: 1px solid rgba(0, 0, 0, 0.05);
}

.auth-card h1 {
  margin-bottom: 0.5rem;
  font-size: 2rem;
}

.auth-card p {
  color: var(--muted);
  margin-bottom: 1.75rem;
  line-height: 1.7;
}

.auth-form {
  display: grid;
  gap: 1rem;
}

.auth-form label {
  font-weight: 600;
  color: var(--text);
}

.auth-form input {
  width: 100%;
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 1rem 1.1rem;
}

.auth-form input:focus {
  outline: none;
  border-color: rgba(186, 93, 47, 0.7);
  box-shadow: 0 0 0 4px rgba(186, 93, 47, 0.12);
}

.button {
  width: 100%;
  border: none;
  cursor: pointer;
  padding: 1rem 1.1rem;
  border-radius: 999px;
}

.auth-switch {
  margin-top: 1.2rem;
  text-align: center;
  color: var(--muted);
}

.auth-switch a {
  color: var(--brand);
  font-weight: 700;
}

.site-footer {
  background: white;
  border-top: 1px solid rgba(0, 0, 0, 0.06);
  padding: 1rem 0;
}

.site-footer p {
  text-align: center;
  color: var(--muted);
  font-size: 0.95rem;
}

@media (max-width: 540px) {
  .auth-card {
    padding: 1.5rem;
  }
}
'''

service_css = '''html {
  font-family: Arial, sans-serif;
}

.slider-container {
  width: 100%;
  max-width: 1100px;
  margin: 2rem auto 1.5rem;
  overflow: hidden;
  border-radius: 24px;
  box-shadow: var(--shadow);
}

.slider {
  position: relative;
}

.slide {
  display: none;
}

.slide.active {
  display: block;
  animation: fade 0.6s ease-in-out;
}

.slide img {
  width: 100%;
  height: 420px;
  object-fit: cover;
}

.caption {
  position: absolute;
  bottom: 1.5rem;
  left: 1.5rem;
  right: 1.5rem;
  background: rgba(0, 0, 0, 0.62);
  color: #fff;
  padding: 1rem 1.2rem;
  border-radius: 18px;
}

.caption h2 {
  margin-bottom: 0.5rem;
}

@keyframes fade {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 48px;
  height: 48px;
  background: rgba(255, 255, 255, 0.88);
  border: none;
  border-radius: 50%;
  cursor: pointer;
  display: grid;
  place-items: center;
  font-size: 1.1rem;
  color: var(--text);
}

.prev {
  left: 1rem;
}

.next {
  right: 1rem;
}

.nav:hover {
  background: var(--brand);
  color: white;
}

.booking-section {
  max-width: 980px;
  margin: 2rem auto;
}

.booking-section .section-header {
  margin-bottom: 1rem;
}

.booking-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 1.75rem;
  border-radius: 999px;
  color: white;
  background: var(--brand);
  font-weight: 700;
}

.booking-btn:hover {
  opacity: 0.95;
}

@media (max-width: 680px) {
  .slide img {
    height: 300px;
  }
  .caption {
    left: 1rem;
    right: 1rem;
  }
}
'''

Path('css/login.css').write_text(login_css, encoding='utf-8')
Path('css/service.css').write_text(service_css, encoding='utf-8')
