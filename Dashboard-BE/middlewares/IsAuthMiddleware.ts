import {Request, Response, NextFunction } from 'express';

export async function IsAuthMiddleware(request : Request, response: Response, next: NextFunction) {
    try{
        console.log(JSON.stringify(request.cookies))
        if(request.cookies.authToken){
            console.log("Cookies exist : ",request.cookies.authToken)
            next();
        }else{
            console.log("Cookies does not exist")
            return response.status(401).send('Unauthorized'); 
        }

        //next();
    }catch(e){
        console.log("Error in IsAuthMiddleware ", e);
        return response.status(500)
    }
   

}   