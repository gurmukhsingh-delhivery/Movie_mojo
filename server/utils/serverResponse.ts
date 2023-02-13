interface serverResponse{
    status: boolean,
    resp: any,
    error: any,
}

class response{
   status: boolean;
   resp:any;
   error: any;

   constructor(status: boolean,resp: any,error:any){
     this.status = status;
     this.resp = resp;
     this.error = error;
   }
}

export  {serverResponse,response};