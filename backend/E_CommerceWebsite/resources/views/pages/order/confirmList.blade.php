
@extends('layouts.app')
@section('content')


    <div id="Content"></div>

    
    <table class="table table-borded">
        <tr>
            <th>Customer name</th>
            <th>Price</th>
            <th>Status</th>

            <th></th>
        </tr>
        @foreach($orders as $order)

            @if($order->status == "Confirm")
                <tr>
                    <td>{{$order->customer->name}}</td>
                    <td>{{$order->price}}</td>
                    <td>{{$order->status}}</td>
                </tr>
            @endif
        @endforeach
    </table>


@endsection

