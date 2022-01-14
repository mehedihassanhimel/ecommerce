<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Customer;

class CustomerController extends Controller
{
    //
        public function customerList(){

        $customers = Customer::all();
        return view('pages.customer.list')->with('customers',$customers);
    }

    
    public function deactive(Request $request){
        $var = Customer::where('id',$request->id)->first();
        $var->status = "Deactive";
        $var->save();
        return redirect()->route('customer.list');
    }

        
    public function active(Request $request){
        $var = Customer::where('id',$request->id)->first();
        $var->status = "Active";
        $var->save();
        return redirect()->route('customer.list');
    }
}
