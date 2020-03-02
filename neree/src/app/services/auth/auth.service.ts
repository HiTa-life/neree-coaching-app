import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable()
export class AuthService {

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  login(loginForm: any) {
    console.log('Tentative de connexion');

    this.setUser({login : loginForm.username});

    // On récupère l'url de redirection
    const redirectUrl = this.route.snapshot.queryParams['redirectUrl'] || '/account/strength';

    // On accède à la page souhaitée
    this.router.navigate([redirectUrl]);
     // Ajout des roles au modèle utilisateur
  let rolesUser = [];
  if (loginForm.username === 'admin') {
    rolesUser = ['READ','WRITE'];
  } else if (loginForm.username === 'lecteur') {
    rolesUser = ['READ'];
  } else if (loginForm.username === 'redacteur') {
    rolesUser = ['WRITE'];
  }
  this.setUser({login : loginForm.username, roles : rolesUser});
  }

  hasAnyRole(roles: string[]) {
    const user = this.getUser();
  
    for (const role of user.roles) {
      if (roles.includes(role)) {
        return true;
      }
    }
    return false;
  }

  logout() {
    console.log('Tentative de déconnexion');

    this.clearUser();
    this.router.navigate(['/login']);
  }

  getUser() {
    return JSON.parse(localStorage.getItem('user'));
  }

  setUser(user: any) {
    localStorage.setItem('user', JSON.stringify(user));
  }

  clearUser() {
    localStorage.removeItem('user');
  }

}