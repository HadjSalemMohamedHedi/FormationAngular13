import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";

export class LogOutGuard implements CanActivate{
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
   // throw new Error("Method not implemented.");
    const token = localStorage.getItem('token');
    if(token){
      return false
    }else{
      return true;
    }

  }

}
