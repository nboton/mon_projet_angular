import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';

/**
 * Pour injecter un service dans un autre service, il faut que le service dans lequel on injecte un autre 
 * ait le décorateur  @Injectable , à importer depuis  @angular/core
 */

@Injectable()

export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }

  /**
   * 
   * @param route vérifier l'état de l'authentification dans  AuthService .  Si l'utilisateur est authentifié, la méthode renverra  true ,
   *  permettant l'accès à la route protégée.  Sinon, vous pourriez retourner  false
   * @param state 
   */

  canActivate(route: ActivatedRouteSnapshot,  state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean 
        {
            try{
                if(this.authService.isAuth) {
                return true;
                } else {
                this.router.navigate(['/auth']);
                }
            }catch(error){
                console.error(error);
            }

            return true;
       
          }
    
  }
