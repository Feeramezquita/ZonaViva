<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

//Incluir la clase DB para interactuar con el Query builder
use Illuminate\Support\Facades\DB;

class RolSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('rol')->insert([
            ["nombre_rol" => "Administrador"],
            ["nombre_rol" => "Moderador Productos"],
            ["nombre_rol" => "Moderador Cursos"],
            ["nombre_rol" => "Usuario"]
        ]);
    }
}
