<?php

namespace App\Http\Controllers;

use App\Models\Deliveryman;
use Illuminate\Support\Facades\File;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class DeliveryManApiController extends Controller
{
    //deliveryman list
    public function DeliveryManApiList(){
        return Deliveryman::all();
    }


    // //deliveryman Delete
    public function DeliveryManAPIdelete(Request $request){
        $id = $request->id;
        $deliveryman = Deliveryman::where('id',$id)->first();
        $destination = 'storage/deliveryMans_images/'.$deliveryman->image;
        if(File::exists($destination))
        {
            File::delete($destination);
        }
        $deliveryman->delete();
        return "Deleted";
    }

    // //deliveryman Details
    public function DeliveryManAPIDetails(Request $request){
        $id = $request->id;
        $name = $request->name;
        $deliveryman = Deliveryman::where('id',$id)->where('f_name',$name)->first();
        return $deliveryman;
    }


    // //deliveryman create
    public function DeliveryManAPICreate(Request $request)
    {
        
        $validator = Validator::make($request->all(), [    
                'fname'=>'required|min:2|max:50',
                'lname'=>'required|min:2|max:50',
                'address'=>'required|min:2|max:50',
                'email'=>'email',
                'username'=>'required|min:2|max:20',
                'password'=>'required',
                'conpassword'=>'required|same:password',
                'dob'=>'required',
                'phone'=>'required|regex:/^([0-9\s\-\+\(\)]*)$/',
                'gender'=>'required',
                'joiningDate'=>'required',
                'image'=>'required'
            ],
            [
                'fname.required'=>'First name required',
                'fname.min'=>'First name should be more than 2 charcters',
                'fname.max'=>'First name should be less than 50 charcters',
                'lname.required'=>'last name required',
                'lname.min'=>'Last name should be more than 2 charcters',
                'lname.max'=>'Last name should be less than 50 charcters',
                'address.required'=>'Address required',
                'email.required'=>'Email required',
                'username.required'=>'Username required',
                'password.required'=>'Password required',
                'conpassword.required'=>'Confirm password required',
                'dob.required'=>'DOB required',
                'phone.required'=>'Phone number required',
                'gender.required'=>'Gender required',
                'joiningDate.required'=>'Joining Date required'
            ]
        );
        
        if ($validator->fails()) 
        {
            return response()->json([
                'status'=>422,
                'errors'=>$validator->messages()
            ]);
        }
        else
        {
            
            $deliveryman = new Deliveryman();
            $deliveryman->f_name= $request->fname;
            $deliveryman->l_name = $request->lname;
            $deliveryman->uname = $request->username;
            $deliveryman->password = $request->password;
            $deliveryman->email = $request->email;
            $deliveryman->phone = $request->phone;
            $deliveryman->dob = $request->dob;
            $deliveryman->gender = $request->gender;
            $deliveryman->joining_date = $request->joiningDate;
            $deliveryman->address = $request->address;
            
            if($request->hasfile('image'))
            {
                $file = $request->file('image');
                $extension = $file->getClientOriginalExtension();
                $filename = time().'.'.$extension;
                $file->move('storage/deliveryMans_images/',$filename);
                $deliveryman->image = $filename;
            }

            $deliveryman->save();

            return response()->json([
                "status"=>200,
                "message"=>"Deliveryman Added Successfully",
            ]);

         }

    }


    // //Edit deliveryman
    public function DeliveryManApiEdit(Request $request){
        // return $request->id;
        $id = $request->id;
        $deliveryman = Deliveryman::where('id',$id)->first();
        return $deliveryman;
    }


    // //Edit deliveryman Submit
    public function DeliveryManApiEditSubmit(Request $request){
        
        $deliveryman = Deliveryman::where('id',$request->id)->first();
        $deliveryman->f_name= $request->fname;
        $deliveryman->l_name = $request->lname;
        $deliveryman->uname = $request->username;
        $deliveryman->password = $request->password;
        $deliveryman->email = $request->email;
        $deliveryman->phone = $request->phone;
        $deliveryman->dob = $request->dob;
        $deliveryman->gender = $request->gender;
        $deliveryman->joining_date = $request->joiningDate;
        $deliveryman->address = $request->address;
        if($request->hasfile('image'))
        {
            $destination = 'storage/deliveryMans_images/'.$deliveryman->image;
            if(File::exists($destination))
            {
                File::delete($destination);
            }
            $file = $request->file('image');
            $extension = $file->getClientOriginalExtension();
            $filename = time().'.'.$extension;
            $file->move('storage/deliveryMans_images/',$filename);
            $deliveryman->image = $filename;
        }
        
        $deliveryman->save();
        return 200;


    }
}
