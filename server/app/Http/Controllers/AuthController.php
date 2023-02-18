<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Carbon\Carbon;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Ramsey\Uuid\Uuid;

class AuthController extends Controller
{
        /**
         * Create User
         * @param Request $request
         * @return User 
         */
        public function createUser(Request $request)
        {
                try {
                        //Validate User
                        $userValidator = Validator::make($request->all(), [

                                'name' => 'required',
                                'email' => 'required|email|unique:users,email',
                                'password' => 'required'
                        ]);

                        if ($userValidator->fails()) {
                                return response()->json([
                                        'status' => false,
                                        'message' => 'Validation Fails',
                                        'errors' => $userValidator->errors(),
                                ], 401);
                        };

                        $user = User::create([
                                'id'=>Uuid::uuid1(), 
                                'name' => $request->name,
                                'email' => $request->email,
                                'password' => Hash::make($request->password)
                        ]);

                        $tokenExpiration = config('sanctum.expiration');

                        return response()->json([
                                'status' => true,
                                'message' => 'User Created Successfully',
                                'token' => $user->createToken('API_TOKEN', ['admin'], Carbon::now('UTC')->addMinute($tokenExpiration))->plainTextToken,
                        ], 201);
                } catch (\Throwable $th) {
                        return response()->json([
                                'status' => false,
                                'message' => $th->getMessage()
                        ], 500);
                }
        }

        /**
         * Login The User
         * @param Request $request
         * @return User
         */
        public function loginUser(Request $request)
        {
                try {
                        $validateUser = Validator::make(
                                $request->all(),
                                [
                                        'email' => 'required|email',
                                        'password' => 'required'
                                ]
                        );

                        if ($validateUser->fails()) {
                                return response()->json([
                                        'status' => false,
                                        'message' => 'validation error',
                                        'errors' => $validateUser->errors()
                                ], 401);
                        }
                        $user = User::where('email', $request->email)->first();


                        if (!$user || Hash::check($request->pasword, $user->password)) {
                                return response()->json(['status' => true, 'message' => "Check user or password"], 404);
                        };
                        return response()->json([
                                'status' => true,
                                'message' => 'User Logged In Successfully',
                                'token' => $user->createToken($request->email)->plainTextToken
                        ], 200);
                } catch (\Throwable $th) {
                        return response()->json([
                                'status' => false,
                                'message' => $th->getMessage()
                        ], 500);
                }
        }

        public function expiresUserToken(Request $request)
        {
                try {
                        $validateUser = Validator::make(
                                $request->all(),
                                [
                                        'email' => 'required|email',
                                        'password' => 'required'
                                ]
                        );

                        if ($validateUser->fails()) {
                                return response()->json([
                                        'status' => false,
                                        'message' => 'validation error',
                                        'errors' => $validateUser->errors()
                                ], 401);
                        };
                        $request->user()->tokens()->delete();
                        return response()->json([
                                'status' => true,
                                'message' => 'User tokens are expired',
                        ], 200);
                } catch (\Throwable $th) {
                        return response()->json([
                                'status' => false,
                                'message' => $th->getMessage()
                        ], 500);
                }
        }
}
