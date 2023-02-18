<?php

namespace Tests\Feature;

// use Illuminate\Foundation\Testing\RefreshDatabase;

use App\Models\User;
use Tests\TestCase;
use Illuminate\Support\Facades\Hash;
use Carbon\Carbon;

class UserApiTest extends TestCase
{
        /**
         * User API tests 
         *
         * @return void
         */
        public function testUserCreationEndpoint()
        {
                $id = fake()->uuid();
                $name = fake()->name();
                $email = fake()->email();
                $password = fake()->password();
                $response = $this->postJson('/api/auth/register', ['id' => $id, 'name' => $name, 'email' => $email, 'password' => $password]);

                $response->assertStatus(201)->assertJson(['status' => true]);
        }

        public function testUserLoginEndpoint()
        {
                $id = fake()->uuid();
                $name = fake()->name();
                $email = fake()->email();
                $password = fake()->password();
                $user = User::create([
                        'id' => $id,
                        'name' => $name,
                        'email' => $email,
                        'password' => Hash::make($password)
                ]);
                $tokenExpiration = config('sanctum.expiration');
                $token = $user->createToken('API_TOKEN', ['admin'], Carbon::now('UTC')->addMinute($tokenExpiration))->plainTextToken;
                $response = $this->withToken($token)->post('/api/auth/login', ['email' => $email, 'password' => $password]);
                $response->assertStatus(200)->assertJson(['status' => true]);
        }
}
