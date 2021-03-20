//Purpose of index.tx
// All of the available interceptors are referenced here...registered. here.
// We need them accross all the modules.
// We have three interceptors now!
// We may need more interceptors.
// not easy to maintain if we register in each module.Hectic
//  Register all interceptor at one point. httpINterceptorProfiders.

import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { ErrorsInterceptor } from "./errors.interceptor";
import { HeaderInterceptor } from "./header.interceptor";
import { JwtTokenInterceptor } from "./jwt-token.interceptor";


export const httpInterceptorProviders = [
    {
 provide: HTTP_INTERCEPTORS,
 useClass: HeaderInterceptor,
 multi: true,
},

{
    provide: HTTP_INTERCEPTORS,
    useClass: JwtTokenInterceptor,
    multi: true,  // give us the code for multiple modules true --> yes; false --> no.
},

{
    provide: HTTP_INTERCEPTORS,
    useClass: ErrorsInterceptor,
    multi: true,
}

]