
@extends('layouts.app')
@section('content')

    <div class="col-md-9 form-group" >
        <input type="text" name="search" id="search" class="form-control" placeholder="Search.." />
    </div>

    <div id="Content"></div>
    <table class="table table-borded">
        <tr>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Address</th>
            <th>Status</th>
            <th></th>
        </tr>
        @foreach($customers as $customer)
            <tr>

                <td>{{$customer->name}}</td>
                <td>{{$customer->uname}}</td>
                <td>{{$customer->email}}</td>
                <td>{{$customer->phone}}</td>
                <td>{{$customer->address}}</td>
                <td>{{$customer->status}}</td>
            
                <td><a href="/customer/active/{{$customer->id}}/{{$customer->name}}">Active</a></td>
                <td><a href="/customer/deactive/{{$customer->id}}/{{$customer->name}}">Deactive</a></td>
            </tr>
        @endforeach
    </table>

@endsection

