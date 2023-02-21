
<?php

namespace Tests\Feature;

// use Illuminate\Foundation\Testing\RefreshDatabase;

use App\Models\City;
use App\Models\User;
use Tests\TestCase;
use Illuminate\Support\Facades\Hash;
use Carbon\Carbon;

class CityApiTest extends TestCase
/**
 * City API tests 
 *
 * @return void
 */
{

        public function testAssociateCityWithUser()
        {
                // Create a user
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
                $city=City::inRandomOrder()->first();
                $token = $user->createToken('API_TOKEN', ['admin'], Carbon::now('UTC')->addMinute($tokenExpiration))->plainTextToken;
                //Add city with user
                $createCityResponse = $this->withToken($token)->postJson(`/api/city/{$city->id}`, ['user_id' => $user->id]);
                $createCityResponse->assertStatus(201)->assertJson(['status' => true]);
        }
        public function testCityUpdateRoute()
        {
        }
}
