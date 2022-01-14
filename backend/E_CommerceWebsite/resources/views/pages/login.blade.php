<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<title>Login Page</title>

	<link rel="stylesheet" href="css/style.css">

	<link href="https://fonts.googleapis.com/css?family=Lato:300,400,700&display=swap" rel="stylesheet">
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css" integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU" crossorigin="anonymous">

	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
</head>
<body>
	<form action="{{route('login')}}" method="post">

	{{@csrf_field()}}
	<section class="ftco-section bg-light">
		<div class="container">
			<div class="row justify-content-center">
				<div class="col-md-6 text-center mb-5"></div>
			</div>

			<div class="row justify-content-center">
				<div class="col-md-6 col-lg-5">
					<div class="login-wrap p-4 p-md-5">
		      	<div class="icon d-flex align-items-center justify-content-center">
		      		<span class="fa fa-user-o"></span>
		      	</div>

		      	<h3 class="text-center mb-4">Login an account?</h3>
				<form action="{{route('login')}}" method="post" class="login-form">
                    {{@csrf_field()}}
						<div class="form-group">
							<input type="text" class="form-control  rounded-left " name="uname" placeholder="Username" >
							@error('uname')
								<span class="text-danger">{{$message}}</span>
						  	@enderror
						</div>

					<div class="form-group d-flex">
					<input type="password" class="form-control rounded-left" name="password" placeholder="Password" >
					</div>

					<div>
				  		@error('password')
                    		<span class="text-danger">{{$message}}</span>
                 		@enderror
					</div>
					<div class="form-group d-md-flex">
						<div class="w-50">
							<label class="checkbox-wrap checkbox-primary">Remember Me
								<input type="checkbox" checked>
								<span class="checkmark"></span>
							</label>
						</div>
							<div class="w-50 text-md-right">
								<a href="#">Forgot Password</a>
							</div>
					</div>
					<div class="form-group">
						<button type="submit" class="btn btn-outline-info rounded submit p-2 px-3">Login</button>
					</div>
	          	</form>
	        </div>
				</div>
			</div>
		</div>
	</section>
	</form>
	<script src="js/jquery.min.js"></script>
	<script src="js/popper.js"></script>
	<script src="js/bootstrap.min.js"></script>
	<script src="js/main.js"></script>

	</body>
</html>