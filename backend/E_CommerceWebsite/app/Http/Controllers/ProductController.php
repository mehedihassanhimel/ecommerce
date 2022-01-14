<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\DB;
use App\Models\Category;
use App\Models\Product;


class ProductController extends Controller
{
    public function createProduct(){

        $categories = Category::all();
        return view('pages.products.create')->with('categories',$categories);
    }
    
    public function search(Request $request){

        if($request->search != "")
        {
            $output="";
            $search = $request->search;


            $products = Product::where('name','LIKE',"%$search%")->get();
    
            if ( count( $products ) > 0 )
            {
                $output = "<table class='table table-borded'>
                <tr>
                    <th>Image</th>
                    <th>Product Name</th>
                    <th>Category</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Description</th>
                    <th>stock date</th>
                    <th></th>
                </tr>";
                foreach($products as $product)
                {
                    $output.=
                            "<tr> 
                                <td><img src='/storage/product_images/$product->image' width='70px' height='70px' alt=''></td>
                                <td>$product->name</td>
                                <td>{$product->Category->name}</td>
                                <td>$product->price</td>
                                <td>$product->quantity</td>
                                <td>$product->description</td>
                                <td>$product->stock_date</td>
                                <td><a href='/product/edit/$product->id/$product->name'>Edit</a></td>  
                                <td><a href='/product/delete/$product->id/$product->name'>Delete</a></td>   
                            </tr>";
                }
    
                $output .= '</table>';
                
            }
            else
            {

                $output .= '<span class="text-danger"> No data found </span>';
            }
            return $output;
        }
        
    }

    public function createSubmit(Request $request){

        $this->validate(
            $request,
            [
                'name'=>'required|min:2|max:10',
                'category'=>'required||min:1|not_in:Select a category',
                'price'=>'required|min:0|numeric',
                'quantity'=>'required|numeric',
                'description'=>'required|min:2|max:50',
                'stockDate'=>'required',
                'image'=>'required'

            ],
            [
                'name.required'=>'Product name required',
                'name.min'=>'Name must be greater than 2 charcters',
                'category.required'=>'Product category required',
                'category.not_in'=>'Product category required',
                'price.required'=>'Product price required',
                'price.numeric'=>'Product price should be a number',
                'quantity.required'=>'Product quantity required',
                'quantity.numeric'=>'Product quantity should be a number',
                'description.required'=>'Product description required',
                'stockDate.required'=>'Product stock sate required',
                'image.required'=>'Image required'
            ]
        );

        $var = new Product();
        $var->name= $request->name;
        $var->c_id = $request->category;
        $var->price = $request->price;
        $var->quantity = $request->quantity;
        $var->description = $request->description;
        $var->stock_date = $request->stockDate;

        if($request->hasfile('image'))
        {
            $file = $request->file('image');
            $extension = $file->getClientOriginalExtension();
            $filename = time().'.'.$extension;
            $file->move('storage/product_images/',$filename);
            $var->image = $filename;
        }
        $var->save();

        return redirect()->route('product.list');   

    }

    
    public function productList(Request $request){

        $products = Product::with('category')->get();
        return view('pages.products.list')->with('products',$products);
        // return $products;

        // $products = DB::table('products')
        // ->leftJoin('categories', 'products.c_id', '=', 'categories.id')
        // ->get();
        // return view('pages.products.list')->with('products',$products);

        // return $products;
        
        // ->leftJoin('posts', 'users.id', '=', 'posts.user_id')
    }


    public function productEdit(Request $request){
        $id = $request->id;
        $product = Product::where('id',$id)->first();
        $categories = Category::all();

        // return $product;
        return view('pages.products.edit')
        ->with('product', $product)
        ->with('categories',$categories);

    }

    public function editSubmit(Request $request){
        $var = Product::where('id',$request->id)->first();
        $var->name= $request->name;
        $var->c_id = $request->category;
        $var->price = $request->price;
        $var->quantity = $request->quantity;
        $var->description = $request->description;
        $var->stock_date = $request->stockDate;

        if($request->hasfile('image'))
        {
            $destination = 'storage/product_images/'.$var->image;
            if(File::exists($destination))
            {
                File::delete($destination);
            }
            $file = $request->file('image');
            $extension = $file->getClientOriginalExtension();
            $filename = time().'.'.$extension;
            $file->move('storage/product_images/',$filename);
            $var->image = $filename;
        }
        
        $var->save();
        return redirect()->route('product.list');


    }

    public function delete(Request $request){
        $var = Product::where('id',$request->id)->first();
        $destination = 'storage/product_images/'.$var->image;
        if(File::exists($destination))
        {
            File::delete($destination);
        }
        $var->delete();
        return redirect()->route('product.list');
    }
}
