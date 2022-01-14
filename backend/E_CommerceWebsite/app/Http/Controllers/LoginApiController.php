<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;
use App\Models\Employee;
use App\Models\Token;
use Illuminate\Support\Str;
use DateTime;

class LoginApiController extends Controller
{
    public function loginApiSubmit(Request $request){

        // return "ok";
        $validator = Validator::make($request->all(),
            [
                'username'=>'required|min:3|max:20',
                'password'=>'required'

            ],
            [

                'username.required'=>'Username required',
                'password.required'=>'Password required'
            ]
        );

        if ($validator->fails()) 
        {
            return response()->json([
                'status'=>422,
                'errors'=>$validator->messages()
            ]);
        }
        
        else{
            $employee = Employee::where('uname',$request->username)->where('password',$request->password)->first();
            
            if($employee)
            {
                // return "ok";
                
                $api_token = Str::random(64);
                $token = new Token();
                $token->userid = $employee->id;
                $token->token = $api_token;
                // return  $token->token;
                $token->created_at = new DateTime();
                $token->save();
               
                return $token;
                // return response()->json([
                //     "status"=>200,
                //     "token"=>$token,
                // ]);
            }
              
            return response()->json([
                "status"=>500,
                "message"=>"Invalid user",
            ]);
        }


        

    }
}
