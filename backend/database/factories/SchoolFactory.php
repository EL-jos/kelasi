<?php

namespace Database\Factories;

use App\Models\City;
use App\Models\Province;
use Illuminate\Database\Eloquent\Factories\Factory;

class SchoolFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {

        return [
            'name' => $this->faker->company,
            'phone' => $this->faker->phoneNumber,
            'address' => $this->faker->address,
            'city_id' => City::inRandomOrder()->first()->id,
            'responsable_name' => $this->faker->lastName,
            'responsable_phone' => $this->faker->phoneNumber,
            'responsable_address' => $this->faker->address,
            'password' => "$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi", // password
        ];
    }
}
