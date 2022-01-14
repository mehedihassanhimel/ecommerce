<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Customer;

class CustomerApiControlle extends Controller
{
    public function customerList(){

        $customers = Customer::all();
        return  $customers;
    }

        
    public function deactive(Request $request){
        $var = Customer::where('id',$request->id)->first();
        $var->status = "Block";
        $var->save();
        return 200;
    }

        
    public function active(Request $request){
        $var = Customer::where('id',$request->id)->first();
        $var->status = "Active";
        $var->save();
        return 200;
    }
}
