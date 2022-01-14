<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Employee;

class LoginController extends Controller
{
    public function Login(){

        return view('pages.login');
    }

    public function loginSubmit(Request $request){
        $this->validate(

            $request,

            [
                'uname'=>'required|min:3|max:20',
                'password'=>'required'
            ],

            [
                'uname.required'=>'Username required',
                'password.required'=>'Password required'
            ]

        );
        $employee = Employee::where('uname',$request->uname)
                            ->where('password',$request->password)
                            ->first();
        
        if($employee){
            $request->session()->put('user',$employee->f_name);
            return redirect()->route('employee.home');
        }

        return back();

    }

    public function logout(){
        session()->forget('user');
        return redirect()->route('login');
    }
}
