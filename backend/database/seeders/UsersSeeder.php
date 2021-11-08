<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

//Incluir la clase DB para interactuar con el Query builder
use Illuminate\Support\Facades\DB;
//Clase para hashear passwords
use Illuminate\Support\Facades\Hash;

class UsersSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            [
                "id_rol" => 1,
                "username" => "ADMIN",
                "nombre_apellido" => "ADMIN",
                "email" => "admin@gmail.com",
                "password" => Hash::make("AdminPasswordSecure123"),
                "edad" => 0
            ]
        ]);
    }
}
