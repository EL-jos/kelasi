<?php

namespace Database\Seeders;

use App\Models\Classe;
use App\Models\School;
use App\Models\Teacher;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();
        //School::factory(20)->create();
        //Classe::factory(50)->create();
        Teacher::factory(20)->create();
    }
}
